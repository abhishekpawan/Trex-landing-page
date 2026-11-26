import Image from 'next/image'
import { PLAY_URL } from '@/lib/site'

// The Google Play button. Shown only when PLAY_LIVE is true (see lib/site.ts); until release day nothing renders it.
export default function PlayBadge({ width = 180 }: { width?: number }) {
  return (
    <a
      href={PLAY_URL}
      className="inline-block rounded-lg bg-white shadow-lg hover:opacity-90 transition-opacity"
      aria-label="Get Trex on Google Play"
    >
      <Image src="/badge-google-play-button.png" alt="Get it on Google Play" width={width} height={Math.round((width * 629) / 1920)} className="h-auto" />
    </a>
  )
}
