// This ensures that the icon CSS is loaded immediately before attempting to render icons
import '@fortawesome/fontawesome-svg-core/styles.css'

import { ApolloProvider } from '@apollo/client'
import { config } from '@fortawesome/fontawesome-svg-core'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import client from '@/graphql/apollo/client'
import { GA_GA4_ID, GA_UA_ID, pageview } from '@/lib/gtag'
import GlobalStyle from '@/styles/GlobalStyle'
import { theme } from '@/theme'
// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  // useEffect(() => {
  //   const handleRouteChange = (url: string) => {
  //     pageview(url)
  //   }
  //   router.events.on('routeChangeComplete', handleRouteChange)
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //   }
  // }, [router.events])
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id${GA_GA4_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${GA_GA4_ID}');
            gtag('config', '${GA_UA_ID}');
          `,
        }}
      />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    </>
  )
}
