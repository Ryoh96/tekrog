import * as stylex from '@stylexjs/stylex'

export const PAGE_MAX_WIDTH = 1300

export const mq = stylex.defineVars({
  PAGE_MAX_WIDTH: `@media (min-width: ${PAGE_MAX_WIDTH}px)`,
})
