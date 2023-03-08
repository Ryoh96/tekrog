import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    gradient: {
      main: string
    }
    breakpoints: {
      sp: number
    }
    color: {
      category: Record<string, `#${string}`>
    }
  }
}
