'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

// Prices are the Google Play prices (F11 Play side, PLAN.md section 4, 2026-11-15). India only.
const plans = [
  {
    name: 'Free',
    price: '₹0',
    note: 'Always free',
    items: [
      'Unlimited holdings, every kind',
      'Statement import, returns per year (XIRR) and a net-worth chart',
      'FD insurance limit, maturities, interest and tax view',
      'Backup, and export to Excel',
      'Dark mode, hide amounts, app lock with your phone’s lock',
      'No ads',
    ],
  },
  {
    name: 'Plus',
    price: '₹130 a month',
    note: 'or ₹1,000 a year, with a 1-week free trial for new subscribers',
    highlight: true,
    items: [
      'Family portfolios: one for each person, with their own tax slab and insurance limit',
      'Five more colour themes and three more app icons',
      'Everything in Free',
    ],
  },
  {
    name: 'Founder',
    price: '₹3,000 once',
    note: 'one payment, no renewal, while it is offered',
    items: ['Everything in Plus', 'Paid once instead of every month or year'],
  },
]

export default function Plans() {
  return (
    <section id="plans" className="scroll-mt-16 py-16 px-6 bg-page">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          tag="Free and Plus"
          title="Free to use. Plus is for families."
          subtitle="Tracking your money is free. Plus adds family portfolios, more themes and more icons."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-3xl p-7 border ${p.highlight ? 'border-accent/60 bg-accent/5' : 'border-white/10 bg-raised/30'}`}
            >
              <h3 className="text-lg font-bold text-accent mb-2">{p.name}</h3>
              <p className="text-3xl font-bold text-white tracking-tight">{p.price}</p>
              <p className="text-sm text-ink/60 mb-6 min-h-[2.5rem]">{p.note}</p>
              <ul className="space-y-3">
                {p.items.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-ink/85 text-[15px] leading-relaxed">
                    <Check size={18} className="text-accent mt-1 flex-shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-sm text-ink/55 mt-8 max-w-2xl mx-auto leading-relaxed">
          Plus is sold in India only, through Google Play, at the prices Google Play shows. A subscription renews until you cancel it in
          Google Play. If Plus ends, nothing is deleted and export stays free.
        </p>
      </div>
    </section>
  )
}
