import { SP } from '@/types/BreakPoints'
import * as stylex from '@stylexjs/stylex'
import { ComponentPropsWithRef } from 'react'

type Props = ComponentPropsWithRef<'div'> & {
  children: React.ReactNode
  isNarrow?: boolean
}

const PageContainer = (props: Props) => {
  return (
    <div
      {...stylex.props(styles.div, props.isNarrow && styles.narrow)}
      {...props}
    />
  )
}

const PAGE_MAX_WIDTH = 1300
const MQ_SP: SP = 768

const styles = stylex.create({
  div: {
    width: `min(96%, ${PAGE_MAX_WIDTH}px)`,
    marginInline: 'auto',
    position: 'relative',
    [`@media (max-width: ${MQ_SP})px`]: {
      width: '98%',
    },
  },
  narrow: {
    width: 'min(96%, 968px)',
  },
})

export default PageContainer
