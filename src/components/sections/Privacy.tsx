'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Smartphone, KeyRound, Globe } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

// Every line here rests on a row of app/docs/marketing/claims.md and on docs/product/privacy-model.md ("What leaves the phone").
const groups = [
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Stays on your phone',
    lead: 'Your portfolio lives in an encrypted database on your phone. We can’t see it.',
    items: [
      'Your holdings, amounts and net worth. Nobody at Trex can see what you own or how much it is worth, and with backup on they travel only inside the encrypted copy.',
      'Your statements. A statement PDF is read on your phone and is not uploaded.',
      'Your tax slab and what you tell Trex about tax. With backup on, they travel only inside the encrypted copy.',
      'No bank link. Trex never asks for your PAN, Aadhaar, phone number or name, and shows no ads. A statement’s password is often your PAN: you type it on your phone to open the file, and it stays there unless you ask Trex to remember it.',
    ],
  },
  {
    icon: <KeyRound className="w-6 h-6" />,
    title: 'Leaves only when you ask',
    lead: 'Backup is your choice. Trex works fully without it.',
    items: [
      'Backup. Sign in with Google and Trex encrypts your portfolio on your phone, with a key only you hold, then uploads that copy. We store only the encrypted copy and can’t read it.',
      'Your recovery key restores it on any phone. If your phone has a screen lock, Google also keeps a copy of the key in its own end-to-end encrypted key backup.',
      'Feedback you send, and any file you export or share.',
      'Buying Plus. Google Play takes the payment and we never see a card. RevenueCat, which tracks purchases, sees a random ID and what you bought.',
      'The optional big-move alert, if you switch it on. Google’s notification service (Firebase Cloud Messaging) sees that your phone subscribed, nothing about what you hold. The move is worked out on your phone.',
    ],
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Happens by itself',
    lead: 'Small things, none of them about what you hold.',
    items: [
      'Prices. Your phone downloads the same public price files everyone gets, straight from AMFI (funds) and BSE (stocks). They see an internet address and a time.',
      'A small settings file from our server, at most once a day: price sources and limits, the same for everyone.',
      'Anonymous usage stats, sent to PostHog (EU), on by default, with one tap to turn them off. A random ID made on your phone, the names of screens and buttons, a rough size of your portfolio (1–5, 6–20 or 21+ holdings), the app version and your phone model. Never amounts, names or banks.',
      'Error reports when something fails: an error code, the app version, the phone model and the random install ID.',
    ],
  },
]

export default function Privacy() {
  return (
    <section id="privacy" className="scroll-mt-16 py-16 px-6 bg-[#0B0F1A]">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          tag="Privacy"
          title="We can’t see your portfolio"
          subtitle="Your phone works everything out. Here is what stays on it and what doesn’t. The privacy policy has the full list, and the app’s “What leaves your phone” screen says the same."
        />

        <div className="grid lg:grid-cols-3 gap-6">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#1F2933]/30 border border-white/10 rounded-3xl p-7"
            >
              <div className="w-12 h-12 bg-[#6FAF9E] rounded-xl flex items-center justify-center text-[#0B0F1A] mb-5">{g.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{g.title}</h3>
              <p className="text-[#F1F5F9]/70 mb-5 leading-relaxed">{g.lead}</p>
              <ul className="space-y-3 text-[#F1F5F9]/80 text-[15px] leading-relaxed list-disc pl-5 marker:text-[#6FAF9E]">
                {g.items.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 text-[#F1F5F9]/80 leading-relaxed">
          <p className="font-semibold text-white mb-1">The trade-off, plainly</p>
          <p>
            If you lose your phone and every copy of your recovery key, nobody can open your backup, and that includes us. We will never add
            a way for us to. You can also use Trex with no backup at all. For the full detail, read the{' '}
            <Link href="/privacypolicy" className="text-[#6FAF9E] underline underline-offset-4 hover:text-[#88c5b6]">
              privacy policy
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
