'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, XCircle, Database, Calculator, Timer, Shield } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

export default function AudienceAudit() {
  const forYou = [
    { 
      text: "You want a single net-worth view across stocks, FDs, gold, and mutual funds",
      icon: <Database size={18} />
    },
    { 
      text: "You enter investments once and let the app handle returns, interest, and maturity math",
      icon: <Calculator size={18} />
    },
    { 
      text: "You expect your portfolio to stay accurate as prices and time change",
      icon: <Timer size={18} />
    },
    { 
      text: "You want financial clarity without linking banks or accounts",
      icon: <Shield size={18} />
    }
  ]

  const notForYou = [
    "You want automatic bank, broker, or demat syncing",
    "You expect tips, recommendations, or buy/sell signals",
    "You want social feeds, rankings, or portfolio comparisons",
    "You're okay trading privacy for convenience"
  ]

  return (
    <section className="py-10 px-6 bg-[#0B0F1A]">
      <div className="max-w-5xl mx-auto">
        <SectionHeading 
          tag="Transparency"
          title="Is Trex right for you?"
          subtitle="Trex is built with a specific philosophy. We aren't for everyone, and we're proud of that."
        />
        
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* For You */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-[40px] bg-[#1F2933]/30 border border-[#6FAF9E]/20 shadow-xl shadow-[#6FAF9E]/5 h-full"
          >
            <h3 className="text-[#6FAF9E] font-bold text-2xl mb-8 flex items-center gap-3">
              <CheckCircle2 size={24} /> Trex is for you if:
            </h3>
            <ul className="space-y-6">
              {forYou.map((item, i) => (
                <li key={i} className="flex gap-4 text-white/90 leading-relaxed font-medium">
                  <span className="text-[#6FAF9E] mt-1 shrink-0">
                    {item.icon}
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not For You */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-[40px] bg-[#1F2933]/20 border border-white/5 h-full"
          >
            <h3 className="text-white/60 font-bold text-2xl mb-8 flex items-center gap-3">
              <XCircle size={24} /> Trex is not for you if:
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item, i) => (
                <li key={i} className="flex gap-4 text-[#F1F5F9]/40 text-sm leading-relaxed italic">
                  <span className="mt-1 shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Philosophical Punchline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-[#6FAF9E] font-bold text-xl md:text-2xl tracking-tight opacity-90">
            &quot;Trex doesn&apos;t make decisions for you. It makes your decisions clearer.&quot;
          </p>
        </motion.div>
      </div>
    </section>
  )
}
