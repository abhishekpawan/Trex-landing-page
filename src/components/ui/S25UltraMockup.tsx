'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function S25UltraMockup() {
  return (
    <motion.div 
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative mx-auto w-[280px] h-[580px] md:w-[320px] md:h-[660px] bg-[#2D3436] rounded-[32px] p-[8px] shadow-[0_0_50px_rgba(111,175,158,0.15)] border-[3px] border-[#B2BEC3]/30 overflow-hidden"
    >
      <div className="absolute inset-0 rounded-[28px] pointer-events-none z-20 shadow-[inset_0_0_15px_rgba(0,0,0,0.8)]"></div>
      <div className="w-full h-full bg-[#FFFFFF] rounded-[24px] overflow-hidden relative border border-white/10">
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-black rounded-full z-30 opacity-80"></div>
        <div className="w-full h-full relative">
          <Image
            src="/hero-app-image.jpg"
            alt="Trex App Dashboard"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </motion.div>
  )
}
