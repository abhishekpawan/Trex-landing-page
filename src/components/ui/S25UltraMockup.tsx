'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// A phone frame around one screenshot. The pictures are real screens from the Trex app with made-up data.
// The screen is always 9:16 (a phone's shape). The pictures are 540 x 1176, so `pos` says which part to keep:
// 0 = the top (the phone's navigation bar and the lowest ~18% are cut off), 100 = the bottom.
export default function S25UltraMockup({
  src = '/screens/deposits.jpg',
  alt = 'Trex Deposits screen, with made-up data',
  float = true,
  pos = 0,
}: {
  src?: string
  alt?: string
  float?: boolean
  pos?: number
}) {
  return (
    <motion.div
      animate={float ? { y: [0, -10, 0] } : undefined}
      transition={float ? { duration: 6, repeat: Infinity, ease: 'easeInOut' } : undefined}
      className="relative mx-auto w-[250px] md:w-[300px] bg-navy rounded-[36px] p-[7px] shadow-[0_0_60px_rgba(133,144,240,0.18)] border-2 border-line overflow-hidden"
    >
      <div className="w-full aspect-[9/16] bg-white rounded-[29px] overflow-hidden relative">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="300px"
          className="object-cover"
          style={{ objectPosition: `50% ${pos}%` }}
          priority={float}
        />
      </div>
    </motion.div>
  )
}
