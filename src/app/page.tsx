'use client'

import { useEffect } from 'react'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import Steps from '@/components/sections/Steps'
import AudienceAudit from '@/components/sections/AudienceAudit'
import BentoGrid from '@/components/sections/BentoGrid'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/layout/Footer'

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-[#F1F5F9] font-sans selection:bg-[#6FAF9E] selection:text-[#0B0F1A]">
      <Navbar />
      <main>
        <Hero />
        <Steps />
        <AudienceAudit />
        <BentoGrid />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
