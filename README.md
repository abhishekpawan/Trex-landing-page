# Trex Landing Page

A modern, privacy-first wealth tracking landing page built with Next.js 14, TypeScript, and Tailwind CSS.

## What it is

trexfolio.com for Trex 2.0: an FD-first, privacy-first portfolio tracker for India. Read `TREX_LANDING_PAGE_CONTEXT.md` before changing any text (every sentence rests on the app repo's `docs/marketing/claims.md`).

## Getting Started

### Prerequisites

- Node.js 20+ 
- pnpm (the lockfile is `pnpm-lock.yaml`)

### Installation

1. Install dependencies:

```bash
pnpm install
```

2. Run the development server:

```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # routes: / , /help, /privacypolicy, /termsofservice, /delete-account, sitemap, robots
├── components/
│   ├── layout/          # Navbar, Footer, LegalPage
│   ├── sections/        # Hero, Features, More, Privacy, Plans, HowItWorks, FAQ, CTA
│   └── ui/              # Button, GetTrex (Play and App Store buttons, "Coming soon" pop-up), PlayBadge, S25UltraMockup, SectionHeading
└── lib/                 # site.ts (constants and the release-day switch)
public/screens/          # app pictures (made-up data); public/help/ = statement help pictures
```

## Build for Production

```bash
pnpm build
pnpm start
```

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## License

Private and Proprietary


## Look

Trex 2.0 brand, same as the app (`app/docs/design/tokens.md`): "Midnight vault" dark tokens in `tailwind.config.js` (`page`, `raised`, `line`, `ink`, `muted`, `accent`, `spark`), Manrope self-hosted from `src/fonts/`, logo SVGs in `public/brand/` (copied from the app's `assets/brand/`; regenerate there, not by hand), app icon `src/app/icon.png`, social card `public/og-image.png`. App pictures sit in a 9:16 phone frame (`S25UltraMockup`, prop `pos` picks which part of the 540x1176 screenshot to keep).
