# TREX Landing Page - Context Document

**Document Version:** 1.4  
**Last Updated:** January 3, 2026  
**Repository:** abhishekpawan/Trex-landing-page  
**Primary Purpose:** SEO-optimized marketing landing page for TREX mobile app with pre-launch waitlist  
**Production Domain:** https://trexfolio.com

**Recent Changes (v1.4)**:
- ✅ Added FAQ (Frequently Asked Questions) section with 12 questions
- ✅ Implemented accordion-style UI with smooth Framer Motion animations
- ✅ Added "FAQ" navigation link to Navbar (desktop and mobile)
- ✅ Positioned FAQ section before final CTA for trust-building
- ✅ Used exact privacy-focused messaging from implementation guide

**Previous Changes (v1.3)**:
- ✅ Added encryption messaging across Hero, BentoGrid, and AudienceAudit sections
- ✅ Updated Hero paragraph to highlight encryption by default
- ✅ Changed Hero trust tag from "Secure Logs" to "Full Encryption"
- ✅ Added "Full Data Encryption" feature card to BentoGrid
- ✅ Added encryption bullet point to AudienceAudit "for you" list
- ✅ Optimized BentoGrid layout for 6 cards (zig-zag first 2 rows, 3 cards in last row)

**Previous Changes (v1.2)**:
- ✅ Replaced Google Play CTAs with email waitlist pre-registration forms
- ✅ Added anonymous feedback collection (like/dislike buttons)
- ✅ Implemented frontend rate limiting (localStorage with SSR support)
- ✅ Created API client for backend integration (`src/lib/api.ts`)
- ✅ Added waitlist status badge with animated pulsing indicator
- ✅ Updated Hero and CTA sections with new conversion flow

---

