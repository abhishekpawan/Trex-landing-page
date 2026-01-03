'use client'

import { motion } from 'framer-motion'
import { Image as ImageIcon, Zap, BarChart3 } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Steps() {
  const steps = [
    { 
      num: "01", 
      title: "Add your assets", 
      desc: "Simply enter your stock quantity or FD details.",
      icon: <ImageIcon className="w-6 h-6" />
    },
    { 
      num: "02", 
      title: "Trex keeps everything updated",
      desc: "We automatically track market values and accrued interest so you can see your portfolio grow in one place.",
      icon: <Zap className="w-6 h-6" />
    },
    { 
      num: "03", 
      title: "Own your total net worth", 
      desc: "See your total financial standing in one secure, private view you truly own.",
      icon: <BarChart3 className="w-6 h-6" />
    }
  ]

  return (
    <section id="how-it-works" className="py-10 px-6 bg-[#0B0F1A] relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-white/5 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          tag="Process"
          title="Simple, Powerful, Private."
          subtitle="Three steps to total financial clarity without ever sharing your bank credentials."
        />

        <div className="space-y-12 relative">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 w-full">
                <div className="bg-[#1F2933]/30 p-8 md:p-12 rounded-[40px] border border-white/5 shadow-sm hover:border-[#6FAF9E]/20 transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">
                    <span className="text-9xl font-black text-white">{step.num}</span>
                  </div>
                  
                  <div className="w-14 h-14 bg-[#6FAF9E] rounded-2xl flex items-center justify-center text-[#0B0F1A] mb-6 shadow-lg shadow-[#6FAF9E]/20">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{step.title}</h3>
                  <p className="text-white/50 text-lg leading-relaxed">{step.desc}</p>
                </div>
              </div>

              <div className="hidden lg:flex w-16 h-16 bg-[#0B0F1A] border-4 border-[#1F2933] rounded-full items-center justify-center z-10">
                 <div className="w-3 h-3 bg-[#6FAF9E] rounded-full shadow-[0_0_10px_#6FAF9E]"></div>
              </div>

              <div className="hidden lg:block flex-1"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
