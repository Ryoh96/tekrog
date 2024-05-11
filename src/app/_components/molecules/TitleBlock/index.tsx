import { shadow } from '../../../_styles/shadow.stylex'
import { gradient } from '../../../_styles/gradient.stylex'
import type { StyleXStyles } from '@stylexjs/stylex'
import * as stylex from '@stylexjs/stylex'
import { SP } from '@/types/BreakPoints'

const TitleBlock = ({
  title,
  icon,
  style,
}: {
  title: string
  icon?: React.ReactNode
  style?: StyleXStyles
}) => {
  return (
    <div {...stylex.props(styles.div, style)}>
      {icon}
      <p {...stylex.props(styles.p)}>{title}</p>
    </div>
  )
}

const MQ_SP: SP = 768

const styles = stylex.create({
  div: {
    fontSize: 20,
    background: gradient.main,
    color: '#fff',
    padding: '14px 20px',
    boxShadow: shadow.default,
    fontWeight: 700,
    display: 'grid',
    gridTemplateColumns: '20px 1fr',
    alignItems: 'center',
    gap: '0.5em',
    [`@media (max-width: ${MQ_SP})`]: {
      fontSize: 18,
      padding: '14px 15px',
    },
  },
  p: {
    marginTop: '0.1em',
  },
})

export default TitleBlock
