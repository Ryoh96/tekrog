import { useRouter } from 'next/router'
import { useEffect } from 'react'

type GoogleAdsenseProps = {
  slot: string
  style?: React.CSSProperties
  format?: string
  responsive?: string
  layout?: string
}

const GoogleAdsense = ({
  slot,
  style = { display: 'block' },
  format = "auto",
  responsive = 'false',
  layout
}: GoogleAdsenseProps) => {
  const { asPath } = useRouter()

  useEffect(() => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {}
      )
    } catch (error) {
      // Pass
    }
  }, [asPath])

  return (
    <div>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-5954645555619996"
        data-ad-slot={slot}
        data-ad-format={format}
        data-ad-layout={layout ?? undefined}
        data-full-width-responsive={responsive}
      ></ins>
    </div>
  )
}

export default GoogleAdsense
