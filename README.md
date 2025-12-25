# Trex Landing Page

A modern, privacy-first wealth tracking landing page built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- ⚡ Built with Next.js 14 (App Router)
- 🎨 Styled with Tailwind CSS
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🎯 SEO optimized
- 🔒 Privacy-focused messaging

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main page component
│   └── globals.css      # Global styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx   # Navigation component
│   │   └── Footer.tsx   # Footer component
│   ├── sections/
│   │   ├── Hero.tsx           # Hero section
│   │   ├── Steps.tsx          # How it works section
│   │   ├── AudienceAudit.tsx  # Qualification section
│   │   ├── BentoGrid.tsx      # Features bento grid
│   │   └── CTA.tsx            # Call to action
│   └── ui/
│       ├── Button.tsx         # Reusable button component
│       ├── SectionHeading.tsx # Section heading component
│       └── S25UltraMockup.tsx # Phone mockup component
└── public/
    └── logos/           # Logo assets

```

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## License

Private and Proprietary
