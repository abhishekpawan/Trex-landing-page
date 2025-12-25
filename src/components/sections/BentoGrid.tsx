'use client'

import { motion } from 'framer-motion'
import { Zap, EyeOff, Calculator, BarChart3, LineChart, Coins, Building2, PieChart } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

export default function BentoGrid() {
  const cards = [
    {
      title: "Live Market Sync",
      content: "We fetch latest stock prices and mutual fund NAVs every minute. No more manual refreshing or spreadsheet updates.",
      icon: Zap,
      size: "md:col-span-2",
      variant: 'gradient1',
      gradient: 'from-[#6FAF9E] via-[#8FC5B8] to-[#A8D5C9]'
    },
    {
      title: "100% Privacy",
      content: "No Bank Linking. No PAN. No Aadhaar. Your sensitive financial data never leaves your device.",
      icon: EyeOff,
      size: "md:col-span-1",
      variant: 'gradient2',
      gradient: 'from-[#8FC5B8] via-[#A8D5C9] to-[#B8E0D5]'
    },
    {
      title: "Smart Calculation Engine",
      content: "Trex automates the math for you. It calculates accrued interest, maturity values, and real-time gains across every asset.",
      icon: Calculator,
      size: "md:col-span-1",
      variant: 'gradient3',
      gradient: 'from-[#7BB8A8] via-[#95C9BA] to-[#A8D5C9]'
    },
    {
      title: "Unified Dashboard",
      content: "Every asset in one unified view. Supports Stocks, Gold, FD, and Mutual Funds (SIP & One-time) for pro analytics.",
      icon: BarChart3,
      size: "md:col-span-2",
      variant: 'gradient4',
      gradient: 'from-[#6FAF9E] via-[#8FC5B8] to-[#B8E0D5]',
      showAssets: true
    }
  ]

  const assets = [
    { label: "Stocks", icon: LineChart },
    { label: "Gold", icon: Coins },
    { label: "FD", icon: Building2 },
    { label: "MF (SIP/One-time)", icon: PieChart }
  ]

  return (
    <section id="features" className="py-10 px-6 bg-[#0B0F1A]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          tag="Features"
          title="The Future of Privacy-First Wealth"
          subtitle="Everything you need to manage a multi-asset portfolio without surrendering your financial soul to data brokers."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`
                  ${card.size} p-8 rounded-[32px] border transition-all duration-500 relative overflow-hidden group
                  bg-gradient-to-r ${card.gradient}
                  border-[#8FC5B8]/30 shadow-2xl shadow-[#6FAF9E]/20
                  hover:shadow-[#8FC5B8]/30 hover:scale-[1.02]
                `}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A]/30 via-transparent to-transparent pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-[#0B0F1A]/25 backdrop-blur-md border border-[#0B0F1A]/30 shadow-lg">
                    <card.icon className="text-[#ffffff]" size={24} strokeWidth={2.5} />
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight mb-3 text-[#0B0F1A]">
                    {card.title}
                  </h3>

                  <p className="leading-relaxed mb-6 text-[#0B0F1A]">
                    {card.content}
                  </p>

                  {card.showAssets && (
                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[#0B0F1A]/20">
                      {assets.map((asset, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-[#0B0F1A]/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#0B0F1A]/35 text-[#ffffff] text-xs font-bold shadow-md hover:bg-[#0B0F1A]/35 transition-colors">
                          <asset.icon size={12} className="text-[#ffffff]" strokeWidth={2.5} />
                          {asset.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
