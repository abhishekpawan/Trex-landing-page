'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import S25UltraMockup from '@/components/ui/S25UltraMockup'

const rows = [
  {
    tag: 'Insurance limit',
    title: 'Every bank, against the ₹5 lakh limit',
    body:
      'Banks insure your deposits up to ₹5 lakh per person per bank (DICGC). Trex adds up your FDs bank by bank and draws a bar toward that limit, so you can see at a glance when one bank holds more than it covers. Adding another FD at the same bank is quicker, straight from its page.',
    points: ['A total for each bank, and for all your deposits', 'A bar that fills toward the ₹5 lakh limit', 'Add another FD from the bank’s own page'],
    src: '/screens/bank.jpg',
    height: 700,
    alt: 'A bank page in Trex showing its total, an Over the limit tag and a bar. Made-up data.',
  },
  {
    tag: 'Maturities',
    title: 'See which FDs end, month by month',
    body:
      'One list of FDs ending soon, across all your banks. When one has matured, Trex asks a single question: renewed, or paid out? Reminders before the date are set on your phone, and they show no amount on a locked screen unless you turn that on (on a phone with a screen lock).',
    points: ['Maturities from every bank in one list', 'Renewed or paid out: one tap to answer', 'A reminder a week before and on the day'],
    src: '/screens/maturities.jpg',
    height: 1090,
    alt: 'The FDs ending soon screen in Trex, with matured FDs to answer and the next maturities by month. Made-up data.',
  },
  {
    tag: 'Interest and tax',
    title: 'What your FDs earned, and the tax on it',
    body:
      'See the interest your FDs have earned this financial year (1 April to 31 March). Tell Trex your tax slab and it estimates the tax on that interest, the tax your banks have already deducted (TDS) and what is left to pay with your return. Your slab stays on your phone, and with backup on it travels only inside the encrypted copy. It is an estimate, not tax advice.',
    points: ['Interest earned so far, and for the full year', 'Estimated tax, TDS already deducted, and what is left', 'Advance tax dates, if any apply to you'],
    src: '/screens/tax-interest.jpg',
    height: 1090,
    alt: 'The Interest earned screen in Trex with an estimate of tax, TDS already deducted and what is left to pay. Made-up data.',
  },
]

export default function Features() {
  return (
    <section id="features" className="scroll-mt-16 py-16 px-6 bg-[#0B0F1A]">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          tag="FDs first"
          title="What a broker app does not show"
          subtitle="A broker app shows your funds and stocks well. Trex starts with the rest: every FD across all your banks, with the numbers that matter for them."
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
                <span className="text-[#6FAF9E] font-bold text-xs uppercase tracking-[0.3em] mb-4 block">{row.tag}</span>
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">{row.title}</h3>
                <p className="text-[#F1F5F9]/75 text-lg leading-relaxed mb-6">{row.body}</p>
                <ul className="space-y-3">
                  {row.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-[#F1F5F9]/85">
                      <Check size={20} className="text-[#6FAF9E] mt-0.5 flex-shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <S25UltraMockup src={row.src} alt={row.alt} height={row.height} float={false} />
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-xs text-[#F1F5F9]/45 mt-12">Pictures are real screens from the app with made-up data.</p>
      </div>
    </section>
  )
}
