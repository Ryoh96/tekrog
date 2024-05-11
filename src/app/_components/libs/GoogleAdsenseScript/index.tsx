import Script from 'next/script'

const GoogleAdsenseScript = () => {
  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456"
      crossOrigin="anonymous"
      strategy="lazyOnload"
    />
  )
}

export default GoogleAdsenseScript
