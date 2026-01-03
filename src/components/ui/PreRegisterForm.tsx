'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Check, Loader2 } from 'lucide-react'
import { submitEmail } from '@/lib/api'

interface PreRegisterFormProps {
  variant?: 'inline' | 'stacked'
  size?: 'sm' | 'md' | 'lg'
  source?: 'hero' | 'cta' | 'navbar'
}

export default function PreRegisterForm({ variant = 'inline', size = 'md', source = 'hero' }: PreRegisterFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error')
      setMessage('Please enter a valid email')
      return
    }

    setStatus('loading')
    
    // Call the API
    const response = await submitEmail(email, source)
    
    if (response.success) {
      setStatus('success')
      setMessage(response.message)
      setEmail('')
      
      // Reset after 3 seconds
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 3000)
    } else {
      setStatus('error')
      setMessage(response.error || 'Failed to register. Please try again.')
      
      // Reset error after 3 seconds
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 3000)
    }
  }

  const sizeClasses = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-5 py-3',
    lg: 'text-lg px-6 py-4'
  }

  const buttonSizeClasses = {
    sm: 'px-4 py-2',
    md: 'px-6 py-3',
    lg: 'px-8 py-4'
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-2 text-[#6FAF9E] font-medium"
      >
        <Check size={20} />
        <span>{message}</span>
      </motion.div>
    )
  }

  return (
    <div className="w-full max-w-full overflow-hidden">
      <form 
        onSubmit={handleSubmit}
        className={`flex ${variant === 'stacked' ? 'flex-col' : 'flex-col sm:flex-row'} gap-3 w-full`}
      >
        <div className="relative flex-1 min-w-0">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={`w-full ${sizeClasses[size]} pl-12 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#6FAF9E] focus:bg-white/10 transition-all`}
            disabled={status === 'loading'}
          />
        </div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={status === 'loading'}
          className={`${buttonSizeClasses[size]} bg-[#6FAF9E] text-[#0B0F1A] font-bold rounded-xl hover:bg-[#7FC0AF] transition-all shadow-lg shadow-[#6FAF9E]/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap flex-shrink-0 sm:flex-shrink w-full sm:w-auto`}
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              <span className="hidden sm:inline">Submitting...</span>
              <span className="sm:hidden">Submitting</span>
            </>
          ) : (
            'Pre-Register'
          )}
        </motion.button>
      </form>
      {status === 'error' && (
        <p className="text-red-400 text-sm mt-2">{message}</p>
      )}
    </div>
  )
}

