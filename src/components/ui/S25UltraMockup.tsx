'use client'

import { motion } from 'framer-motion'
import { Image as ImageIcon } from 'lucide-react'

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
        <div className="w-full h-full bg-[#F6F7F8] flex flex-col items-center justify-center p-8 text-center group">
          <div className="w-16 h-16 bg-[#6FAF9E]/10 rounded-full flex items-center justify-center mb-4 transition-transform duration-500 shadow-sm border border-[#6FAF9E]/20">
            <ImageIcon className="text-[#6FAF9E] w-8 h-8" />
          </div>
          <p className="text-[#1F2933] font-bold text-sm tracking-tight mb-1 uppercase text-center">Light Mode App Preview</p>
          <p className="text-[#1F2933]/40 text-[10px] leading-tight max-w-[140px] font-medium text-center">
            1080x2340 App Screenshot
          </p>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-white/10 opacity-30 pointer-events-none"></div>
          <div className="absolute inset-0 border-[1px] border-dashed border-[#6FAF9E]/30 m-4 rounded-xl pointer-events-none"></div>
        </div>
      </div>
    </motion.div>
  )
}
