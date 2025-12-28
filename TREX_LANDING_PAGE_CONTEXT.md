# TREX Landing Page - Context Document

**Document Version:** 1.0  
**Last Updated:** December 28, 2025  
**Repository:** abhishekpawan/Trex-landing-page  
**Primary Purpose:** SEO-optimized marketing landing page for TREX mobile app

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
3. **App Downloads**: Drive users to Google Play Store
4. **Feature Awareness**: Clearly show what TREX can and cannot do (qualification)

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

### Color Palette
- **Background**: `#0B0F1A` (Midnight Graphite)
- **Primary Accent**: `#6FAF9E` (Glowing Sage Green)
- **Text Primary**: `#F1F5F9` (Off-white)
- **Card Background**: `#1F2933` (Dark Gray)
- **Border**: `white/5` to `white/10` (Semi-transparent)

---

## Page-by-Page Breakdown

### 1. Home Page (`/`)
**File**: `src/app/page.tsx`

**Purpose**: Primary landing page; comprehensive overview of TREX features and value proposition

**Structure** (renders in order):
```tsx
<Navbar />
<Hero />          // Above-fold conversion
<Steps />         // How it works (3-step process)
<AudienceAudit /> // "Is TREX for you?" qualification
<BentoGrid />     // Feature showcase (4 cards)
<CTA />           // Final conversion push
<Footer />
```

**SEO Intent**:
- Primary keywords: "privacy-first wealth tracking", "investment tracker", "portfolio management"
- User intent: Research, comparison, download decision

**Key Sections**:
- **Hero**: Emotional hook, primary CTA (Play Store link)
- **Steps**: Educational (3-step onboarding mental model)
- **AudienceAudit**: Trust-building (transparent about what TREX is NOT)
- **BentoGrid**: Feature grid (4 key features)
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
| **Hero** | `src/components/sections/Hero.tsx` | Privacy-first tracking, automated market calculations | Core Value Prop | ⚠️ Modify carefully (primary conversion) |
| **Steps** | `src/components/sections/Steps.tsx` | 3-step process: Log assets → Auto-update → See net worth | Onboarding Flow | ✅ Yes (add step 04, or modify descriptions) |
| **AudienceAudit** | `src/components/sections/AudienceAudit.tsx` | Multi-asset support, auto calculations, no bank linking | Qualification / Trust | ✅ Yes (add new "for you" bullets) |
| **BentoGrid** | `src/components/sections/BentoGrid.tsx` | Market sync, privacy, wealth growth tracking, unified dashboard | Feature Grid | ✅ **Best place for new features** |
| **CTA** | `src/components/sections/CTA.tsx` | Download app, privacy sovereignty | Final Conversion | ⚠️ Modify carefully (conversion) |

---

## Component Inventory

### Layout Components

#### Navbar (`src/components/layout/Navbar.tsx`)
- **Responsibility**: Top navigation with logo, anchor links, CTA button
- **Features**:
  - Sticky on scroll with blur effect
  - Mobile hamburger menu (Framer Motion AnimatePresence)
  - Links: Features (`#features`), How it Works (`#how-it-works`)
  - CTA: Download App (Play Store link)
- **Safe to Edit?**: ✅ Yes (add new nav links if needed)

#### Footer (`src/components/layout/Footer.tsx`)
- **Responsibility**: Brand reinforcement, legal links, company info
- **Features**:
  - Logo + privacy tagline
  - Support links (Privacy Policy, Terms of Service)
  - Copyright: "© 2025 Novarex Studios"
- **Safe to Edit?**: ✅ Yes (add social links, contact, etc.)

---

### Section Components

#### Hero (`src/components/sections/Hero.tsx`)
- **Responsibility**: Above-the-fold conversion section
- **Key Elements**:
  - Badge: "Privacy-First Wealth Tracking" (Lock icon)
  - Headline: "Your Wealth. Your Business. No Bank. No PAN. No Aadhaar."
  - Subheadline: Manual entry + automated calculations
  - CTA: Google Play badge (currently commented Button component)
  - Phone mockup: `S25UltraMockup` component (hero-app-image.jpg)
  - Trust tags: "Secure Logs", "Market Data", "100% Private"
- **Feature Representation**: 
  - Privacy (no bank linking)
  - Automation (market calculations)
  - Manual control (log assets once)
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
  - **"Trex is for you if"** (4 green bullets with icons)
    - Single net-worth view across assets
    - Automated return/interest calculations
    - Accurate portfolio as prices change
    - Financial clarity without bank linking
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
- **Safe to Edit?**: ✅ **Yes** (add new "for you" bullets as features evolve)

