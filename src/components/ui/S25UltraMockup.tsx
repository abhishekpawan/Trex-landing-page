'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// A phone frame around one screenshot. The pictures are real screens from the Trex app with made-up data.
// The screen has the same shape as the pictures (540 x 1176, a modern tall phone, about 9:19.5), so nothing is cropped.
// Every picture must have that shape; a different one would be stretched or cut.
export default function S25UltraMockup({
  src = '/screens/deposits.jpg',
  alt = 'Trex Deposits screen, with made-up data',
  float = true,
}: {
  src?: string
  alt?: string
  float?: boolean
}) {
  return (
    <motion.div
      animate={float ? { y: [0, -10, 0] } : undefined}
      transition={float ? { duration: 6, repeat: Infinity, ease: 'easeInOut' } : undefined}
      className="relative mx-auto w-[230px] md:w-[260px] bg-navy rounded-[36px] p-[7px] shadow-[0_0_60px_rgba(133,144,240,0.18)] border-2 border-line overflow-hidden"
    >
      <div className="w-full aspect-[540/1176] bg-white rounded-[29px] overflow-hidden relative">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="260px"
          className="object-cover"
          priority={float}
        />
      </div>
    </motion.div>
  )
}
