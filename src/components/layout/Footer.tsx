import Image from 'next/image'
import Link from 'next/link'
import { ShieldCheck } from 'lucide-react'

const links = [
  { href: '/help', label: 'Get your statement' },
  { href: '/privacypolicy', label: 'Privacy Policy' },
  { href: '/termsofservice', label: 'Terms of Service' },
  { href: '/delete-account', label: 'Delete your account' },
]

export default function Footer() {
  return (
    <footer className="bg-page text-white py-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <Image unoptimized priority src="/brand/trex-lockup-on-dark.svg" alt="Trex" width={128} height={44} className="h-11 w-auto" />
            </div>
            <p className="text-white/60 max-w-xl mb-8 leading-relaxed">
              Trex keeps every FD, and the rest of what you own, in one private place on your phone. No bank login, and we can’t see your portfolio.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs font-bold text-accent">
              <ShieldCheck size={14} />
              Your portfolio stays on your phone
            </div>
          </div>

          <div>
            <h3 className="font-bold md:pt-6 pt-0 mb-6 text-white/90 uppercase tracking-widest text-xs">Support</h3>
            <ul className="space-y-4 text-white/60 text-sm font-medium">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-xs text-center md:text-left">
          <p>© 2026 Novarex Studios. Trex is a product of Novarex Studios, India.</p>
        </div>
      </div>
    </footer>
  )
}
