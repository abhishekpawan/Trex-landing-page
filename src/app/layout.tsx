import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { SITE_URL } from '@/lib/site'

// Manrope, the Trex app's font (weights 500, 700, 800), self-hosted.
const manrope = localFont({
  src: [
    { path: '../fonts/Manrope_500Medium.ttf', weight: '500' },
    { path: '../fonts/Manrope_700Bold.ttf', weight: '700' },
    { path: '../fonts/Manrope_800ExtraBold.ttf', weight: '800' },
  ],
  variable: '--font-manrope',
  display: 'swap',
})

const siteUrl = SITE_URL;
const siteTitle = 'Trex: FD Tracker and Net Worth App for India';
const siteDescription = 'Track every FD from every bank in one free app: maturities, the ₹5 lakh insurance limit and a tax estimate. Add PPF, EPF, funds and stocks. Private, no bank login.';

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: 'FD tracker, fixed deposit tracker app, FD maturity reminder, FD maturity tracker, DICGC limit checker, FD interest tax estimate, TDS on FD interest, net worth tracker India, portfolio tracker app, private investment tracker, mutual fund tracker, SIP tracker, PPF EPF NPS tracker, CAS import',
  metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: 'website',
    url: siteUrl,
    siteName: 'Trex',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Trex: FD tracker and net worth app for India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [`${siteUrl}/og-image.png`],
  },
  other: {
    'og:image:type': 'image/png',
    'og:image:secure_url': `${siteUrl}/og-image.png`,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Trex',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Android, iOS',
    description: siteDescription,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
      description: 'Free to use, with no ads. Optional Plus plan for family portfolios, themes and icons.',
    },
    countriesSupported: 'IN',
    creator: {
      '@type': 'Organization',
      name: 'Novarex Studios',
    },
    privacyPolicy: `${siteUrl}/privacypolicy`,
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${manrope.variable} font-sans bg-page text-ink`}>{children}</body>
    </html>
  )
}
