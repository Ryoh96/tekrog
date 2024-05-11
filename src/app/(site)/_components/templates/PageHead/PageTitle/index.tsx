import * as stylex from '@stylexjs/stylex'
import { SP, XL } from '@/types/BreakPoints'
import { tokens } from '../../../../..//_styles/tokens.stylex'

const PageTitle = ({ title }: { title: string }) => {
  return <h1 {...stylex.props(styles.h1)}>{title}</h1>
}

const MQ_XL: XL = 1300
const MQ_SP: SP = 768

const rotate = stylex.keyframes({
  from: { [tokens.angle]: '0deg' },
  to: { [tokens.angle]: '359deg' },
})

const styles = stylex.create({
  h1: {
    background: `linear-gradient(${tokens.angle}, rgba(255, 90, 247, 1) 0%,rgba(75, 255, 245, 1) 100%)`,
    backgroundClip: 'text',
    color: 'rgba(0, 0, 0, 0)',
    textAlign: 'center',
    paddingInline: 10,
    fontSize: 40,
    fontWeight: 700,
    marginBottom: 24,
    lineHeight: 1.4,
    marginTop: 28,
    animationName: rotate,
    animationDuration: '10s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    [`@media (min-width: ${MQ_XL}px)`]: {
      fontSize: 48,
      marginBlock: '10px 36px',
    },
    [`@media (max-width: ${MQ_SP}px)`]: {
      fontSize: 26,
    },
  },
})

export default PageTitle
