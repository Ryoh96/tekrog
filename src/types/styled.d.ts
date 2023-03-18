import 'styled-components'

import type { CategoryType } from '@/types/CategoryType'
import type { ShareType } from '@/types/ShareType'

declare module 'styled-components' {
  export interface DefaultTheme {
    gradient: {
      main: string
    }
    breakpoints: {
      xl: number
      sp: number
      sm: number
    }
    color: {
      category: Record<CategoryType, `#${string}`>
      share: Record<ShareType, `#${string}`>
      page: {
        main: `#${string}`
        accent: `#${string}`
      }
    }
    boxShadow: {
      near: string
      far: string
    }
  }
}
