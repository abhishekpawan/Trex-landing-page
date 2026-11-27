'use client'

import { motion } from 'framer-motion'
import { Lock } from 'lucide-react'
import S25UltraMockup from '@/components/ui/S25UltraMockup'
import GetTrex from '@/components/ui/GetTrex'

export default function Hero() {
  return (
    <section className="relative pt-[100px] md:pt-[120px] pb-10 overflow-hidden px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent/5 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full text-accent text-sm font-bold mb-6 border border-accent/20">
            <Lock size={14} />
            FD tracker for Android, made in India
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-[1.05] mb-6">
            Know where every FD stands.{' '}
            <span className="text-accent">Privately.</span>
          </h1>
          <p className="text-lg md:text-xl text-ink/75 mb-8 max-w-xl leading-relaxed">
            All your fixed deposits, from every bank, together. See when each one matures, what interest it has earned and whether any bank
            holds more than the ₹5 lakh insurance covers. Add your PPF, EPF, mutual funds and stocks too.
          </p>

          <div className="max-w-xl mb-6" id="pre-register">
            <GetTrex source="hero" />
          </div>

          <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink/60">
            <li>Free to use</li>
            <li>No bank login</li>
            <li>No ads</li>
            <li>Stays on your phone</li>
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }} className="relative">
          <S25UltraMockup src="/screens/deposits.jpg" alt="Trex Deposits screen: every bank with its total and a bar toward the insurance limit. Made-up data." />
          <p className="text-center text-xs text-ink/45 mt-4">Made-up data, not a real portfolio.</p>
        </motion.div>
      </div>
    </section>
  )
}