---

#### BentoGrid (`src/components/sections/BentoGrid.tsx`)
- **Responsibility**: Feature showcase (visual grid of 4 key features)
- **Current Cards**:
  1. **Market Data Sync** (2 cols)
     - Auto-sync prices and mutual fund NAVs
     - Icon: RefreshCw
  2. **100% Privacy** (1 col)
     - No Bank, PAN, Aadhaar linking
     - Icon: ShieldCheck
  3. **Watch your wealth grow** (1 col)
     - Tracks growth, interest, returns
     - Icon: TrendingUp
  4. **Unified Dashboard** (2 cols)
     - Supports: Stocks, Gold, FD, MF (SIP & One-time)
     - Icon: LayoutDashboard
     - Shows 4 asset badges
- **Layout**: 3-column grid (responsive to 1 column on mobile)
- **Gradient Style**: Each card has gradient background (Glowing Sage shades)
- **Feature Representation**: Core app capabilities
- **Safe to Edit?**: ✅ **BEST PLACE FOR NEW FEATURES** (designed for scalability)

---

#### CTA (`src/components/sections/CTA.tsx`)
- **Responsibility**: Final conversion push before footer
- **Elements**:
  - Headline: "Ready to Own Your Financial Truth?"
  - Subheadline: "Join thousands of private investors..."
  - CTA: Google Play badge
- **Safe to Edit?**: ⚠️ Modify with caution (conversion-focused)

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
- **Usage**: Navbar, Hero, CTA (currently commented in favor of badge image)

---

## SEO & Metadata Strategy

### Current Metadata (Root Layout)
**File**: `src/app/layout.tsx`

```tsx
title: 'Trex - Privacy-First Wealth Tracking'
description: 'Your Wealth. Your Business. No Bank. No PAN. No Aadhaar. Track your investments with complete privacy.'
keywords: 'investment tracker, wealth management, privacy-first, portfolio tracker'
icons: { icon: '/favicon.png', shortcut: '/favicon.png', apple: '/favicon.png' }
```

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

### Metadata Gaps & Opportunities
❌ **Missing**:
- OpenGraph tags (og:title, og:description, og:image, og:url)
- Twitter Card tags
- Structured data (JSON-LD for SoftwareApplication)
- Canonical URLs
- Page-specific metadata (Privacy Policy, Terms of Service should have unique titles)

✅ **Currently Implemented**:
- Title tag
- Meta description
- Keywords
- Favicon

