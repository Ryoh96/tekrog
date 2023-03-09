import 'styled-components'

import type { CategoryType } from '@/types/CategoryType'
import type { ShareType } from '@/types/ShareType'

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
      share: Record<ShareType, `#${string}`>
    }
  }
}
