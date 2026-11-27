'use client'

import { motion } from 'framer-motion'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  tag?: string
  compact?: boolean
}

export default function SectionHeading({ 
  title, 
  subtitle, 
  centered = true, 
  tag = "",
  compact = false
}: SectionHeadingProps) {
  return (
    <div className={`${compact ? 'mb-6' : 'mb-16'} ${centered ? 'text-center' : ''}`}>
      {tag && (
        <span className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 block">
          {tag}
        </span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-ink tracking-tighter mb-6"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`text-ink/70 text-lg max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
