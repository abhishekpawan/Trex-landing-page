'use client'

import { motion } from 'framer-motion'
import GetTrex from '@/components/ui/GetTrex'

export default function CTA() {
  return (
    <section className="py-10 px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto bg-gradient-to-br from-raised to-page rounded-[32px] md:rounded-[48px] p-8 sm:p-12 md:p-20 text-center relative border border-white/10 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px] pointer-events-none"></div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6 leading-tight">
          Bring all your FDs together.
        </h2>
        <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Free to use. No sign-up, no bank login. Add your first FD and see the whole picture.
        </p>
        <div className="max-w-2xl mx-auto flex justify-center text-left">
          <div className="w-full max-w-xl">
            <GetTrex align="center" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
