import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

// "Get your statement": one section per route. The anchor ids are the route ids the Trex app opens (#cams, #mfcentral, #cdsl_email,
// #cdsl, #nsdl): see casSources.routes in app/ops/server/config/price-sources.json. Do not rename them without changing the config.
export const metadata: Metadata = {
  title: 'Get your statement (CAS) for Trex',
  description: 'Step by step, with pictures: how to get your mutual fund and demat statement (CAS) from CAMS, MF Central or CDSL (NSDL not yet tested), to import into Trex.',
  alternates: { canonical: '/help' },
}

type Pic = { src: string; alt: string; h: number }

function Pictures({ pics }: { pics: Pic[] }) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-3 -mx-1 px-1 snap-x" aria-label="Pictures of the steps">
      {pics.map((p) => (
        <figure key={p.src} className="flex-shrink-0 w-[200px] snap-start">
          <Image src={p.src} alt={p.alt} width={720} height={p.h} sizes="200px" className="w-full h-auto rounded-xl border border-white/10" />
          <figcaption className="text-xs text-ink/55 mt-2 leading-snug">{p.alt}</figcaption>
        </figure>
      ))}
    </div>
  )
}

function Route({
  id, title, lead, checked, notChecked, steps, good, pics, link,
}: {
  id: string; title: string; lead: string; checked: string; notChecked?: string; steps: React.ReactNode[]; good: React.ReactNode[]; pics?: Pic[]
  link?: { href: string; label: string }
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-white/10 pt-10 mt-12">
      <h2 className="text-2xl md:text-3xl font-bold text-ink mb-3">{title}</h2>
      <p className="text-ink/80 leading-relaxed mb-4">{lead}</p>
      <p className="text-sm text-ink/60 mb-6 leading-relaxed">
        <span className="font-semibold text-accent">Checked:</span> {checked}
        {notChecked && (
          <>
            {' '}
            <span className="font-semibold text-amber-300">Not re-checked:</span> {notChecked}
          </>
        )}
      </p>
      {link && (
        <p className="mb-6">
          <a href={link.href} target="_blank" rel="noopener noreferrer" className="inline-block rounded-lg bg-accent px-5 py-3 font-semibold text-page hover:opacity-90">
            {link.label}
          </a>
        </p>
      )}
      <ol className="list-decimal pl-6 space-y-3 text-ink/85 leading-relaxed marker:text-accent marker:font-bold">
        {steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>
      {pics && (
        <div className="mt-6">
          <Pictures pics={pics} />
        </div>
      )}
      <h3 className="text-lg font-semibold text-white mt-8 mb-3">Good to know</h3>
      <ul className="list-disc pl-6 space-y-2 text-ink/75 leading-relaxed marker:text-accent">
        {good.map((g, i) => (
          <li key={i}>{g}</li>
        ))}
      </ul>
    </section>
  )
}

const b = (t: string) => <strong className="text-white">{t}</strong>

export default function Help() {
  return (
    <div className="min-h-screen bg-page text-ink font-sans selection:bg-accent selection:text-page">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-ink tracking-tighter mb-4">Get your statement</h1>
            <p className="text-ink/75 text-lg leading-relaxed mb-4">
              To bring your mutual funds and shares into Trex, you import a statement (CAS). It is a PDF that your fund registrar or
              depository sends you. It lists every fund or share you hold. Trex reads the PDF on your phone. It is never uploaded.
            </p>
            <p className="text-ink/75 leading-relaxed mb-8">
              The sites below are not ours, and we never see what you type there, such as your PAN or a code sent to your phone. Websites
              change: each section says when we last looked, and the Trex screen still points you to the right site if a button has moved.
            </p>

            <nav aria-label="Which statement" className="rounded-2xl border border-white/10 bg-white/5 p-6 mb-4">
              <h2 className="text-lg font-semibold text-white mb-4">Which one should I use?</h2>
              <ul className="space-y-3 text-ink/80 leading-relaxed">
                <li>
                  <strong className="text-white">Funds, first time:</strong> <a href="#cams" className="text-accent underline underline-offset-4">CAMS</a>. It
                  gives your whole history, from your first purchase, and funds you have sold. It comes by email, from about 15 minutes to a few hours.
                </li>
                <li>
                  <strong className="text-white">Funds, an update:</strong> <a href="#mfcentral" className="text-accent underline underline-offset-4">MF Central</a>.
                  No password to remember, ready in about 30 minutes, but it goes back only to January 2023.
                </li>
                <li>
                  <strong className="text-white">Shares and ETFs in a demat account:</strong>{' '}
                  <a href="#cdsl_email" className="text-accent underline underline-offset-4">your depository’s monthly email</a>, or download it from{' '}
                  <a href="#cdsl" className="text-accent underline underline-offset-4">CDSL</a> or <a href="#nsdl" className="text-accent underline underline-offset-4">NSDL</a>.
                </li>
              </ul>
              <p className="text-sm text-ink/60 mt-4 leading-relaxed">
                Passwords: a CAMS statement opens with the password you choose on the form. NSDL and CDSL statements open with your PAN
                in capital letters. An MF Central statement has no password.
              </p>
            </nav>

            <h2 className="text-xl font-semibold text-accent mt-12">Mutual funds</h2>

            <Route
              id="cams"
              title="CAMS: the statement by email"
              lead="CAMS and KFintech together send one statement that covers funds from both. You fill in a short form and the PDF arrives in your email. Allow about 5 minutes of your time and up to a few hours of waiting."
              checked="in Trex with a real statement on 12 Nov 2026, which worked. The form was read again on 26 Nov 2026 (nothing typed or sent)."
              notChecked="the steps after you press Submit (the email, and whether a captcha appears) were not repeated on 26 Nov."
              link={{ href: 'https://www.camsonline.com/Investors/Statements/Consolidated-Account-Statement', label: 'Open the CAMS form' }}
              steps={[
                <>On the CAMS page “CAS - CAMS+KFintech”, close any cookie box or pop-up.</>,
                <>Under {b('Statement type')}, choose {b('Detailed')} (it may start on Summary). Detailed shows the period choices.</>,
                <>Under {b('Period')}, choose {b('Specific period')}. Set {b('From date')} as far back as the form allows and {b('To date')} to today.</>,
                <>For {b('Folio listing')}, choose an option that includes folios with a balance, such as {b('Transacted folios and folios with balance')}.</>,
                <>Type the {b('email')} registered with your folios. {b('PAN')} is marked optional on the form today (when we tried it on 12 Nov, we typed ours).</>,
                <>Choose a {b('password')} for the PDF and type it again. The form asks for 8 to 15 characters, starting with a letter, with at least one capital letter, one number and one of @ # $ * _. Remember it: Trex asks for it. If a captcha shows, complete it, then press {b('Submit')}.</>,
                <>When the email from CAMS arrives, download the PDF. Or tap {b('Share')} and choose {b('Trex')}.</>,
                <>In Trex, pick the PDF and type the password you chose. Check the list, then tap {b('Add to my portfolio')}.</>,
              ]}
              good={[
                'CAMS goes back further than MF Central: your whole history from your first purchase. In our test it began in July 2019, against MF Central’s January 2023 limit.',
                'It also lists funds you have fully sold. Trex keeps them out of your lists but counts them in your returns.',
                'In our test it matched MF Central’s Detailed statement to the rupee, and importing the second one changed nothing: Trex recognises the same funds from either statement.',
                'The form covers funds serviced by both CAMS and KFintech, so a KFintech statement can be requested here too, though we have not tested a KFintech file.',
              ]}
            />

            <Route
              id="mfcentral"
              title="MF Central: all your funds, with every purchase and SIP"
              lead="MF Central lists the funds under your PAN from every platform. Allow about 5 minutes of your time, plus about 30 minutes of waiting."
              checked="in Trex with a real statement on 12 Nov 2026, which worked. The sign-in page was read again on 26 Nov 2026 (it still offers Password or OTP)."
              notChecked="everything after you sign in (the menu, Statement, Detailed, the dates and My Downloads) needs a sign-in and was not repeated on 26 Nov."
              link={{ href: 'https://app.mfcentral.com/investor/signin', label: 'Open MF Central' }}
              steps={[
                <>In Trex, tap {b('Get your statement')}, choose {b('Mutual funds, an update')} and then {b('Download from MF Central')}. The MF Central page opens.</>,
                <>Tap {b('Sign In')}. Choose {b('OTP')} (the switch under the box), type your PAN, and ask for the code. Type the code that arrives on your phone. You type your PAN and the code yourself; Trex never sees them.</>,
                <>Tap the menu (three lines, top left), then {b('Statement')}.</>,
                <>Tap the {b('Detailed')} tab.</>,
                <>Choose {b('Specific period')}. Set {b('From')} to {b('1 January 2023')}, because it will not go earlier, and leave {b('To')} as today. Tap the calendar, tap the year at the top, choose 2023, go back to January and tap 1.</>,
                <>Tap {b('Download as PDF')}. A note says the file will be ready in about 30 minutes. Tap {b('Download')} in the note to close it.</>,
                <>Wait. After about 30 minutes (ours took 19) open {b('Statement')}, then {b('My Downloads')}. When the line says {b('Download')} instead of In Progress, tap it. The PDF goes to your Downloads folder. It has no password.</>,
                <>Back in Trex, tap {b('Pick the file you just downloaded')}, choose the PDF, check the list and tap {b('Add to my portfolio')}.</>,
              ]}
              pics={[
                { src: '/help/mfcentral-1-sign-in.jpg', alt: 'Step 2: the Sign In page. Choose OTP under the PAN box.', h: 882 },
                { src: '/help/mfcentral-2-menu.jpg', alt: 'Step 3: the menu. Tap Statement.', h: 1560 },
                { src: '/help/mfcentral-3-detailed.jpg', alt: 'Steps 4 and 5: the Detailed tab with a specific period.', h: 1560 },
                { src: '/help/mfcentral-4-calendar.jpg', alt: 'Step 5: picking the From date in the calendar.', h: 1560 },
                { src: '/help/mfcentral-5-note.jpg', alt: 'Step 6: the note that says the file is ready in about 30 minutes.', h: 1560 },
              ]}
              good={[
                'The Summary tab is instant but only shows what you hold today, with no past purchases and no SIPs. Trex says so and offers to bring you back here for the Detailed one.',
                'The Detailed file only goes back to 1 January 2023. Older purchases are not in it, so Trex starts your history from your first purchase it can see.',
                'Trex finds the SIPs the statement marks as SIP. A SIP you set up in the last few weeks has only one or two instalments so far, and is still found.',
                'Funds bought on other platforms, such as Groww, show up too, with the same units as in that app.',
              ]}
            />

            <h2 className="text-xl font-semibold text-accent mt-16">Shares, ETFs and funds in a demat account</h2>

            <Route
              id="cdsl_email"
              title="Your depository’s monthly email"
              lead="CDSL emails a statement every month in which something happened in your demat account, such as a purchase, a sale or a dividend. It takes about 2 minutes. If your account is with NSDL, the same idea applies: look for NSDL’s monthly statement email."
              checked="in Trex with a real CDSL email on 12 Nov 2026, which worked."
              notChecked="this route depends on your own mailbox, so there is no website to look at again."
              steps={[
                <>Open your email. In Trex: {b('Get your statement')}, {b('Stocks in a demat account')}, the recommended route, then {b('Open my email')}.</>,
                <>Search for {b('eCAS')} or {b('Consolidated Account Statement')}. The PDF is named like {b('OCT2026_…pdf')}.</>,
                <>Open the email and {b('Share')} the PDF to {b('Trex')}. Or download it and use {b('Pick the file')}.</>,
                <>Trex asks for a password. Type your {b('PAN in capital letters')}, like ABCDE1234F. You can tick {b('Remember on this phone')} so next month needs no typing.</>,
                <>Check the list and tap {b('Add to my portfolio')}.</>,
              ]}
              good={[
                'The statement is as of the last day of that month, so shares you bought after it are missing. Import the next one when it arrives.',
                'It lists what you hold, not what you paid, so gains count from the statement date.',
                'Bonds and NPS in the same statement are named in Trex as not imported. Add them by hand.',
                'If you also imported MF Central’s Detailed statement, funds that are in both are recognised and joined, not added twice.',
              ]}
            />

            <Route
              id="cdsl"
              title="CDSL: download it yourself"
              lead="If no email came, you can ask CDSL for your statement on its website. The site is sometimes down."
              checked="the CDSL page was opened on 26 Nov 2026 (read-only). It asks for three things: your PAN, your BO ID (the demat account ID) and your date of birth."
              notChecked="signing in and downloading. Nothing was typed on the page. When we tried it on 11 Nov 2026 the site gave an error on CDSL’s side, so we have not imported a statement from this route."
              link={{ href: 'https://www.cdslindia.com/cas/logincas.aspx', label: 'Open the CDSL page' }}
              steps={[
                <>Open the CDSL page above. It is titled {b('Log into CAS / Declare Bonafide')}.</>,
                <>Type your PAN, your BO ID and your date of birth, then follow the site’s own steps to get the statement. You type these on CDSL’s site; Trex never sees them.</>,
                <>Save the PDF to your phone, then in Trex tap {b('Pick the file')} and choose it. The password is your PAN in capital letters.</>,
              ]}
              good={[
                'Your BO ID is on your demat account statement or in your broker’s app.',
                'If the site shows an error, try again later, or use the monthly email above.',
              ]}
            />

            <Route
              id="nsdl"
              title="NSDL: download it yourself"
              lead="If your shares are held with NSDL, its CAS site is where the statement comes from."
              checked="the NSDL CAS page was opened on 26 Nov 2026 (read-only). It offers e-CAS by email (you subscribe or update your email address, with a captcha), a way to track a statement, and a login that also uses a captcha. NSDL says a statement is sent for each month with a transaction, and otherwise for March and September."
              notChecked="signing in and downloading. Nothing was typed on the page, and no real NSDL statement has been tried in Trex. It may work, but we can’t promise it yet."
              link={{ href: 'https://nsdlcas.nsdl.com/', label: 'Open the NSDL CAS page' }}
              steps={[
                <>Open the NSDL CAS page above.</>,
                <>Use the page’s own options to get your statement by email or to log in to download it. You type your details on NSDL’s site; Trex never sees them.</>,
                <>Save the PDF to your phone, then in Trex tap {b('Pick the file')} and choose it. The password is your PAN in capital letters.</>,
              ]}
              good={[
                'NSDL’s statement can also list funds. If you imported a fund statement from CAMS or MF Central, funds in both are recognised and joined.',
                'If something does not import, send feedback from Trex Settings. It helps us fix the reader.',
              ]}
            />

            <p className="border-t border-white/10 mt-16 pt-8 text-sm text-ink/60 leading-relaxed">
              Pictures are real screens with personal details covered. Questions? Read the <Link href="/#faq" className="text-accent underline underline-offset-4">FAQ</Link>{' '}
              or the <Link href="/privacypolicy" className="text-accent underline underline-offset-4">privacy policy</Link>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
