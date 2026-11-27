import { NextResponse } from 'next/server'

// Adds a waitlist address to Trex's Buttondown list (BUTTONDOWN_API_KEY, set in Netlify as a secret).
// Buttondown sends a confirmation mail first (double opt-in); the person is on the list after clicking it.
// Then pings the "Novarex Service Requests" Telegram group through the Trex bot with the masked address only.
// TELEGRAM_DRY_RUN=1 logs the ping instead of sending it; BUTTONDOWN_DRY_RUN=1 skips Buttondown (tests).
export const dynamic = 'force-dynamic'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// "ab•••@gmail.com": enough to recognise a signup without keeping full addresses in the chat.
const maskEmail = (email: string) => {
  const [local, domain] = email.split('@')
  return `${local.slice(0, 2)}•••@${domain}`
}

// A failed ping never fails the signup. Awaited: the serverless function may stop once it has responded.
async function notifyTelegram(email: string) {
  const text = `Trex waitlist: new sign-up ${maskEmail(email)} (waiting for them to confirm by email)`
  if (process.env.TELEGRAM_DRY_RUN === '1') {
    console.log(`[waitlist] TELEGRAM_DRY_RUN, not sent: ${text}`)
    return
  }
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  if (!token || !chatId) {
    console.error('[waitlist] Telegram not configured; sign-up not announced')
    return
  }
  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text }),
      signal: AbortSignal.timeout(4000),
    })
    if (!res.ok) console.error(`[waitlist] Telegram returned HTTP ${res.status}`)
  } catch (err) {
    console.error('[waitlist] Telegram request failed:', err instanceof Error ? err.message : 'unknown')
  }
}

export async function POST(request: Request) {
  let body: { email?: unknown; website?: unknown }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'We could not read that. Please try again.' }, { status: 400 })
  }

  // Honeypot: bots fill the hidden field. Pretend it worked.
  if (typeof body.website === 'string' && body.website.trim() !== '') {
    return NextResponse.json({ ok: true })
  }

  const email = typeof body.email === 'string' ? body.email.trim() : ''
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ ok: false, error: 'Enter a valid email address.' }, { status: 400 })
  }

  if (process.env.BUTTONDOWN_DRY_RUN === '1') {
    console.log('[waitlist] BUTTONDOWN_DRY_RUN, not sent to Buttondown')
    await notifyTelegram(email)
    return NextResponse.json({ ok: true })
  }

  const apiKey = process.env.BUTTONDOWN_API_KEY
  if (!apiKey) {
    console.error('[waitlist] BUTTONDOWN_API_KEY is not set')
    return NextResponse.json(
      { ok: false, error: 'The waitlist is not open yet. Please try again later.' },
      { status: 503 },
    )
  }

  const ip =
    request.headers.get('x-nf-client-connection-ip') || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
  try {
    const res = await fetch('https://api.buttondown.com/v1/subscribers', {
      method: 'POST',
      headers: { Authorization: `Token ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email_address: email, tags: ['waitlist'], ...(ip ? { ip_address: ip } : {}) }),
    })
    if (res.ok) {
      await notifyTelegram(email)
      return NextResponse.json({ ok: true })
    }

    const detail = await res.text()
    // Already on the list: answer as success, so the form does not reveal who is on it.
    if (res.status === 400 && /already|exists/i.test(detail)) return NextResponse.json({ ok: true })
    console.error(`[waitlist] Buttondown returned HTTP ${res.status}`)
    const blocked = res.status === 400 && /firewall|spam|block|invalid/i.test(detail)
    return NextResponse.json(
      {
        ok: false,
        error: blocked
          ? 'That address could not be added. Please check it.'
          : 'We could not save your email just now. Please try again in a little while.',
      },
      { status: blocked ? 400 : 502 },
    )
  } catch (err) {
    console.error('[waitlist] Buttondown request failed:', err instanceof Error ? err.message : 'unknown')
    return NextResponse.json(
      { ok: false, error: 'We could not save your email just now. Please try again in a little while.' },
      { status: 502 },
    )
  }
}
