import { SP } from '@/types/BreakPoints'
import * as stylex from '@stylexjs/stylex'

const SPOnly = ({ children }: { children: React.ReactNode }) => {
  return <div {...stylex.props(style.sp_only)}>{children}</div>
}

const MQ_SP: SP = 768

const style = stylex.create({
  sp_only: {
    [`@media (min-width: ${MQ_SP}px)`]: {
      display: 'none',
    },
  },
})

export default SPOnly
