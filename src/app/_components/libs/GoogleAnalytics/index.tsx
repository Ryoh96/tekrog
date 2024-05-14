'use client'

import { GA_GA4_ID, existsGaId, pageview } from '@/app/_libs/gtag'
import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { Suspense, useEffect } from 'react'

const GoogleAnalytics = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!existsGaId) return
    const url = pathname + searchParams.toString()
    pageview(url)
  }, [pathname, searchParams])

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_GA4_ID}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_GA4_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  )
}

export default function Analytics() {
  return (
    <>
      {GA_GA4_ID && (
        <Suspense>
          <GoogleAnalytics />
        </Suspense>
      )}
    </>
  )
}
