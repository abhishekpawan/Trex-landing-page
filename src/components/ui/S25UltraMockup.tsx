'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// A phone frame around one screenshot. The pictures are real screens from the Trex app with made-up data.
// `height` is how much of the picture to show, in its own pixels from the top (pictures are 540 wide, 1176 tall): the phone's
// navigation bar and any empty bottom part are cut off.
export default function S25UltraMockup({ src = '/screens/deposits.jpg', alt = 'Trex Deposits screen, with made-up data', float = true, height = 1090 }: { src?: string; alt?: string; float?: boolean; height?: number }) {
  return (
    <motion.div
      animate={float ? { y: [0, -10, 0] } : undefined}
      transition={float ? { duration: 6, repeat: Infinity, ease: 'easeInOut' } : undefined}
      className="relative mx-auto w-[260px] md:w-[290px] bg-[#2D3436] rounded-[32px] p-[8px] shadow-[0_0_50px_rgba(111,175,158,0.15)] border-[3px] border-[#B2BEC3]/30 overflow-hidden"
    >
      <div className="absolute inset-0 rounded-[28px] pointer-events-none z-20 shadow-[inset_0_0_15px_rgba(0,0,0,0.8)]"></div>
      <div className="w-full bg-[#FFFFFF] rounded-[24px] overflow-hidden relative border border-white/10" style={{ aspectRatio: `540 / ${height}` }}>
        <Image src={src} alt={alt} fill sizes="290px" className="object-cover object-top" priority={float} />
      </div>
    </motion.div>
  )
}
