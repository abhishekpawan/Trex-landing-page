'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { FAQ_ITEMS } from '@/lib/faq'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const faqItems = FAQ_ITEMS
  const structured = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((i) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })),
  }
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="scroll-mt-16 py-10 px-6 bg-page">
      <div className="max-w-4xl mx-auto">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structured) }} />
        <SectionHeading 
          title="Questions people ask"
          subtitle="Short answers about your FDs, your privacy and how Trex works."
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

