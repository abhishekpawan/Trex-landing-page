'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import PlayStoreIcon from '@/components/ui/PlayStoreIcon'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-[#0B0F1A]/80 backdrop-blur-xl border-b border-white/5 py-1' : 'bg-transparent py-3'}`}>
        <div className="max-w-7xl mx-auto px-6 xl:px-0 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logos/Trex-icon-text-logo-side-by-side.png" 
              alt="Trex Logo" 
              width={140} 
              height={80}
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#features" className="text-[#F1F5F9]/75 hover:text-[#6FAF9E] transition-colors">Features</a>
            <a href="#how-it-works" className="text-[#F1F5F9]/75 hover:text-[#6FAF9E] transition-colors">How it Works</a>
            <a href="#faq" className="text-[#F1F5F9]/75 hover:text-[#6FAF9E] transition-colors">FAQ</a>
            {/* <Button className="px-5 py-2 flex items-center gap-2">
              <PlayStoreIcon size={18} /> Download App
            </Button> */}
            <a href="#pre-register">
              <Button className="px-5 py-2">
                Pre-Register
              </Button>
            </a>
          </div>

          <button 
            className="md:hidden text-[#F1F5F9]" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#0B0F1A] border-b border-white/5 px-6 py-8 flex flex-col gap-4 overflow-hidden"
            >
              <a href="#features" className="text-lg font-medium text-white" onClick={() => setIsOpen(false)}>Features</a>
              <a href="#how-it-works" className="text-lg font-medium text-white" onClick={() => setIsOpen(false)}>How it Works</a>
              <a href="#faq" className="text-lg font-medium text-white" onClick={() => setIsOpen(false)}>FAQ</a>
              <hr className="border-white/10" />
              {/* <Button onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                <PlayStoreIcon size={18} /> Download App
              </Button> */}
              <a href="#pre-register">
                <Button onClick={() => setIsOpen(false)}>
                  Pre-Register
                </Button>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      
      {/* Backdrop overlay - rendered outside nav to prevent covering navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 right-0 bottom-0 bg-black/60 backdrop-blur-sm md:hidden z-50"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  )
}
