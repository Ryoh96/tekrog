import 'styled-components'

import type { CategoryType } from '@/types/CategoryType'

declare module 'styled-components' {
  export interface DefaultTheme {
    gradient: {
      main: string
    }
    breakpoints: {
      sp: number
    }
    color: {
      category: Record<CategoryType, `#${string}`>
    }
  }
}
