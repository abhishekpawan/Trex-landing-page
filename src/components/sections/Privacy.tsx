'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Smartphone, KeyRound, Globe } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

// Every line here rests on a row of app/docs/marketing/claims.md and on docs/product/privacy-model.md ("What leaves the phone").
// The page keeps it short and plain; the privacy policy has the full list.
const groups = [
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Stays on your phone',
    lead: 'What you add lives on your phone, in an encrypted database.',
    items: [
      'Your holdings, amounts and net worth. Nobody at Trex can see them.',
      'Your statements. They are read on your phone and never uploaded.',
      'No bank login, and Trex never asks for your PAN, Aadhaar or phone number.',
    ],
  },
  {
    icon: <KeyRound className="w-6 h-6" />,
    title: 'Leaves only if you choose',
    lead: 'Backup is optional, and Trex works fully without it.',
    items: [
      'A backup is encrypted on your phone with a key only you hold, so we cannot read it. It needs a Google sign-in, so our server keeps your email address, never your name.',
      'Feedback you send, a file you export, and the big-move alert if you switch it on. For that alert, Google’s notification service sees that your phone subscribed, nothing about what you own.',
      'Buying Plus goes through Google Play and our purchase service (RevenueCat). They see the plan, never your portfolio. We never see your card.',
    ],
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Small things that happen by themselves',
    lead: 'None of them is about what you own.',
    items: [
      'Prices come straight from AMFI and BSE, the same files everyone gets.',
      'Anonymous usage stats, with one tap to turn them off. They never carry amounts, banks or names.',
      'Error reports when something breaks, with no details of your portfolio.',
    ],
  },
]

export default function Privacy() {
  return (
    <section id="privacy" className="scroll-mt-16 py-16 px-6 bg-page">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          tag="Privacy"
          title="Your money stays your business"
          subtitle="Trex keeps your portfolio on your phone. We can’t see what you own, and there is no bank login to hand over."
        />

        <div className="grid lg:grid-cols-3 gap-6">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-raised/30 border border-white/10 rounded-3xl p-7"
            >
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-page mb-5">{g.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{g.title}</h3>
              <p className="text-ink/70 mb-5 leading-relaxed">{g.lead}</p>
              <ul className="space-y-3 text-ink/80 text-[15px] leading-relaxed list-disc pl-5 marker:text-accent">
                {g.items.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 text-ink/80 leading-relaxed">
          <p className="font-semibold text-white mb-1">One honest note</p>
          <p>
            If you lose your phone and every copy of your recovery key, nobody can open your backup, and that includes us. That is the
            price of a backup we cannot read. Want every detail? Read the{' '}
            <Link href="/privacypolicy" className="text-accent underline underline-offset-4 hover:text-accent/80">
              privacy policy
            </Link>
            , or the “What leaves your phone” screen in the app.
          </p>
        </div>
      </div>
    </section>
  )
}
