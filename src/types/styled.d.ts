import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    gradient: {
      main: string
      dark: string
    }
    breakpoints: {
      xl: number
      sp: number
      sm: number
    }
    color: {
      category: Record<string, string>
      share: Record<string, string>
      page: Record<string, string>
    }
    boxShadow: {
      near: string
      far: string
    }
  }
}
