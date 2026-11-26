'use client'

import { useEffect } from 'react'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import More from '@/components/sections/More'
import Privacy from '@/components/sections/Privacy'
import Plans from '@/components/sections/Plans'
import HowItWorks from '@/components/sections/HowItWorks'
import FAQ from '@/components/sections/FAQ'
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
        <Features />
        <More />
        <Privacy />
        <Plans />
        <HowItWorks />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
