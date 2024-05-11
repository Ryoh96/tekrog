'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

class AdCodeWithoutRouter extends React.Component {
  renderAds() {
    ;(window.adsbygoogle = window.adsbygoogle || []).push({})
  }

  componentDidMount() {
    this.renderAds()
  }

  componentDidUpdate(prevProps) {
    if (this.props.router.asPath !== prevProps.router.asPath) {
      this.renderAds()
    }
  }

  render() {
    const {
      slot,
      layout,
      style = { display: 'block' },
      format = 'auto',
      responsive = false,
    } = this.props

    return (
      <div className="container mx-auto text-center" aria-hidden={true}>
        <ins
          className="adsbygoogle"
          style={style}
          data-ad-client="ca-pub-5954645555619996"
          data-ad-slot={slot}
          data-ad-format={format}
          data-ad-layout={layout ?? undefined}
          data-full-width-responsive={responsive}
        ></ins>
        <script
          dangerouslySetInnerHTML={{
            __html: '(window.adsbygoogle = window.adsbygoogle || []).push({});',
          }}
        ></script>
      </div>
    )
  }
}

const GoogleAdsenseBlock = () => {
  const router = useRouter()
  return <AdCodeWithoutRouter router={router} />
}

export default GoogleAdsenseBlock
