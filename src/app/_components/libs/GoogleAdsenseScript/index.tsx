import Script from 'next/script'

const GoogleAdsenseScript = () => {
  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5954645555619996"
      crossOrigin="anonymous"
      strategy="lazyOnload"
    />
  )
}

export default GoogleAdsenseScript
