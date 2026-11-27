import PlayBadge from '@/components/ui/PlayBadge'
import PreRegisterForm from '@/components/ui/PreRegisterForm'
import { PLAY_LIVE } from '@/lib/site'

// The call to action. Before release: the waitlist. On release day (PLAY_LIVE): the Google Play button, no waitlist.
export default function GetTrex({ source, size = 'lg', badge = true }: { source: 'hero' | 'cta' | 'navbar'; size?: 'md' | 'lg'; badge?: boolean }) {
  if (PLAY_LIVE) {
    return (
      <div className="flex flex-col gap-3">
        <PlayBadge width={200} />
        <p className="text-sm text-ink/60">Free for Android. Trex 2.0 is for India.</p>
      </div>
    )
  }
  return (
    <div>
      {badge && <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-ink/80 text-sm mb-5 border border-accent/20">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
        </span>
        <span className="font-medium">Trex 2.0 is coming to Google Play</span>
      </div>}
      <PreRegisterForm variant="inline" size={size} source={source} />
      <p className="text-sm text-ink/55 mt-3">We use your email only to tell you when Trex is out. We send one mail first, to confirm it is you.</p>
    </div>
  )
}
