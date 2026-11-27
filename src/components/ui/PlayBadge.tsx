import Image from 'next/image'
import { PLAY_URL } from '@/lib/site'

// The Google Play button. A link when the Play listing is live (PLAY_LIVE, see lib/site.ts); GetTrex swaps it for the pop-up before that.
export default function PlayBadge({ height = 52 }: { height?: number }) {
  return (
    <a
      href={PLAY_URL}
      className="inline-block rounded-lg bg-white shadow-lg hover:opacity-90 transition-opacity"
      aria-label="Get Trex on Google Play"
    >
      <Image
        src="/badge-google-play-button.png"
        alt="Get it on Google Play"
        width={Math.round((height * 1920) / 629)}
        height={height}
        className="block"
        style={{ height, width: 'auto' }}
      />
    </a>
  )
}
