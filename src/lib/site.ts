// Site-wide constants. Release day: set NEXT_PUBLIC_PLAY_LIVE=true in the hosting environment (Netlify) and redeploy, or change the
// default below. While it is false the Google Play button opens the "Coming soon" pop-up; the App Store button always does.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://trexfolio.com'

export const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.novarex.trex'
export const PLAY_LIVE = process.env.NEXT_PUBLIC_PLAY_LIVE === 'true'

// One contact address everywhere on the site (privacy policy, terms, delete-account).
export const SUPPORT_EMAIL = 'support@novarexstudios.com'
export const CONTACT_EMAIL = SUPPORT_EMAIL

export const PRIVACY_UPDATED = '27 November 2026'
