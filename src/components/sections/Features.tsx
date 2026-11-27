'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import S25UltraMockup from '@/components/ui/S25UltraMockup'

const rows = [
  {
    tag: 'Deposit insurance',
    title: 'See how much sits in each bank',
    body:
      'Deposit insurance (DICGC) covers up to ₹5 lakh per person per bank. Trex adds up your FDs bank by bank and shows a bar toward that limit, so you can see at a glance where you are over it.',
    points: ['One total for every bank', 'A bar that fills toward the ₹5 lakh limit', 'Add the next FD from the bank’s own page'],
    src: '/screens/bank.jpg',
    alt: 'A bank page in Trex showing its total, an Over the limit tag and a bar. Made-up data.',
  },
  {
    tag: 'Maturities',
    title: 'Keep track of every maturity',
    body:
      'Every FD from every bank, in one list by date. A reminder arrives before each one ends, and when it has, Trex asks one thing: renewed, or paid out?',
    points: ['All your maturities in one list', 'A reminder before each date', 'Renewed or paid out, in one tap'],
    src: '/screens/maturities.jpg',
    alt: 'The FDs ending soon screen in Trex, with matured FDs to answer and the next maturities by month. Made-up data.',
  },
  {
    tag: 'Interest and tax',
    title: 'Know what your FDs really earn',
    body:
      'See the interest your FDs have earned this year, and what tax it will bring. Pick your tax slab and Trex shows the estimate, the tax your banks already cut (TDS) and what is left to pay. An estimate, not tax advice.',
    points: ['Interest earned so far, and for the full year', 'Tax already cut by banks (TDS) and what is left', 'Advance tax dates, if they apply to you'],
    src: '/screens/tax-interest.jpg',
    alt: 'The Interest earned screen in Trex with an estimate of tax, TDS already deducted and what is left to pay. Made-up data.',
  },
]

export default function Features() {
  return (
    <section id="features" className="scroll-mt-16 py-16 px-6 bg-page">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          tag="Your FDs"
          title="Different banks. One clear view."
          subtitle="Each bank has its own app, its own dates and its own statements. Trex puts your FDs side by side."
        />

        <div className="space-y-20">
          {rows.map((row, i) => (
            <motion.div
              key={row.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}
            >
              <div>
                <span className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 block">{row.tag}</span>
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">{row.title}</h3>
                <p className="text-ink/75 text-lg leading-relaxed mb-6">{row.body}</p>
                <ul className="space-y-3">
                  {row.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-ink/85">
                      <Check size={20} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <S25UltraMockup src={row.src} alt={row.alt} float={false} />
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-xs text-ink/45 mt-12">Pictures are real screens from the app with made-up data.</p>
      </div>
    </section>
  )
}
