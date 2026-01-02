'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ThumbsUp, ThumbsDown, Check, Loader2 } from 'lucide-react'
import { submitFeedback } from '@/lib/api'

interface FeedbackButtonsProps {
  label?: string
  source?: 'hero' | 'cta' | 'navbar'
}

export default function FeedbackButtons({ label = "Like the idea?", source = 'hero' }: FeedbackButtonsProps) {
  const [feedback, setFeedback] = useState<'like' | 'dislike' | null>(null)
  const [showThanks, setShowThanks] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleFeedback = async (type: 'like' | 'dislike') => {
    if (isLoading || feedback) return
    
    setIsLoading(true)
    
    // Call the API
    const response = await submitFeedback(type, source)
    
    setIsLoading(false)
    
    if (response.success) {
      setFeedback(type)
      setShowThanks(true)
      
      // Hide thanks message after 2 seconds
      setTimeout(() => {
        setShowThanks(false)
      }, 2000)
    } else {
      // Show error briefly
      console.error('Failed to submit feedback:', response.error)
      // Could add error state here if needed
    }
  }

  return (
    <div className="flex items-center gap-4">
      <span className="text-white/60 text-sm font-medium">{label}</span>
      <div className="flex items-center gap-2">
        <motion.button
          whileHover={{ scale: feedback === null && !isLoading ? 1.1 : 1 }}
          whileTap={{ scale: feedback === null && !isLoading ? 0.9 : 1 }}
          onClick={() => handleFeedback('like')}
          className={`p-3 rounded-xl transition-all ${
            feedback === 'like' 
              ? 'bg-[#6FAF9E] text-[#0B0F1A]' 
              : 'bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-[#6FAF9E]/50'
          } ${(feedback !== null || isLoading) && 'cursor-not-allowed opacity-70'}`}
          disabled={feedback !== null || isLoading}
        >
          {isLoading ? <Loader2 size={20} className="animate-spin" /> : <ThumbsUp size={20} />}
        </motion.button>
        <motion.button
          whileHover={{ scale: feedback === null && !isLoading ? 1.1 : 1 }}
          whileTap={{ scale: feedback === null && !isLoading ? 0.9 : 1 }}
          onClick={() => handleFeedback('dislike')}
          className={`p-3 rounded-xl transition-all ${
            feedback === 'dislike' 
              ? 'bg-red-500 text-white' 
              : 'bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-red-500/50'
          } ${(feedback !== null || isLoading) && 'cursor-not-allowed opacity-70'}`}
          disabled={feedback !== null || isLoading}
        >
          {isLoading ? <Loader2 size={20} className="animate-spin" /> : <ThumbsDown size={20} />}
        </motion.button>
      </div>
      <AnimatePresence>
        {showThanks && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="flex items-center gap-2 text-[#6FAF9E]"
          >
            <Check size={16} />
            <span className="text-sm font-medium">Thanks for your feedback!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

