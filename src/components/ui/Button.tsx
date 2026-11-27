'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'onDrag' | 'onDragEnd' | 'onDragStart'> {
  children: ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  className?: string
}

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}: ButtonProps) {
  const variants = {
    primary: 'bg-accent text-page hover:bg-accent/80 shadow-lg shadow-accent/20',
    outline: 'border-2 border-line text-ink hover:bg-raised/50',
    ghost: 'text-ink/70 hover:text-white hover:bg-raised/50'
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`px-6 py-3 rounded-xl font-bold transition-all duration-200 flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
