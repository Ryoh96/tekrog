import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import client from '@/graphql/apollo/client'
import GlobalStyle from '@/styles/GlobalStyle'
import { theme } from '@/theme'

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
