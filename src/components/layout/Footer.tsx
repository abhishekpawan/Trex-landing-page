'use client'

import { ShieldCheck, Download } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#0B0F1A] text-white py-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          {/* Brand */}
          <div className="">
            <div className="flex items-center mb-6">
              <Image
                src="/logos/Trex-icon-text-logo-side-by-side.png" 
                alt="Trex Logo"
                width={150}
                height={70}
                priority
              />
            </div>

            <p className="text-white/60 max-w-xl mb-8 leading-relaxed">
              TREX is a privacy-first investment tracker built for people who want
              clarity without surveillance. No bank links. No identity harvesting.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs font-bold text-[#6FAF9E]">
              <ShieldCheck size={14} />
              Designed for the privacy-conscious
            </div>
          </div>

          {/* Support */}
          <div>
            <h5 className="font-bold md:pt-6 pt-0 mb-6 text-white/90 uppercase tracking-widest text-xs">
              Support
            </h5>
            <ul className="space-y-4 text-white/60 text-sm font-medium">
              <li>
                <a
                  href="/privacypolicy"
                  className="hover:text-[#6FAF9E] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/termsofservice"
                  className="hover:text-[#6FAF9E] transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-xs text-center md:text-left">
          <p>
            © 2025 Novarex Studios. TREX is a product of Novarex Studios.
          </p>
        </div>
      </div>
    </footer>
  )
}
