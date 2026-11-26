# Trex landing page: context (v2, Trex 2.0)

Rewritten by WP-LAND, 2026-11-26. The old document described the 1.0.4 site (manual-entry tracker, "encrypted by default, even from the app itself"); none of it applies. The app, plan and claims live in the Trex app repo (`abhishekpawan/trex`): `docs/revamp/PLAN.md`, `docs/marketing/claims.md`, `docs/product/privacy-model.md`, `docs/design/voice.md`.

## Rules for every text on this site

- Every sentence about Trex rests on a row of `docs/marketing/claims.md` (or `privacy-model.md`). Never "no data leaves your phone", "we collect nothing", "bank-grade", AI statement reading, "official" or "licensed" by AMFI or BSE, advice, invented numbers.
- Voice: `docs/design/voice.md` (plain words, keep the real term beside it, no exclamation marks, no hype).
- Pictures show made-up data only (the app's own tour pictures, `docs/tour/`), never a real portfolio. The help pictures are redacted.
- The privacy policy, the app's "What leaves your phone" text (`src/constants/privacyText.ts`) and `privacy-model.md` change together.

## Hosting and deploy

- Netlify (site `trexfolio`, team Novarex Studio), Next.js runtime, linked to `github.com/abhishekpawan/Trex-landing-page`. Production branch `main`: **a push to `main` deploys the live site.** Branch deploys are off; a pull request against `main` makes a Deploy Preview. Build: `pnpm run build`, Node 22.
- Work happens on branch `v2`. Merge to `main` only on release day, with Abhishek's OK.

## Release day switch

`NEXT_PUBLIC_PLAY_LIVE=true` (Netlify environment variable, then redeploy) shows the Google Play button and hides the waitlist form (`src/lib/site.ts`, `components/ui/GetTrex.tsx`, the Navbar). Store link: `https://play.google.com/store/apps/details?id=com.novarex.trex`.

## Waitlist

The form posts to the Trex server's `landing-page-submit` function (`NEXT_PUBLIC_WAITLIST_URL`, default `https://db.novarexstudios.com/functions/v1/landing-page-submit`); rows land in `public.waitlist_registrations` on the Trex database. The old cloud Supabase address no longer exists.

## Pages

| Route | What | Notes |
|---|---|---|
| `/` | Home: hero (FDs first), FD features with pictures, the other kinds + statement import, privacy, Free vs Plus, how it works, FAQ, call to action | Sections in `src/components/sections/` |
| `/help` | "Get your statement": one section per route | Anchors are the route ids the app opens: `#cams`, `#mfcentral`, `#cdsl_email`, `#cdsl`, `#nsdl` (`casSources.routes` in the app's `ops/server/config/price-sources.json`). Never rename them without changing the config |
| `/privacypolicy`, `/termsofservice` | 2.0 policy and terms | A draft for a lawyer's read |
| `/delete-account` | Google Play's account-deletion page | Matches the in-app flow |
| `/sitemap.xml`, `/robots.txt` | SEO | |

## Pictures

`public/screens/`: copies of the app's tour pictures (`docs/tour/img/`, made-up data), shown from the top by the phone frame (`components/ui/S25UltraMockup.tsx`, its `height` prop says how much of the 540 x 1176 picture to show). `public/help/`: the MF Central pictures from `docs/help/get-your-statement/images/`, resized. If you swap a picture, delete `.next` before a local `next start`, or the image cache serves the old one.

## Check before a deploy

`pnpm build`, then look at every page at 360 px and at desktop width (no sideways scroll), follow every link, and have the `trex-marketer` agent check any changed sentence against `claims.md`.
