'use client'

import { motion } from 'framer-motion'
import { Lock } from 'lucide-react'
import Image from 'next/image'
import S25UltraMockup from '@/components/ui/S25UltraMockup'
import Button from '@/components/ui/Button'
import PlayStoreIcon from '@/components/ui/PlayStoreIcon'

export default function Hero() {
  return (
    <section className="relative pt-40 pb-10 overflow-hidden px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#6FAF9E]/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#6FAF9E]/10 rounded-full text-[#6FAF9E] text-sm font-bold mb-6 border border-[#6FAF9E]/20">
            <Lock size={14} />
            Privacy-First Wealth Tracking
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[1.05] mb-6">
            Your Wealth. <br />
            Your Business. <br />
            <span className="text-[#6FAF9E]">
              <span className="block md:inline">No Bank.</span>{' '}
              <span className="block md:inline">No PAN.</span>{' '}
              <span className="block md:inline">No Aadhaar.</span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[#F1F5F9]/75 mb-10 max-w-xl leading-relaxed">
            Trex gives you the power of automated tracking with the peace of mind of 100% privacy. Log your assets once — we&apos;ll handle the live market math.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            {/* <Button className="px-10 py-5 text-xl">
              <PlayStoreIcon size={24} /> Download for Android
            </Button> */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-lg shadow-lg"
            >
              <Image
                src="/badge-google-play-button.png"
                alt="Get it on Google Play"
                width={180}
                height={70}
                className="h-auto"
              />
            </motion.a>
          </div>
          
          <div className="mt-16 flex items-center gap-8 opacity-30">
            <span className="text-sm font-bold text-white tracking-widest uppercase">Secure Logs</span>
            <span className="text-sm font-bold text-white tracking-widest uppercase">Live Markets</span>
            <span className="text-sm font-bold text-white tracking-widest uppercase">100% Private</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <S25UltraMockup />
        </motion.div>
      </div>
    </section>
  )
}
