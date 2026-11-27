'use client'

import { motion } from 'framer-motion'
import { PlusCircle, FileText, Zap } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const steps = [
  {
    num: '01',
    title: 'Add your FDs',
    desc: 'Add an FD in a few steps. The next one at the same bank is quicker. Add your RD, PPF, EPF and the rest the same way.',
    icon: <PlusCircle className="w-6 h-6" />,
  },
  {
    num: '02',
    title: 'Bring in funds and stocks',
    desc: 'Import a statement (CAS) and your mutual funds and shares come in together. Trex reads the PDF on your phone.',
    icon: <FileText className="w-6 h-6" />,
  },
  {
    num: '03',
    title: 'Open it and see',
    desc: 'Prices update when you open the app, straight from AMFI and BSE. Your net worth, what is coming up and what changed today, in under a second on a budget Android phone (measured on a POCO C75).',
    icon: <Zap className="w-6 h-6" />,
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 py-16 px-6 bg-page">
      <div className="max-w-6xl mx-auto">
        <SectionHeading tag="How it works" title="Three steps, no bank link" subtitle="Nothing to connect, nothing to sign in to. You can start in a minute." />
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-raised/30 p-8 rounded-3xl border border-white/5 relative overflow-hidden"
            >
              <span className="absolute top-3 right-5 text-7xl font-black text-white/[0.05]" aria-hidden="true">
                {s.num}
              </span>
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-page mb-5">{s.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-ink/70 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
