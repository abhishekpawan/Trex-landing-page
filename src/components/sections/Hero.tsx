'use client'

import { motion } from 'framer-motion'
import { Lock } from 'lucide-react'
import S25UltraMockup from '@/components/ui/S25UltraMockup'
import GetTrex from '@/components/ui/GetTrex'

export default function Hero() {
  return (
    <section className="relative pt-[100px] md:pt-[120px] pb-10 overflow-hidden px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#6FAF9E]/5 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#6FAF9E]/10 rounded-full text-[#6FAF9E] text-sm font-bold mb-6 border border-[#6FAF9E]/20">
            <Lock size={14} />
            For Android, in India
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-[1.05] mb-6">
            Every FD you have, in one place.{' '}
            <span className="text-[#6FAF9E]">Private, on your phone.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#F1F5F9]/75 mb-8 max-w-xl leading-relaxed">
            Trex shows your FDs across all your banks first, then your RD, PPF, EPF, NPS, gold and anything else. Funds and stocks from a
            statement complete your net worth. No bank link, and Trex never asks for your PAN.
          </p>

          <div className="max-w-xl mb-6" id="pre-register">
            <GetTrex source="hero" />
          </div>

          <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#F1F5F9]/60">
            <li>No sign-up to start</li>
            <li>Free to use</li>
            <li>No ads</li>
            <li>Prices from AMFI and BSE</li>
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }} className="relative">
          <S25UltraMockup src="/screens/deposits.jpg" alt="Trex Deposits screen: every bank with its total and a bar toward the insurance limit. Made-up data." />
          <p className="text-center text-xs text-[#F1F5F9]/45 mt-4">Made-up data, not a real portfolio.</p>
        </motion.div>
      </div>
    </section>
  )
}
