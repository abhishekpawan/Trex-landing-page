'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

interface FAQItem {
  question: string
  answer: string | string[]
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqItems: FAQItem[] = [
    {
      question: "What is TREX?",
      answer: "TREX is a personal app to track your investments in one place. You manually add your assets, and TREX calculates values, returns, and growth for you."
    },
    {
      question: "Do I need to link my bank account?",
      answer: "No. TREX does not ask for bank login, PAN, Aadhaar, or broker access. You stay in full control."
    },
    {
      question: "What kind of investments can I track?",
      answer: [
        "You can track:",
        "- Stocks",
        "- Gold",
        "- Fixed Deposits (FDs)",
        "- Mutual Funds (SIP and one-time)",
        "",
        "All of them appear together in one place."
      ]
    },
    {
      question: "How does TREX update prices if I don't link accounts?",
      answer: "TREX uses public market data to update stock prices and mutual fund NAVs. You enter your investment details once. TREX keeps the values updated automatically."
    },
    {
      question: "Is my data safe?",
      answer: "Yes. The data you enter is encrypted and stored securely. Your financial details are private and not shared with anyone."
    },
    {
      question: "Can TREX see my investment data?",
      answer: "No. TREX does not read or analyze your personal investment details. Your data stays yours."
    },
    {
      question: "Does TREX give buy or sell advice?",
      answer: "No. TREX does not give tips, recommendations, or predictions. It only shows your numbers clearly, so you can decide."
    },
    {
      question: "Can I export my data?",
      answer: "Yes. You can download your portfolio as an Excel file anytime. This includes invested amount, current value, and returns."
    },
    {
      question: "Do I need finance knowledge to use TREX?",
      answer: "No. TREX is built for normal users. If you know how much you invested, TREX will handle the rest."
    },
    {
      question: "Is TREX for traders or long-term investors?",
      answer: "TREX is best for long-term tracking. If you trade daily or want instant buy/sell alerts, TREX may not be for you."
    },
    {
      question: "Why is manual entry better?",
      answer: [
        "Manual entry means:",
        "- No privacy risk",
        "- No account access",
        "- No hidden data sharing",
        "",
        "You trade a little effort for full control."
      ]
    },
    {
      question: "Is TREX a replacement for my broker app?",
      answer: "No. TREX does not place trades. It is only for tracking and understanding your investments."
    }
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-10 px-6 bg-[#0B0F1A]">
      <div className="max-w-4xl mx-auto">
        <SectionHeading 
          title="Frequently Asked Questions"
          subtitle="Clear answers to common questions about privacy, data, and how TREX works."
        />
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-sm hover:border-white/20 transition-colors"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-[#F1F5F9] pr-4 group-hover:text-[#6FAF9E] transition-colors">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown 
                    size={24} 
                    className="text-[#6FAF9E]" 
                  />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0">
                      {Array.isArray(item.answer) ? (
                        <div className="text-[#F1F5F9]/70 leading-relaxed space-y-1">
                          {item.answer.map((line, i) => (
                            <p key={i}>{line}</p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-[#F1F5F9]/70 leading-relaxed">
                          {item.answer}
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

