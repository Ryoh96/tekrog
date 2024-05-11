import { gradient } from '../../../../_styles/gradient.stylex'
import { pageColor } from '../../../../_styles/color.stylex'
import * as stylex from '@stylexjs/stylex'
import { shadow } from '../../../../_styles/shadow.stylex'
import { SP } from '@/types/BreakPoints'

const NumericPagerItem = ({
  children,
  isCurrent,
}: {
  children: React.ReactNode
  isCurrent?: boolean
}) => {
  return (
    <div {...stylex.props(styles.div, isCurrent && styles.current)}>
      {children}
    </div>
  )
}

const MQ_SP: SP = 768

const styles = stylex.create({
  div: {
    display: 'grid',
    placeContent: 'center',
    width: 44,
    height: 44,
    color: pageColor.main,
    background: pageColor.white,
    cursor: 'pointer',
    transition: 'all 0.3s',
    zIndex: 1,
    border: '1px solid currentColor',
    boxShadow: shadow.near,
    ':hover': {
      transform: 'scale(1.05)',
      zIndex: 2,
      boxShadow: shadow.far,
    },
    [`@media (max-width: ${MQ_SP}px)`]: {
      width: 33,
      height: 33,
    },
  },
  current: {
    color: '#fff',
    background: gradient.main,
  },
})

export default NumericPagerItem
