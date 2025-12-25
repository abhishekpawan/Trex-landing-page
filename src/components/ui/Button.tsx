'use client'

import { motion } from 'framer-motion'
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
    primary: 'bg-[#6FAF9E] text-[#0B0F1A] hover:bg-[#88c5b6] shadow-lg shadow-[#6FAF9E]/20',
    outline: 'border-2 border-[#334155] text-[#F1F5F9] hover:bg-[#1F2933]/50',
    ghost: 'text-[#F1F5F9]/70 hover:text-white hover:bg-[#1F2933]/50'
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
