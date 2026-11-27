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
const siteTitle = 'Trex: every FD in one place, private on your phone';
const siteDescription = 'See every FD across your banks with the ₹5 lakh insurance limit, maturities and tax on interest. RD, PPF, EPF, funds and stocks too. Stays on your phone.';

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: 'FD tracker, fixed deposit tracker app, FD maturity tracker, DICGC limit tracker, FD interest tax calculator, net worth tracker India, portfolio tracker app, private investment tracker, mutual fund tracker, SIP tracker, PPF EPF NPS tracker, CAS import',
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
        alt: 'Trex: every FD in one place, private on your phone',
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
    operatingSystem: 'Android',
    description: siteDescription,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
      description: 'Free to use. Optional Plus plan for family portfolios, themes and icons.',
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
