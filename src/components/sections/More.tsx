'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'
import S25UltraMockup from '@/components/ui/S25UltraMockup'

const kinds = [
  'Fixed deposits (FD)',
  'Recurring deposits (RD)',
  'PPF',
  'EPF',
  'NPS',
  'Gold',
  'Post Office schemes (NSC, KVP, SCSS, MIS)',
  'Bonds and NCDs',
  'Property',
  'Cash and savings',
  'Mutual funds and SIPs',
  'Stocks and ETFs',
  'Anything else, as Other',
]

export default function More() {
  return (
    <section id="more" className="scroll-mt-16 py-16 px-6 bg-page">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <SectionHeading compact centered={false} tag="Everything you own" title="Your whole net worth, in one number" />
          <p className="text-ink/75 text-lg leading-relaxed mb-6">
            Add your RD, PPF, EPF, NPS, gold, Post Office savings, bonds, property and cash, each with its own short form. Trex does the
            sums, so you see what you own and what it is worth.
          </p>
          <ul className="flex flex-wrap gap-2 mb-8">
            {kinds.map((k) => (
              <li key={k} className="px-3 py-1.5 rounded-full text-sm bg-white/5 border border-white/10 text-ink/85">
                {k}
              </li>
            ))}
          </ul>
          <h3 className="text-2xl font-bold text-white mb-3">Funds and stocks in one go</h3>
          <p className="text-ink/75 leading-relaxed mb-4">
            Get your statement from CAMS, MF Central or CDSL and open it in Trex. Your mutual funds and shares come in from
            these statements, and a detailed statement also brings their past purchases and SIPs. You get your returns per year (XIRR) and a
            net-worth chart, and the file stays on your phone.
          </p>
          <p className="text-ink/75 leading-relaxed">
            Not sure how to get your statement?{' '}
            <Link href="/help" className="text-accent underline underline-offset-4 hover:text-accent/80">
              See the step-by-step guide
            </Link>
            .
          </p>
        </motion.div>
        <div>
          <S25UltraMockup src="/screens/add-grid.jpg" alt="The Add a holding screen in Trex, with a card for each kind of holding." float={false} />
        </div>
      </div>
    </section>
  )
}
