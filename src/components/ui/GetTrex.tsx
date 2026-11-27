'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import PlayBadge from '@/components/ui/PlayBadge'
import { PLAY_LIVE } from '@/lib/site'

const BADGE_HEIGHT = 52

// The one call to action on the site: the Google Play and App Store buttons. The App Store button opens a "Coming soon" pop-up.
// Until the Play listing is live (PLAY_LIVE=false) the Google Play button opens the same pop-up; on release day set
// NEXT_PUBLIC_PLAY_LIVE=true and redeploy and it becomes the real link. When the App Store listing exists, put its link in
// lib/site.ts (APP_STORE_URL) and the pop-up goes away for that button.
export default function GetTrex({ align = 'start' }: { align?: 'start' | 'center' }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className={`flex flex-wrap items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`} id="get-trex-buttons">
        {PLAY_LIVE ? <PlayBadge height={BADGE_HEIGHT} /> : <ComingSoonButton label="Get Trex on Google Play" onOpen={() => setOpen(true)}>
          <Image src="/badge-google-play-button.png" alt="Get it on Google Play" width={Math.round((BADGE_HEIGHT * 1920) / 629)} height={BADGE_HEIGHT} className="block rounded-lg bg-white" style={{ height: BADGE_HEIGHT, width: 'auto' }} />
        </ComingSoonButton>}
        <ComingSoonButton label="Get Trex on the App Store" onOpen={() => setOpen(true)}>
          <Image src="/badge-app-store.svg" alt="Download on the App Store" width={Math.round((BADGE_HEIGHT * 119.66) / 40)} height={BADGE_HEIGHT} className="block" style={{ height: BADGE_HEIGHT, width: 'auto' }} unoptimized />
        </ComingSoonButton>
      </div>
      {open && <ComingSoonDialog onClose={() => setOpen(false)} />}
    </>
  )
}

function ComingSoonButton({ label, onOpen, children }: { label: string; onOpen: () => void; children: React.ReactNode }) {
  return (
    <button type="button" onClick={onOpen} aria-label={label} className="inline-block rounded-lg shadow-lg hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">
      {children}
    </button>
  )
}

function ComingSoonDialog({ onClose }: { onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev }
  }, [onClose])
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-page/80 backdrop-blur-sm" onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-labelledby="coming-soon-title" onClick={(e) => e.stopPropagation()} className="w-full max-w-sm rounded-3xl bg-raised border border-line p-8 text-center shadow-2xl">
        <h2 id="coming-soon-title" className="text-2xl font-bold tracking-tight text-ink mb-2">Coming soon</h2>
        <p className="text-ink/70 mb-6">Trex will be here shortly. Thank you for your patience.</p>
        <button ref={closeRef} type="button" onClick={onClose} className="rounded-xl bg-accent-strong px-6 py-3 font-bold text-white hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">
          OK
        </button>
      </div>
    </div>
  )
}
