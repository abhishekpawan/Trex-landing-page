// Site-wide constants. Release day: set NEXT_PUBLIC_PLAY_LIVE=true in the hosting environment (Netlify) and redeploy, or change the
// default below. While it is false the waitlist form shows and the Google Play button stays hidden.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://trexfolio.com'

export const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.novarex.trex'
export const PLAY_LIVE = process.env.NEXT_PUBLIC_PLAY_LIVE === 'true'

// The Trex server (self-hosted Supabase). The waitlist function lives there.
export const WAITLIST_URL =
  process.env.NEXT_PUBLIC_WAITLIST_URL || 'https://db.novarexstudios.com/functions/v1/landing-page-submit'

// Addresses already on the site before WP-LAND (privacy policy and terms use the first, the delete-account page the second).
export const CONTACT_EMAIL = 'novarexstudios@gmail.com'
export const SUPPORT_EMAIL = 'support@novarexstudios.com'

export const PRIVACY_UPDATED = '26 November 2026'
