// Site-wide constants. Release day: set NEXT_PUBLIC_PLAY_LIVE=true in the hosting environment (Netlify) and redeploy, or change the
// default below. While it is false the waitlist form shows and the Google Play button stays hidden.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://trexfolio.com'

export const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.novarex.trex'
export const PLAY_LIVE = process.env.NEXT_PUBLIC_PLAY_LIVE === 'true'

// The waitlist route on this site (src/app/api/waitlist/route.ts): Buttondown plus a masked Telegram ping.
export const WAITLIST_URL = '/api/waitlist'

// One contact address everywhere on the site (privacy policy, terms, delete-account).
export const SUPPORT_EMAIL = 'support@novarexstudios.com'
export const CONTACT_EMAIL = SUPPORT_EMAIL

export const PRIVACY_UPDATED = '26 November 2026'
