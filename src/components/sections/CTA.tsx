'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PlayStoreIcon from '@/components/ui/PlayStoreIcon'
import PreRegisterForm from '@/components/ui/PreRegisterForm'
import FeedbackButtons from '@/components/ui/FeedbackButtons'

export default function CTA() {
  return (
    <section className="py-10 px-6 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto bg-gradient-to-br from-[#1F2933] to-[#0B0F1A] rounded-[48px] p-12 md:p-20 text-center relative border border-white/10 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#6FAF9E]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px] pointer-events-none"></div>
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8 leading-tight">
          Ready to Own Your <br className="hidden md:block" /> Financial Truth?
        </h2>
        <p className="text-white/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Join the waitlist for early access. Be among the first to experience true financial privacy.
        </p>
        {/* Join thousands of private investors who prefer manual control and absolute data sovereignty. Download the app today. */}
        {/* <div className="flex justify-center items-center gap-4 flex-wrap">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#6FAF9E] text-[#0B0F1A] font-bold text-xl px-10 py-5 rounded-2xl shadow-2xl shadow-[#6FAF9E]/20 flex items-center gap-3 transition-all"
          >
            <PlayStoreIcon size={24} /> Get it on Android
          </motion.button>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-lg shadow-lg"
          >
            <Image
              src="/badge-google-play-button.png"
              alt="Get it on Google Play"
              width={200}
              height={90}
              className="h-auto"
            />
          </motion.a>
        </div> */}
        <div className="max-w-2xl mx-auto mb-8">
          <PreRegisterForm variant="inline" size="lg" source="cta" />
        </div>
        <div className="flex justify-center">
          <FeedbackButtons source="cta" />
        </div>
      </motion.div>
    </section>
  )
}
