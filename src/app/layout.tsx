import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://trexfolio.com';
const siteTitle = 'Trex – Privacy-First Wealth Tracking';
const siteDescription = 'Your Wealth. Your Business. No Bank. No PAN. No Aadhaar. Track your investments with complete privacy.';

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: 'investment tracker, wealth management, privacy-first, portfolio tracker',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: 'website',
    url: siteUrl,
    siteName: 'Trex',
    images: [
      {
        url: `${siteUrl}/logos/Trex-icon-text-logo.png`,
        width: 1200,
        height: 630,
        alt: 'Trex - Privacy-First Wealth Tracking',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [`${siteUrl}/logos/Trex-icon-text-logo.png`],
  },
  other: {
    'og:image:type': 'image/png',
    'og:image:secure_url': `${siteUrl}/logos/Trex-icon-text-logo.png`,
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
    },
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
