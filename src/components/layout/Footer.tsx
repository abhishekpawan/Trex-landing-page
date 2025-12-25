'use client'

import { ShieldCheck, Download } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#0B0F1A] text-white py-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center mb-6">
              <Image 
                src="/logos/Trex-icon-text-logo-side-by-side.png" 
                alt="Trex Logo" 
                width={150} 
                height={70}
              />
            </div>
            <p className="text-white/60 max-w-xs mb-8 leading-relaxed">
              The privacy-first investment tracker for the modern conscious investor. No bank links, no leaks, no sharing.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs font-bold text-[#6FAF9E]">
              <ShieldCheck size={14} />
              Designed for the privacy-conscious
            </div>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-white/90 uppercase tracking-widest text-xs">Support</h5>
            <ul className="space-y-4 text-white/60 text-sm font-medium">
              <li><a href="#" className="hover:text-[#6FAF9E] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#6FAF9E] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#6FAF9E] transition-colors">How We Protect Your Data</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-white/90 uppercase tracking-widest text-xs">App</h5>
            <ul className="space-y-4 text-white/60 text-sm font-medium">
              <li><a href="#" className="hover:text-[#6FAF9E] transition-colors flex items-center gap-2">Android <Download size={12}/></a></li>
              <li><a href="#" className="hover:text-[#6FAF9E] transition-colors">Community</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/20 text-xs text-center md:text-left">
          <p>© 2024 Trex Wealth Systems. Private and Secure.</p>
          <div className="flex gap-6 font-medium">
            <span>Encrypted financial logs</span>
            <span>Manual portfolio manager</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
