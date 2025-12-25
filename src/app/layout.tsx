import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Trex - Privacy-First Wealth Tracking',
  description: 'Your Wealth. Your Business. No Bank. No PAN. No Aadhaar. Track your investments with complete privacy.',
  keywords: 'investment tracker, wealth management, privacy-first, portfolio tracker',
  icons: {
    icon: '/logos/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
