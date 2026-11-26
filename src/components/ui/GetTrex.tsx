import PlayBadge from '@/components/ui/PlayBadge'
import PreRegisterForm from '@/components/ui/PreRegisterForm'
import { PLAY_LIVE } from '@/lib/site'

// The call to action. Before release: the waitlist. On release day (PLAY_LIVE): the Google Play button, no waitlist.
export default function GetTrex({ source, size = 'lg', badge = true }: { source: 'hero' | 'cta' | 'navbar'; size?: 'md' | 'lg'; badge?: boolean }) {
  if (PLAY_LIVE) {
    return (
      <div className="flex flex-col gap-3">
        <PlayBadge width={200} />
        <p className="text-sm text-[#F1F5F9]/60">Free for Android. Trex 2.0 is for India.</p>
      </div>
    )
  }
  return (
    <div>
      {badge && <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#6FAF9E]/10 rounded-full text-[#F1F5F9]/80 text-sm mb-5 border border-[#6FAF9E]/20">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6FAF9E] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6FAF9E]"></span>
        </span>
        <span className="font-medium">Trex 2.0 is coming to Google Play</span>
      </div>}
      <PreRegisterForm variant="inline" size={size} source={source} />
      <p className="text-sm text-[#F1F5F9]/55 mt-3">We use your email only to tell you when Trex is out.</p>
    </div>
  )
}
