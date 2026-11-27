import PlayBadge from '@/components/ui/PlayBadge'
import PreRegisterForm from '@/components/ui/PreRegisterForm'
import { PLAY_LIVE } from '@/lib/site'

// The one call to action on the site. The page copy reads as live. Until the Play listing is up this shows an email box that sends
// the Google Play link; on release day (PLAY_LIVE=true) it shows the Google Play button instead. Nothing else on the site changes.
export default function GetTrex({ source, size = 'lg' }: { source: 'hero' | 'cta' | 'navbar'; size?: 'md' | 'lg'; badge?: boolean }) {
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
      <PreRegisterForm variant="inline" size={size} source={source} />
      <p className="text-sm text-ink/55 mt-3">Free for Android in India. We email you once to confirm, then the Google Play link. Nothing else.</p>
    </div>
  )
}
