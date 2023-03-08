import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    gradient: {
      main: string
    }
    breakpoints: {
      sp: string
    }
    color: {
      category: Record<string, `#${string}`>
    }
  }
}
