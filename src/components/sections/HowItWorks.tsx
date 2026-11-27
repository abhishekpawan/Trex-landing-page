'use client'

import { motion } from 'framer-motion'
import { PlusCircle, FileText, Zap } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const steps = [
  {
    num: '01',
    title: 'Add your FDs',
    desc: 'Type in an FD from any bank. The next one at the same bank takes a few taps.',
    icon: <PlusCircle className="w-6 h-6" />,
  },
  {
    num: '02',
    title: 'Add the rest',
    desc: 'Bring in your mutual funds and stocks from a statement. Add your PPF, EPF, gold and more by hand.',
    icon: <FileText className="w-6 h-6" />,
  },
  {
    num: '03',
    title: 'See the whole picture',
    desc: 'Open Trex for your net worth, what matures next and what changed today. It opens fast, even on a budget phone.',
    icon: <Zap className="w-6 h-6" />,
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 py-16 px-6 bg-page">
      <div className="max-w-6xl mx-auto">
        <SectionHeading tag="How it works" title="Simple to start" subtitle="No account and no bank login. Add your first FD and you are in." />
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