## Table of Contents
1. [High-Level Strategy](#high-level-strategy)
2. [Technical Architecture](#technical-architecture)
3. [Page-by-Page Breakdown](#page-by-page-breakdown)
4. [Section-to-Feature Mapping](#section-to-feature-mapping)
5. [Component Inventory](#component-inventory)
6. [SEO & Metadata Strategy](#seo--metadata-strategy)
7. [Conversion Architecture](#conversion-architecture)
8. [Safe Places to Add Features](#safe-places-to-add-features)
9. [How to Update for New Features](#how-to-update-for-new-features)

---

## High-Level Strategy

### Core Value Proposition
TREX is positioned as a **privacy-first wealth tracking app** that emphasizes:
- **Zero surveillance**: No bank linking, no PAN, no Aadhaar
- **Data encryption**: All user-entered data is encrypted by default, even from the app itself
- **Manual control**: User enters data once, app handles calculations
- **Multi-asset support**: Stocks, Gold, FD, Mutual Funds (SIP & One-time)
- **Automated tracking**: Market data sync without sharing credentials

### Target Audience
- Privacy-conscious investors
- Users who want portfolio visibility without surrendering financial data
- People managing multiple asset types (stocks, FDs, gold, mutual funds)
- Users comfortable with manual data entry in exchange for privacy

### Landing Page Goals
1. **Organic Traffic**: Rank for keywords like "investment tracker", "portfolio tracker", "privacy-first wealth management"
2. **Trust Building**: Communicate security, privacy, and transparency
3. **Waitlist Capture**: Collect email addresses for pre-launch notifications (replaced direct app downloads)
4. **Feature Awareness**: Clearly show what TREX can and cannot do (qualification)
5. **Feedback Collection**: Gather anonymous like/dislike feedback on the app concept

---

## Technical Architecture

### Framework & Tools
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion (v11.11.17)
- **Icons**: Lucide React (v0.460.0)
- **Package Manager**: pnpm

### Routing Model
Uses **Next.js App Router** (not Pages Router)
- File-based routing under `src/app/`
- All pages are client-side rendered (`'use client'` directive)
- No dynamic routes; all pages are static

### Build Commands
```bash
pnpm dev      # Development server
pnpm build    # Production build
pnpm start    # Production server
pnpm lint     # ESLint check
```

### Environment Variables
**Required for Production**:
```bash
NEXT_PUBLIC_SITE_URL=https://trexfolio.com
NEXT_PUBLIC_SUPABASE_FUNCTION_URL=https://[project-ref].supabase.co/functions/v1/landing-page-submit
```

**Variable Usage**:
- `NEXT_PUBLIC_SITE_URL`: Used by sitemap.xml, robots.txt, Open Graph metadata, Twitter Card metadata, JSON-LD structured data
  - **Fallback**: `https://trexfolio.com`
- `NEXT_PUBLIC_SUPABASE_FUNCTION_URL`: Backend endpoint for email registrations and feedback submissions
  - **Fallback**: Placeholder URL in `src/lib/api.ts`

**Note**: Both variables are prefixed with `NEXT_PUBLIC_` to make them available in the browser.

### Color Palette
- **Background**: `#0B0F1A` (Midnight Graphite)
- **Primary Accent**: `#6FAF9E` (Glowing Sage Green)
- **Text Primary**: `#F1F5F9` (Off-white)
- **Card Background**: `#1F2933` (Dark Gray)
- **Border**: `white/5` to `white/10` (Semi-transparent)

### SEO Configuration
**Production Domain**: `https://trexfolio.com`  
**Environment Variable**: `NEXT_PUBLIC_SITE_URL` (fallback to trexfolio.com)

**Implemented SEO Features**:
1. **Sitemap.xml** (`/sitemap.xml`)
   - Static sitemap with 3 URLs (/, /privacypolicy, /termsofservice)
   - Priority: Homepage (1.0), Legal pages (0.3)
   - Change frequency: Monthly
   - Dynamic lastmod based on current date

2. **Robots.txt** (`/robots.txt`)
   - Allows all crawlers
   - References sitemap URL

3. **Open Graph & Twitter Metadata**
   - Social sharing previews configured
   - Uses Trex logo for og:image
   - Consistent titles and descriptions

4. **Structured Data (JSON-LD)**
   - Schema type: SoftwareApplication
   - Finance category, Android OS
   - Free pricing, privacy policy link included

---

## Page-by-Page Breakdown

### 1. Home Page (`/`)
**File**: `src/app/page.tsx`

**Purpose**: Primary landing page; comprehensive overview of TREX features and value proposition

**Structure** (renders in order):
```tsx
<Navbar />
<Hero />          // Above-fold conversion (includes encryption messaging)
<Steps />         // How it works (3-step process)
<AudienceAudit /> // "Is TREX for you?" qualification (includes encryption bullet)
<BentoGrid />     // Feature showcase (6 cards, includes encryption card)
<FAQ />           // Frequently asked questions (12 questions, accordion UI)
<CTA />           // Final conversion push
<Footer />
```

**SEO Intent**:
- Primary keywords: "privacy-first wealth tracking", "investment tracker", "portfolio management"
- User intent: Research, comparison, download decision

**Key Sections**:
- **Hero**: Emotional hook, encryption messaging, primary CTA (waitlist form)
- **Steps**: Educational (3-step onboarding mental model)
- **AudienceAudit**: Trust-building (transparent about what TREX is NOT, includes encryption)
- **BentoGrid**: Feature grid (6 key features including encryption)
- **FAQ**: Trust-building through transparency (12 common questions about privacy, data, and functionality)
- **CTA**: Final conversion push

**Metadata** (from `layout.tsx`):
```tsx
title: 'Trex - Privacy-First Wealth Tracking'
description: 'Your Wealth. Your Business. No Bank. No PAN. No Aadhaar. Track your investments with complete privacy.'
keywords: 'investment tracker, wealth management, privacy-first, portfolio tracker'
```

---

### 2. Privacy Policy (`/privacypolicy`)
**File**: `src/app/privacypolicy/page.tsx`

**Purpose**: Legal compliance page; builds trust through transparency

**Structure**:
```tsx
<Navbar />
<main> (Privacy Policy Content) </main>
<Footer />
```

**SEO Intent**:
- Required for Google Play Store compliance
- Builds trust for privacy-conscious users
- Not optimized for traffic (noindex would be appropriate)

**Content Themes**:
- Information collection (user-entered data, Google account info)
- Permissions (notification, storage, internet)
- Data storage and security
- No selling or sharing of data
- User rights (data export, deletion)

**Effective Date**: December 25, 2025

---

### 3. Terms of Service (`/termsofservice`)
**File**: `src/app/termsofservice/page.tsx`

**Purpose**: Legal compliance page; defines app usage boundaries

**Structure**:
```tsx
<Navbar />
<main> (Terms Content) </main>
<Footer />
```

**SEO Intent**:
- Legal protection and compliance
- Clarifies what TREX does NOT do (no financial advice, no trading)
- Not optimized for traffic

**Content Themes**:
- App description (manual tracking tool, not financial advisor)
- User responsibilities (data accuracy, account security)
- Disclaimers (no warranties, data accuracy not guaranteed)
- Liability limitations
- Termination rights

**Effective Date**: December 25, 2025

---

## Section-to-Feature Mapping

| Section | File Path | Features Highlighted | Feature Type | Safe to Extend? |
|---------|-----------|---------------------|--------------|-----------------|
| **Hero** | `src/components/sections/Hero.tsx` | Privacy-first tracking, data encryption, automated market calculations | Core Value Prop | ⚠️ Modify carefully (primary conversion) |
| **Steps** | `src/components/sections/Steps.tsx` | 3-step process: Log assets → Auto-update → See net worth | Onboarding Flow | ✅ Yes (add step 04, or modify descriptions) |
| **AudienceAudit** | `src/components/sections/AudienceAudit.tsx` | Multi-asset support, auto calculations, no bank linking, data encryption | Qualification / Trust | ✅ Yes (add new "for you" bullets) |
| **BentoGrid** | `src/components/sections/BentoGrid.tsx` | Unified dashboard, wealth growth, privacy, encryption, market sync, portfolio export | Feature Grid | ✅ **Best place for new features** |
| **FAQ** | `src/components/sections/FAQ.tsx` | Privacy transparency, data safety, manual entry benefits, no bank linking | Trust Building | ✅ Yes (add new Q&A pairs) |
| **CTA** | `src/components/sections/CTA.tsx` | Download app, privacy sovereignty | Final Conversion | ⚠️ Modify carefully (conversion) |

---

## Component Inventory

### Layout Components

#### Navbar (`src/components/layout/Navbar.tsx`)
- **Responsibility**: Top navigation with logo, anchor links, CTA button
- **Features**:
  - Sticky on scroll with blur effect
  - Mobile hamburger menu (Framer Motion AnimatePresence)
  - Links: Features (`#features`), How it Works (`#how-it-works`), FAQ (`#faq`)
  - CTA: Pre-Register (scrolls to `#pre-register`)
- **Safe to Edit?**: ✅ Yes (add new nav links if needed)

#### Footer (`src/components/layout/Footer.tsx`)
- **Responsibility**: Brand reinforcement, legal links, company info
- **Features**:
  - Logo + privacy tagline
  - Support links (Privacy Policy, Terms of Service)
  - Copyright: "© 2025 Novarex Studios"
- **Safe to Edit?**: ✅ Yes (add social links, contact, etc.)

---

### Section Components (in render order)

#### Hero (`src/components/sections/Hero.tsx`)
- **Responsibility**: Above-the-fold conversion section
- **Key Elements**:
  - Badge: "Privacy-First Wealth Tracking" (Lock icon)
  - Headline: "Your Wealth. Your Business. No Bank. No PAN. No Aadhaar."
  - Subheadline: Manual entry + automated calculations + encryption mention
  - **Encryption Messaging**: "Your data stays encrypted while you add your assets once, and we handle the market calculations."
  - **Waitlist Badge**: Animated pulsing indicator with "Join the waitlist • Early access coming soon"
  - **CTA**: `PreRegisterForm` component (email capture, size: lg, source: hero)
  - **Feedback**: `FeedbackButtons` component with label "Interested in this concept?" (source: hero)
  - Phone mockup: `S25UltraMockup` component (hero-app-image.jpg)
  - Trust tags: "Full Encryption", "App Lock", "Market Data", "100% Private"
  - ~~Google Play badge~~ (commented out, replaced with waitlist form)
- **Feature Representation**: 
  - Privacy (no bank linking)
  - Data encryption (encrypted by default)
  - Automation (market calculations)
  - Manual control (log assets once)
  - Pre-launch waitlist capture
- **Safe to Edit?**: ⚠️ **Modify with caution** (highest conversion section)

---

#### Steps (`src/components/sections/Steps.tsx`)
- **Responsibility**: Explain how TREX works (3-step process)
- **Current Steps**:
  1. **Log your assets** (stocks, FD details)
  2. **Trex keeps everything updated** (market values, accrued interest)
  3. **Own your total net worth** (single secure view)
- **Icons**: ImageIcon, Zap, BarChart3
- **Layout**: Alternating left/right with timeline visual
- **Feature Representation**:
  - Manual data entry
  - Automated tracking
  - Portfolio aggregation
- **Safe to Edit?**: ✅ **Yes** (easy to add step 04 or modify descriptions)

---

#### AudienceAudit (`src/components/sections/AudienceAudit.tsx`)
- **Responsibility**: Qualify users (build trust by being honest about limitations)
- **Structure**:
  - **"Trex is for you if"** (7 green bullets with icons)
    - Single net-worth view across assets
    - Automated return/interest calculations
    - Accurate portfolio as prices change
    - Financial clarity without bank linking
    - App-level PIN protection
    - Portfolio export/download capability
    - Financial data encryption (even from the app itself)
  - **"Trex is NOT for you if"** (4 gray bullets)
    - Want automatic bank/broker syncing
    - Expect buy/sell tips
    - Want social feeds or rankings
    - Okay trading privacy for convenience
  - **Quote**: "Trex doesn't make decisions for you. It makes your decisions clearer."
- **Feature Representation**:
  - Multi-asset support (stocks, FDs, gold, mutual funds)
  - Automated math (returns, interest, maturity)
  - Privacy focus (no linking)
  - Data encryption (encrypted by default)
- **Safe to Edit?**: ✅ **Yes** (add new "for you" bullets as features evolve)

---

#### BentoGrid (`src/components/sections/BentoGrid.tsx`)
- **Responsibility**: Feature showcase (visual grid of 6 key features)
- **Current Cards** (zig-zag layout optimized for 6 cards):
  1. **Unified Dashboard** (2 cols)
     - Every asset in one unified view
     - Supports: Stocks, Gold, FD, MF (SIP & One-time)
     - Icon: LayoutDashboard
     - Shows 4 asset badges
  2. **Watch your wealth grow** (1 col)
     - Tracks growth, interest, returns automatically
     - Icon: TrendingUp
  3. **100% Privacy** (1 col)
     - No Bank, PAN, Aadhaar linking
     - Icon: ShieldCheck
  4. **Full Data Encryption** (2 cols)
     - All manually entered data is encrypted and stored securely
     - Even the app itself cannot read your financial details
     - Icon: Shield
  5. **Market Data Sync** (2 cols)
     - Auto-sync prices and mutual fund NAVs
     - Icon: RefreshCw
  6. **Export Your Portfolio Anytime** (1 col)
     - Download complete portfolio snapshot as Excel file
     - Icon: FileSpreadsheet
- **Layout**: 3-column grid with zig-zag pattern (responsive to 1 column on mobile)
  - Row 1: 2 cols + 1 col
  - Row 2: 1 col + 2 cols
  - Row 3: 2 cols + 1 col
- **Gradient Style**: Each card has gradient background (Glowing Sage shades)
- **Feature Representation**: Core app capabilities including encryption
- **Safe to Edit?**: ✅ **BEST PLACE FOR NEW FEATURES** (designed for scalability)

---

#### CTA (`src/components/sections/CTA.tsx`)
- **Responsibility**: Final conversion push before footer
- **Elements**:
  - Headline: "Ready to Own Your Financial Truth?"
  - Subheadline: "Join the waitlist for early access. Be among the first to experience true financial privacy."
  - **Primary CTA**: `PreRegisterForm` component (email capture, size: lg, source: cta)
  - **Secondary CTA**: `FeedbackButtons` component (like/dislike, source: cta)
  - ~~Google Play badge~~ (commented out, replaced with waitlist form)
- **Safe to Edit?**: ⚠️ Modify with caution (conversion-focused)

---

#### FAQ (`src/components/sections/FAQ.tsx`)
- **Responsibility**: Address common user concerns and build trust through transparency
- **Current Questions** (12 total):
  1. What is TREX?
  2. Do I need to link my bank account?
  3. What kind of investments can I track?
  4. How does TREX update prices if I don't link accounts?
  5. Is my data safe?
  6. Can TREX see my investment data?
  7. Does TREX give buy or sell advice?
  8. Can I export my data?
  9. Do I need finance knowledge to use TREX?
  10. Is TREX for traders or long-term investors?
  11. Why is manual entry better?
  12. Is TREX a replacement for my broker app?
- **UI Features**:
  - Accordion-style (only one question open at a time)
  - Smooth Framer Motion animations (height and rotation)
  - ChevronDown icon (rotates 180° when expanded)
  - Dark card design matching BentoGrid style
  - Hover effects on questions
- **Layout**: Max-width 4xl container, 4px spacing between cards
- **Section ID**: `#faq` (linked from Navbar)
- **Feature Representation**:
  - Privacy focus (no bank/PAN/Aadhaar)
  - Data encryption and security
  - Manual entry benefits
  - Multi-asset support
  - No financial advice (transparency)
  - Export capabilities
- **Safe to Edit?**: ✅ **Yes** (add new Q&A pairs as features evolve or user questions arise)

---

### UI Components

#### Button (`src/components/ui/Button.tsx`)
- **Variants**: `primary`, `outline`, `ghost`
- **Features**: Framer Motion hover/tap animations
- **Usage**: CTAs throughout site (currently commented in favor of Google Play badge)

#### SectionHeading (`src/components/ui/SectionHeading.tsx`)
- **Props**: `tag`, `title`, `subtitle`, `centered`
- **Usage**: Used by Steps, AudienceAudit, BentoGrid
- **Style**: Uppercase tag (green), large title, gray subtitle

#### S25UltraMockup (`src/components/ui/S25UltraMockup.tsx`)
- **Responsibility**: Phone mockup with floating animation
- **Image**: `/hero-app-image.jpg`
- **Usage**: Hero section only

#### PlayStoreIcon (`src/components/ui/PlayStoreIcon.tsx`)
- **Responsibility**: SVG icon for Google Play
- **Usage**: ~~Navbar, Hero, CTA~~ (currently unused, CTAs replaced with waitlist forms)

#### PreRegisterForm (`src/components/ui/PreRegisterForm.tsx`)
- **Responsibility**: Email capture form with validation and rate limiting
- **Props**: 
  - `variant`: `'inline'` | `'stacked'` (default: `'inline'`)
  - `size`: `'sm'` | `'md'` | `'lg'` (default: `'md'`)
  - `source`: `'hero'` | `'cta'` | `'navbar'` (default: `'hero'`)
- **Features**:
  - Email validation (regex)
  - Frontend rate limiting (3 submissions/hour via localStorage)
  - Loading states with spinner
  - Success/error messages with auto-dismiss
  - Mail icon with glassmorphic input styling
- **API Integration**: Calls `submitEmail()` from `src/lib/api.ts`
- **Usage**: Hero section, CTA section
- **Status Management**: `idle`, `loading`, `success`, `error`

#### FeedbackButtons (`src/components/ui/FeedbackButtons.tsx`)
- **Responsibility**: Anonymous like/dislike feedback buttons
- **Props**:
  - `label`: Custom label text (default: `"Like the idea?"`)
  - `source`: `'hero'` | `'cta'` | `'navbar'` (default: `'hero'`)
- **Features**:
  - Thumbs up/down icons (Lucide React)
  - Frontend rate limiting (5 submissions/hour via localStorage)
  - Loading state with spinner
  - Visual feedback (color change on selection)
  - Success message with auto-dismiss
  - Prevents double-submission
- **API Integration**: Calls `submitFeedback()` from `src/lib/api.ts`
- **Usage**: Hero section (label: "Interested in this concept?"), CTA section
- **States**: Tracks selected feedback (`like` | `dislike` | `null`)

---

## SEO & Metadata Strategy

### Current Metadata (Root Layout)
**File**: `src/app/layout.tsx`

```tsx
title: 'Trex – Privacy-First Wealth Tracking'
description: 'Your Wealth. Your Business. No Bank. No PAN. No Aadhaar. Track your investments with complete privacy.'
keywords: 'investment tracker, wealth management, privacy-first, portfolio tracker'
icons: { icon: '/favicon.png', shortcut: '/favicon.png', apple: '/favicon.png' }
openGraph: {
  title: 'Trex – Privacy-First Wealth Tracking',
  description: 'Your Wealth. Your Business. No Bank. No PAN. No Aadhaar. Track your investments with complete privacy.',
  type: 'website',
  url: 'https://trexfolio.com',
  siteName: 'Trex',
  images: [{ url: 'https://trexfolio.com/logos/Trex-icon-text-logo.png', width: 1200, height: 630 }]
}
twitter: {
  card: 'summary_large_image',
  title: 'Trex – Privacy-First Wealth Tracking',
  description: 'Your Wealth. Your Business. No Bank. No PAN. No Aadhaar. Track your investments with complete privacy.',
  images: ['https://trexfolio.com/logos/Trex-icon-text-logo.png']
}
```

**Structured Data (JSON-LD)**:
- Schema type: `SoftwareApplication`
- Application category: `FinanceApplication`
- Operating system: Android
- Offers: Free (₹0 INR)
- Creator: Novarex Studios
- Privacy policy link: `https://trexfolio.com/privacypolicy`

### Keyword Strategy
**Primary Keywords**:
- Privacy-first wealth tracking
- Investment tracker
- Portfolio tracker
- Wealth management
- No bank linking

**Secondary Keywords** (inferred from content):
- Stocks tracking
- FD calculator
- Mutual fund tracker
- Gold investment tracker
- SIP tracker
- Net worth calculator
- Portfolio management app

### Metadata Implementation Status
✅ **Implemented** (as of Jan 3, 2026):
- Title tag
- Meta description
- Keywords
- Favicon
- OpenGraph tags (og:title, og:description, og:image, og:url, og:type, og:siteName)
- Twitter Card tags (card, title, description, images)
- Structured data (JSON-LD for SoftwareApplication)
- Sitemap.xml (accessible at `/sitemap.xml`)
- Robots.txt (accessible at `/robots.txt`)

⚠️ **Potential Future Enhancements**:
- Canonical URLs
- Page-specific metadata (Privacy Policy, Terms of Service should have unique titles)
- Breadcrumb structured data
- Organization structured data

### Content SEO Patterns
- **Hero**: Emotional keywords ("Your Wealth", "No Bank", "No PAN")
- **Steps**: Process-oriented keywords ("Log", "Track", "View")
- **BentoGrid**: Feature-specific keywords ("Market Data Sync", "Privacy", "Unified Dashboard")
- **Internal Linking**: Minimal (only nav anchor links to #features, #how-it-works)
- **Structured Data**: SoftwareApplication schema for Google rich results

### SEO Testing & Validation
**Test URLs** (after deployment):
- Sitemap: `https://trexfolio.com/sitemap.xml`
- Robots: `https://trexfolio.com/robots.txt`
- Rich Results: [Google Rich Results Test](https://search.google.com/test/rich-results)
- Social Preview: [OpenGraph Debugger](https://www.opengraph.xyz/)

**Next Steps**:
1. Submit sitemap to Google Search Console
2. Test social sharing on Twitter/LinkedIn
3. Verify structured data in Google Search Console

---

## Conversion Architecture

### Primary CTAs (by Section)
| Section | CTA Type | Component | Action | Backend Endpoint |
|---------|----------|-----------|--------|------------------|
| **Navbar** | Button | Native button | Scroll to `#pre-register` | N/A |
| **Hero** | Form + Feedback | `PreRegisterForm` + `FeedbackButtons` | Submit email & feedback | Edge function |
| **CTA** | Form + Feedback | `PreRegisterForm` + `FeedbackButtons` | Submit email & feedback | Edge function |

### Conversion Flow (Pre-Launch)
1. **Awareness** (Hero): Privacy + automation promise
2. **Pre-Registration Prompt**: Waitlist badge with animated indicator
3. **Primary Conversion**: Email capture form (Hero section)
4. **Feedback Collection**: Like/dislike buttons (anonymous)
5. **Education** (Steps): 3-step mental model
6. **Qualification** (AudienceAudit): "Is this for me?"
7. **Features** (BentoGrid): Detailed capabilities
8. **Final Conversion** (CTA): Repeat email form + feedback buttons

### Backend Integration
**Edge Function**: `landing-page-submit` (Supabase Edge Function)
- **Endpoint**: Configured via `NEXT_PUBLIC_SUPABASE_FUNCTION_URL`
- **No JWT Verification**: Public endpoint (secured by rate limiting)
- **Rate Limiting**:
  - Frontend: 3 emails/hour, 5 feedback/hour (localStorage)
  - Backend: 10 requests per IP per hour (in-memory)
- **Data Storage**:
  - Email: `waitlist_registrations` table (unique constraint)
  - Feedback: `landing_page_feedback` table (anonymous)
- **Source Tracking**: All submissions tagged with source (`hero`, `cta`, `navbar`)

### API Client (`src/lib/api.ts`)
**Functions**:
- `submitEmail(email, source)`: POST request with type: 'email'
- `submitFeedback(feedback, source)`: POST request with type: 'feedback'

**Error Handling**:
- Rate limit exceeded (429) → User-friendly message
- Network errors → Fallback error message
- Validation errors (400) → Display specific error

### Rate Limiter (`src/lib/rateLimit.ts`)
**Class**: `RateLimiter`
- **Storage**: localStorage (with SSR fallback to in-memory)
- **Window**: 1 hour
- **Limits**: 
  - Email: 3 submissions/hour
  - Feedback: 5 submissions/hour
- **Methods**:
  - `check(type)`: Returns `{ allowed, remaining, resetIn? }`
  - `reset(type?)`: Clear rate limit records
  - `getRemainingTime(type)`: Get minutes until reset
- **SSR Support**: Checks for `window` existence before using localStorage

### Trust Signals
- **Privacy badges**: "Privacy-First" badge in Hero and Footer
- **Transparency**: AudienceAudit clearly states what TREX is NOT
- **Legal pages**: Privacy Policy & Terms of Service linked in Footer
- **Company branding**: "Novarex Studios" in Footer
- **Waitlist Status**: Animated pulsing indicator ("Early access coming soon")
- **Feedback Mechanism**: Anonymous like/dislike allows users to express interest without commitment

---

## Safe Places to Add Features

### 🟢 High-Safety (Easy to Extend)

#### 1. **BentoGrid Section** (`src/components/sections/BentoGrid.tsx`)
- **Why**: Designed as a flexible feature grid
- **How**: Add new cards to the `cards` array
- **Example Use Cases**:
  - New asset types (Crypto, Real Estate, Bonds)
  - New calculations (XIRR, CAGR, tax projections)
  - New integrations (export to CSV, PDF reports)
- **Layout**: Grid auto-adjusts (use `md:col-span-1` or `md:col-span-2`)

#### 2. **AudienceAudit Section** (`src/components/sections/AudienceAudit.tsx`)
- **Why**: Bullet list format is easy to extend
- **How**: Add new items to `forYou` array
- **Example Use Cases**:
  - New feature benefits ("You want tax optimization insights")
  - New asset support ("You track international stocks")

#### 3. **Steps Section** (`src/components/sections/Steps.tsx`)
- **Why**: Step-based layout can accommodate more steps
- **How**: Add new step objects to `steps` array
- **Example Use Cases**:
  - New onboarding steps (Step 04: "Set financial goals")
  - Feature-specific workflows

#### 4. **FAQ Section** (`src/components/sections/FAQ.tsx`)
- **Why**: Accordion format is easy to extend with new questions
- **How**: Add new objects to `faqItems` array
- **Example Use Cases**:
  - New feature questions ("Does TREX support cryptocurrency?")
  - Technical questions ("Can I use TREX offline?")
  - Account questions ("Can I share my portfolio with my spouse?")

#### 5. **Footer** (`src/components/layout/Footer.tsx`)
- **Why**: Standard footer structure with support links
- **How**: Add new links or sections
- **Example Use Cases**:
  - Blog link (when blog exists)
  - Help center
  - Social media links

---

### 🟡 Medium-Safety (Modify with Care)

#### 6. **Hero Section** (`src/components/sections/Hero.tsx`)
- **Why**: Primary conversion zone; changes affect above-fold experience
- **Risks**: Layout shifts, CTA confusion
- **Safe Changes**:
  - Update trust tags at bottom (currently: "Full Encryption", "App Lock", "Market Data", "100% Private")
  - Update subheadline to mention new features
  - Update paragraph to include encryption messaging (already done)
- **Risky Changes**:
  - Changing headline structure
  - Removing/replacing phone mockup

#### 7. **Navbar** (`src/components/layout/Navbar.tsx`)
- **Why**: Navigation affects entire site UX
- **Safe Changes**:
  - Add new anchor links (e.g., `#faq`, `#pricing`)
- **Risky Changes**:
  - Changing logo
  - Removing CTA button

---

### 🔴 High-Risk (Avoid Unless Necessary)

#### 8. **CTA Section** (`src/components/sections/CTA.tsx`)
- **Why**: Final conversion checkpoint
- **Changes**: Only update copy if testing shows better conversion

---

## How to Update for New Features

### Step-by-Step Process

#### When a New App Feature is Added, Follow This Workflow:

---

### 1. **Categorize the Feature**

Ask:
- **Is it a new asset type?** (e.g., Cryptocurrency, Bonds)
  → Update: BentoGrid (Unified Dashboard card), AudienceAudit
  
- **Is it a new calculation?** (e.g., XIRR, Tax projections)
  → Update: Steps (modify step 2), BentoGrid (new card or update existing)
  
- **Is it a new privacy/security feature?** (e.g., Biometric lock)
  → Update: Hero (trust tags), BentoGrid (new card), Privacy Policy
  
- **Is it a new UI/UX capability?** (e.g., Dark mode, Widgets)
  → Update: BentoGrid (new card), Steps (if it changes workflow)

---

### 2. **Update Content Sections**

#### A. **BentoGrid** (Primary Feature Showcase)

**File**: `src/components/sections/BentoGrid.tsx`

**Action**: Add a new card to the `cards` array

**Example** (Adding "Crypto Support"):
```tsx
{
  title: "Crypto Tracking",
  content: "Track Bitcoin, Ethereum, and 50+ cryptocurrencies with real-time price updates and portfolio allocation insights.",
  icon: Bitcoin, // Import from lucide-react
  size: "md:col-span-1",
  variant: 'gradient2',
  gradient: 'from-[#8FC5B8] via-[#A8D5C9] to-[#B8E0D5]'
}
```

**OR** modify the "Unified Dashboard" card to include the new asset:
```tsx
const assets = [
  { label: "Stocks", icon: LineChart },
  { label: "Gold", icon: Coins },
  { label: "FD", icon: Building2 },
  { label: "MF (SIP/One-time)", icon: PieChart },
  { label: "Crypto", icon: Bitcoin } // NEW
]
```

---

#### B. **AudienceAudit** (Qualification Section)

**File**: `src/components/sections/AudienceAudit.tsx`

**Action**: Add a new bullet to `forYou` array

**Example** (Adding "Crypto Support"):
```tsx
{
  text: "You want to track cryptocurrencies alongside traditional assets",
  icon: <Bitcoin size={18} />
}
```

---

#### C. **Steps** (If Feature Changes Workflow)

**File**: `src/components/sections/Steps.tsx`

**Action**: Update step descriptions or add a new step

**Example** (Updating Step 1 for Crypto):
```tsx
{
  num: "01",
  title: "Log your assets",
  desc: "Simply enter your stock quantity, FD details, or crypto holdings.",
  icon: <ImageIcon className="w-6 h-6" />
}
```

---

#### D. **Hero** (If Feature is Major Selling Point)

**File**: `src/components/sections/Hero.tsx`

**Action**: Update subheadline or trust tags

**Example** (Adding "Crypto" to trust tags):
```tsx
<div className="mt-16 flex items-center gap-8 opacity-30">
  <span className="text-sm font-bold text-white tracking-widest uppercase">Secure Logs</span>
  <span className="text-sm font-bold text-white tracking-widest uppercase">Market Data</span>
  <span className="text-sm font-bold text-white tracking-widest uppercase">Crypto Tracking</span>
  <span className="text-sm font-bold text-white tracking-widest uppercase">100% Private</span>
</div>
```

---

### 3. **Update SEO Metadata**

**File**: `src/app/layout.tsx`

**Action**: Update keywords, description, and structured data to include new feature

**Example** (Adding "Crypto"):
```tsx
// Update site description
const siteDescription = 'Your Wealth. Your Business. No Bank. No PAN. No Aadhaar. Track stocks, FDs, gold, mutual funds, and crypto with complete privacy.';

export const metadata: Metadata = {
  title: 'Trex – Privacy-First Wealth Tracking',
  description: siteDescription,
  keywords: 'investment tracker, wealth management, privacy-first, portfolio tracker, crypto tracker',
  // ... openGraph and twitter will use siteDescription automatically
}

// Update structured data if relevant
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  description: siteDescription, // Updated automatically
  // ...
}
```

**Note**: Open Graph, Twitter, and JSON-LD structured data all reference the same description constant, so updating it once updates all metadata.

---

### 4. **Update Legal Pages (If Necessary)**

**Privacy Policy** (`src/app/privacypolicy/page.tsx`):
- Add data handling details for new feature (e.g., crypto wallet addresses)

**Terms of Service** (`src/app/termsofservice/page.tsx`):
- Add disclaimers for new asset types (e.g., "Crypto prices are volatile")

---

### 5. **Optional: Add Dedicated Feature Page**

If the feature is **major** (e.g., Tax Optimization, Business Accounts):

**Action**: Create a new page route

**Example**:
```bash
src/app/tax-optimization/page.tsx
```

**Structure**:
```tsx
'use client'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionHeading from '@/components/ui/SectionHeading'

export default function TaxOptimization() {
  return (
    <div className="min-h-screen bg-[#0B0F1A]">
      <Navbar />
      <main className="pt-32 px-6">
        <SectionHeading 
          tag="Feature"
          title="Tax Optimization Made Simple"
          subtitle="Track LTCG, STCG, and deductions automatically."
        />
        {/* Feature details */}
      </main>
      <Footer />
    </div>
  )
}
```

**Link from**: Navbar, BentoGrid card (CTA button)

---

### 6. **Testing Checklist**

After updating:
- [ ] Run `pnpm dev` and visually inspect changes
- [ ] Check mobile responsiveness
- [ ] Verify Framer Motion animations work
- [ ] Test anchor links (if added to Navbar)
- [ ] Check Play Store links (if CTA buttons added)
- [ ] Run `pnpm build` to ensure no build errors
- [ ] Verify metadata in browser (View Source)

---

## Quick Reference: Feature Update Matrix

| Feature Type | BentoGrid | AudienceAudit | Steps | Hero | Metadata | Legal Docs |
|--------------|-----------|---------------|-------|------|----------|------------|
| **New Asset Type** | ✅ Add card | ✅ Add bullet | ⚠️ Maybe | ⚠️ Maybe | ✅ Update keywords | ❌ Usually not |
| **New Calculation** | ✅ Add card | ⚠️ Maybe | ✅ Update step 2 | ❌ No | ✅ Update keywords | ❌ No |
| **Privacy/Security** | ✅ Add card | ✅ Add bullet | ❌ No | ✅ Update tags/paragraph | ✅ Update desc | ✅ Update Privacy Policy |
| **Data Encryption** | ✅ Add card (done) | ✅ Add bullet (done) | ❌ No | ✅ Update paragraph/tags (done) | ✅ Update desc | ✅ Update Privacy Policy |
| **UI/UX Feature** | ✅ Add card | ⚠️ Maybe | ⚠️ Maybe | ❌ No | ❌ No | ❌ No |
| **Export/Integration** | ✅ Add card | ⚠️ Maybe | ⚠️ Add step 4 | ❌ No | ✅ Update keywords | ⚠️ Maybe ToS |

---

## File Path Quick Reference

### Pages
- Home: `src/app/page.tsx`
- Privacy Policy: `src/app/privacypolicy/page.tsx`
- Terms of Service: `src/app/termsofservice/page.tsx`

### SEO Routes
- Sitemap: `src/app/sitemap.xml/route.ts` (accessible at `/sitemap.xml`)
- Robots: `src/app/robots.txt/route.ts` (accessible at `/robots.txt`)

### Layout Components
- Navbar: `src/components/layout/Navbar.tsx`
- Footer: `src/components/layout/Footer.tsx`

### Section Components
- Hero: `src/components/sections/Hero.tsx`
- Steps: `src/components/sections/Steps.tsx`
- AudienceAudit: `src/components/sections/AudienceAudit.tsx`
- BentoGrid: `src/components/sections/BentoGrid.tsx`
- FAQ: `src/components/sections/FAQ.tsx` ⭐ NEW (v1.4)
- CTA: `src/components/sections/CTA.tsx`

### UI Components
- Button: `src/components/ui/Button.tsx`
- SectionHeading: `src/components/ui/SectionHeading.tsx`
- S25UltraMockup: `src/components/ui/S25UltraMockup.tsx`
- PlayStoreIcon: `src/components/ui/PlayStoreIcon.tsx` (unused)
- PreRegisterForm: `src/components/ui/PreRegisterForm.tsx` ⭐ NEW
- FeedbackButtons: `src/components/ui/FeedbackButtons.tsx` ⭐ NEW

### Utilities
- API Client: `src/lib/api.ts` ⭐ NEW
- Rate Limiter: `src/lib/rateLimit.ts` ⭐ NEW

### Metadata & SEO
- Root Layout: `src/app/layout.tsx` (includes metadata, Open Graph, Twitter, JSON-LD)
- Sitemap: `src/app/sitemap.xml/route.ts`
- Robots: `src/app/robots.txt/route.ts`

### Assets
- Logo: `/public/logos/Trex-icon-text-logo-side-by-side.png`
- Play Store Badge: `/public/badge-google-play-button.png`
- Hero App Image: `/public/hero-app-image.jpg`
- Favicon: `/public/favicon.png`

---

## Current Feature Representation

### Supported Assets (as of Dec 2025)
1. **Stocks** - Manual entry, auto price sync
2. **Gold** - Manual entry, auto price sync
3. **Fixed Deposits (FD)** - Manual entry, interest calculations
4. **Mutual Funds** - SIP and one-time investment support, NAV sync

### Core Features Highlighted
1. **Unified Dashboard** - Single view across all assets (Stocks, Gold, FD, MF)
2. **Wealth Growth Tracking** - Tracks returns and interest over time
3. **100% Privacy** - No bank, PAN, or Aadhaar linking
4. **Full Data Encryption** - All user-entered data encrypted by default, even from the app itself
5. **Market Data Sync** - Auto-updates prices and NAVs
6. **Portfolio Export** - Download complete portfolio snapshot as Excel file

### Features NOT Mentioned (Potential Gaps)
- Graphs/charts visualization
- Goal tracking
- Alerts/notifications
- Data export (CSV/PDF)
- Multi-currency support
- Portfolio comparison/benchmarking

---

## Brand Voice & Messaging

### Tone
- **Confident**: "Your Wealth. Your Business."
- **Transparent**: "Trex is not for you if..." section
- **Privacy-focused**: Repeated emphasis on "No Bank. No PAN. No Aadhaar."
- **Empowering**: "Own your total net worth"

### Key Messaging Pillars
1. **Privacy Sovereignty**: Users control their data
2. **Data Encryption**: All user-entered data encrypted by default, even from the app itself
3. **Manual Control**: Deliberate choice over automation
4. **Simplicity**: Log once, track forever
5. **Clarity**: "Trex doesn't make decisions for you. It makes your decisions clearer."

---

## Known Issues & TODOs

### Critical
- [x] ~~Play Store links are placeholders~~ **RESOLVED: Replaced with waitlist system**
  - Now using pre-registration forms instead of direct app downloads
  
### SEO (Updated Jan 3, 2026)
- [x] Add OpenGraph metadata ✅
- [x] Add Twitter Card metadata ✅
- [x] Implement structured data (JSON-LD for SoftwareApplication) ✅
- [x] Add sitemap.xml ✅
- [x] Add robots.txt ✅
- [ ] Add canonical URLs
- [ ] Create page-specific metadata for legal pages

### Feature Representation Gaps
- [ ] No mention of graphs/charts (if app has them)
- [ ] No mention of notifications/alerts
- [ ] No mention of data export features

### Design Considerations
- [x] ~~Consider adding FAQ section (common for SaaS/app landing pages)~~ ✅ **Implemented in v1.4**
- [ ] Consider testimonials section (social proof)
- [ ] Consider feature comparison table (TREX vs competitors)

---

## Conclusion

This document serves as the **single source of truth** for understanding the TREX Landing Page structure, content, and feature representation.

### Recent Updates (January 2026)

✅ **FAQ Section Added (v1.4 - Jan 3, 2026)**:
- New FAQ section with 12 questions addressing common concerns
- Accordion UI with smooth Framer Motion animations (only one open at a time)
- ChevronDown icon with rotation animation
- Matches existing dark card design with white/10 borders
- FAQ link added to Navbar (desktop and mobile menus)
- Section positioned before CTA for trust-building
- Topics covered:
  - What TREX is and how it works
  - Privacy and security (no bank linking, data encryption)
  - Supported investments (stocks, gold, FDs, mutual funds)
  - Manual entry benefits
  - Data export capabilities
  - Clear positioning (long-term tracking, not for day trading)

✅ **Encryption Messaging Added (v1.3)**:
- Hero paragraph updated to mention encryption by default
- Hero trust tag changed from "Secure Logs" to "Full Encryption"
- New "Full Data Encryption" card added to BentoGrid (2-column card)
- Encryption bullet point added to AudienceAudit "for you" list
- BentoGrid layout optimized for 6 cards (zig-zag pattern)
- All encryption messaging uses calm, non-technical language

✅ **Pre-Launch Waitlist System (v1.2)**:
- Email registration forms in Hero and CTA sections
- Anonymous feedback buttons (like/dislike)
- Frontend rate limiting with SSR support
- Backend integration with Supabase Edge Function
- Source tracking for analytics (hero, cta, navbar)
- Animated waitlist status badge

✅ **SEO Implementation (v1.2)**:
- Sitemap.xml and robots.txt now live
- Open Graph and Twitter Card metadata implemented
- SoftwareApplication structured data (JSON-LD) added
- Production domain configured: `https://trexfolio.com`
- Ready for Google Search Console submission

### When Adding New Features

1. Read this document to understand current feature representation
2. Follow the "How to Update for New Features" workflow
3. Update the relevant sections (usually BentoGrid + AudienceAudit)
4. Update metadata if the feature affects SEO (description, keywords, structured data)
5. Test thoroughly before deploying

### Backend Setup Required

For the waitlist system to work in production:

1. **Deploy Edge Function**: 
   ```bash
   cd D:/trex
   supabase functions deploy landing-page-submit --no-verify-jwt
   ```

2. **Set Environment Variable**:
   ```bash
   NEXT_PUBLIC_SUPABASE_FUNCTION_URL=https://[your-project].supabase.co/functions/v1/landing-page-submit
   ```

3. **Verify Backend Tables**:
   - `waitlist_registrations` (email storage)
   - `landing_page_feedback` (anonymous feedback)

See `D:/trex/supabase/functions/landing-page-submit/README.md` for full deployment guide.

**Keep this document updated** as the landing page evolves.

---

**End of Document**
