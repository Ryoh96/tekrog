// This ensures that the icon CSS is loaded immediately before attempting to render icons
import '@fortawesome/fontawesome-svg-core/styles.css'

import { ApolloProvider } from '@apollo/client'
import { config } from '@fortawesome/fontawesome-svg-core'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import client from '@/graphql/apollo/client'
import GlobalStyle from '@/styles/GlobalStyle'
import { theme } from '@/theme'
// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeProvider>
  )
}