### Content SEO Patterns
- **Hero**: Emotional keywords ("Your Wealth", "No Bank", "No PAN")
- **Steps**: Process-oriented keywords ("Log", "Track", "View")
- **BentoGrid**: Feature-specific keywords ("Market Data Sync", "Privacy", "Unified Dashboard")
- **Internal Linking**: Minimal (only nav anchor links to #features, #how-it-works)

---

## Conversion Architecture

### Primary CTAs (by Section)
| Section | CTA Type | Text/Visual | Link Target |
|---------|----------|-------------|-------------|
| **Navbar** | Button | "Download App" | Play Store (inactive) |
| **Hero** | Badge Image | Google Play Badge | Play Store (href="#") |
| **CTA** | Badge Image | Google Play Badge | Play Store (href="#") |

### Current CTA Issues
⚠️ **All Play Store links point to `href="#"` (placeholder)**
- Need to update with actual Play Store URL when app is published
- Files to update: `Navbar.tsx`, `Hero.tsx`, `CTA.tsx`

### Conversion Flow
1. **Awareness** (Hero): Privacy + automation promise
2. **Education** (Steps): 3-step mental model
3. **Qualification** (AudienceAudit): "Is this for me?"
4. **Features** (BentoGrid): Detailed capabilities
5. **Decision** (CTA): Final push to download

### Trust Signals
- **Privacy badges**: "Privacy-First" badge in Hero and Footer
- **Transparency**: AudienceAudit clearly states what TREX is NOT
- **Legal pages**: Privacy Policy & Terms of Service linked in Footer
- **Company branding**: "Novarex Studios" in Footer

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

#### 4. **Footer** (`src/components/layout/Footer.tsx`)
- **Why**: Standard footer structure with support links
- **How**: Add new links or sections
- **Example Use Cases**:
  - Blog link (when blog exists)
  - Help/FAQ page
  - Social media links

---

### 🟡 Medium-Safety (Modify with Care)

#### 5. **Hero Section** (`src/components/sections/Hero.tsx`)
- **Why**: Primary conversion zone; changes affect above-fold experience
- **Risks**: Layout shifts, CTA confusion
- **Safe Changes**:
  - Update trust tags at bottom (currently: "Secure Logs", "Market Data", "100% Private")
  - Update subheadline to mention new features
- **Risky Changes**:
  - Changing headline structure
  - Removing/replacing phone mockup

#### 6. **Navbar** (`src/components/layout/Navbar.tsx`)
- **Why**: Navigation affects entire site UX
- **Safe Changes**:
  - Add new anchor links (e.g., `#faq`, `#pricing`)
- **Risky Changes**:
  - Changing logo
  - Removing CTA button

---

### 🔴 High-Risk (Avoid Unless Necessary)

#### 7. **CTA Section** (`src/components/sections/CTA.tsx`)
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

**Action**: Update keywords and description to include new feature

**Example** (Adding "Crypto"):
```tsx
export const metadata: Metadata = {
  title: 'Trex - Privacy-First Wealth Tracking',
  description: 'Your Wealth. Your Business. No Bank. No PAN. No Aadhaar. Track stocks, FDs, gold, mutual funds, and crypto with complete privacy.',
  keywords: 'investment tracker, wealth management, privacy-first, portfolio tracker, crypto tracker',
  // ...
}
```

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
| **Privacy/Security** | ✅ Add card | ✅ Add bullet | ❌ No | ✅ Update tags | ✅ Update desc | ✅ Update Privacy Policy |
| **UI/UX Feature** | ✅ Add card | ⚠️ Maybe | ⚠️ Maybe | ❌ No | ❌ No | ❌ No |
| **Export/Integration** | ✅ Add card | ⚠️ Maybe | ⚠️ Add step 4 | ❌ No | ✅ Update keywords | ⚠️ Maybe ToS |

---

## File Path Quick Reference

### Pages
- Home: `src/app/page.tsx`
- Privacy Policy: `src/app/privacypolicy/page.tsx`
- Terms of Service: `src/app/termsofservice/page.tsx`

### Layout Components
- Navbar: `src/components/layout/Navbar.tsx`
- Footer: `src/components/layout/Footer.tsx`

### Section Components
- Hero: `src/components/sections/Hero.tsx`
- Steps: `src/components/sections/Steps.tsx`
- AudienceAudit: `src/components/sections/AudienceAudit.tsx`
- BentoGrid: `src/components/sections/BentoGrid.tsx`
- CTA: `src/components/sections/CTA.tsx`

### UI Components
- Button: `src/components/ui/Button.tsx`
- SectionHeading: `src/components/ui/SectionHeading.tsx`
- S25UltraMockup: `src/components/ui/S25UltraMockup.tsx`
- PlayStoreIcon: `src/components/ui/PlayStoreIcon.tsx`

### Metadata
- Root Layout: `src/app/layout.tsx`

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
1. **Market Data Sync** - Auto-updates prices and NAVs
2. **100% Privacy** - No bank, PAN, or Aadhaar linking
3. **Wealth Growth Tracking** - Tracks returns and interest over time
4. **Unified Dashboard** - Single view across all assets

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
2. **Manual Control**: Deliberate choice over automation
3. **Simplicity**: Log once, track forever
4. **Clarity**: "Trex doesn't make decisions for you. It makes your decisions clearer."

---

## Known Issues & TODOs

### Critical
- [ ] **Play Store links are placeholders** (`href="#"`)
  - Update in: Navbar, Hero, CTA
  
### SEO Gaps
- [ ] Add OpenGraph metadata
- [ ] Add Twitter Card metadata
- [ ] Implement structured data (JSON-LD for SoftwareApplication)
- [ ] Add canonical URLs
- [ ] Create page-specific metadata for legal pages

### Feature Representation Gaps
- [ ] No mention of graphs/charts (if app has them)
- [ ] No mention of notifications/alerts
- [ ] No mention of data export features

### Design Considerations
- [ ] Consider adding FAQ section (common for SaaS/app landing pages)
- [ ] Consider testimonials section (social proof)
- [ ] Consider feature comparison table (TREX vs competitors)

---

## Conclusion

This document serves as the **single source of truth** for understanding the TREX Landing Page structure, content, and feature representation. When a new app feature is added:

1. Read this document to understand current feature representation
2. Follow the "How to Update for New Features" workflow
3. Update the relevant sections (usually BentoGrid + AudienceAudit)
4. Update metadata if the feature affects SEO
5. Test thoroughly before deploying

**Keep this document updated** as the landing page evolves.

---

**End of Document**
