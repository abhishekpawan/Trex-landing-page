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
      question: "What is Trex?",
      answer: "Trex is an Android app that shows everything you own in one place, starting with every FD across all your banks. Your RD, PPF, EPF, NPS, gold and anything else sit beside them, and funds and stocks from a statement complete your net worth."
    },
    {
      question: "Do I need an account?",
      answer: "No. You can start without signing in, and everything works on your phone. You sign in with Google only if you want a backup."
    },
    {
      question: "Do I have to link my bank?",
      answer: "No. Trex has no bank link, no Account Aggregator, and does not read your SMS or email. It never asks for your PAN, Aadhaar, phone number or name. One note: the password of a statement you import is often your PAN. You type it on your phone to open the file, and it stays there."
    },
    {
      question: "Can Trex see my portfolio?",
      answer: "No. Your portfolio lives on your phone, in an encrypted database, and what you hold is never sent to us in a form we can read. If you turn on backup, we store an encrypted copy that only your recovery key can open, and we can’t read it. The privacy section above covers the main things that leave your phone, and the privacy policy lists all of them."
    },
    {
      question: "What if I lose my phone?",
      answer: "If you had backup on, on the new phone, sign in and enter your recovery key, and your portfolio comes back. Trex often finds the key for you from Google’s end-to-end encrypted key backup, if your phone had a screen lock. The recovery key is shown to you when you turn backup on. If you lose the phone and every copy of the key, nobody can open the backup, not even us. Without backup, you can import your statements again to get your funds and stocks back."
    },
    {
      question: "How are prices updated?",
      answer: "Your phone downloads the day’s public price files straight from AMFI (mutual fund NAVs, the price per unit) and BSE (stock prices) when you open the app. They are end-of-day prices, not live ones. FDs, RDs, PPF and EPF are worked out on your phone from the rates you enter."
    },
    {
      question: "What kinds of money can I add?",
      answer: "FDs, RDs, PPF, EPF, NPS, gold, Post Office schemes, bonds, property, cash and savings, mutual funds, stocks and ETFs, and anything else as Other. Funds and stocks can come in from a statement."
    },
    {
      question: "Which statements work?",
      answer: "Trex has been tested with real statements from CAMS and MF Central (funds) and CDSL (shares and funds). Statements from NSDL and KFintech may work but have not been tested with a real file; a KFintech statement can be requested on the CAMS form. The Help page shows how to get each one."
    },
    {
      question: "Is the tax view advice?",
      answer: "No. It is an estimate worked out on your phone from the interest your FDs earned and the slab you choose. It is not tax advice. Trex gives no advice at all: no tips, no “top funds”, no recommendations."
    },
    {
      question: "What does Trex cost?",
      answer: "Trex is free, with no ads. Plus adds family portfolios, more colour themes and app icons: ₹130 a month, ₹1,000 a year (with a 1-week free trial for new subscribers), or ₹3,000 once. Plus is sold in India only, through Google Play. If Plus ends, nothing is deleted."
    },
    {
      question: "Can I take my data out?",
      answer: "Yes. Export everything to an Excel file, free, any time. You can also save an encrypted backup file that your recovery key opens."
    },
    {
      question: "How do I delete my data?",
      answer: "On your phone, Settings has Delete all data. If you signed in for backup, Backup & key in Settings also has Delete account and backup, which deletes your backup and sign-in from our server. There is a page about it too: trexfolio.com/delete-account."
    },
    {
      question: "Does Trex collect any usage data?",
      answer: "Yes, anonymous usage stats, sent to PostHog (in the EU) while you use the app. They are on by default and one tap in Settings turns them off. They carry a random ID made on your phone and the names of screens and buttons. They never carry amounts, names or banks."
    },
    {
      question: "Who makes Trex?",
      answer: "Novarex Studios, in India. Trex is for Android and for people in India for now."
    }
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="scroll-mt-16 py-10 px-6 bg-page">
      <div className="max-w-4xl mx-auto">
        <SectionHeading 
          title="Questions people ask"
          subtitle="Short answers about privacy, your data and how Trex works."
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
                <span className="text-lg font-semibold text-ink pr-4 group-hover:text-accent transition-colors">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown 
                    size={24} 
                    className="text-accent" 
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
                        <div className="text-ink/75 leading-relaxed space-y-1">
                          {item.answer.map((line, i) => (
                            <p key={i}>{line}</p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-ink/75 leading-relaxed">
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

