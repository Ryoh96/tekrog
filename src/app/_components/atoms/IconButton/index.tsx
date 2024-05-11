import { gradient } from '../../../_styles/gradient.stylex'
import { shadow } from '../../../_styles/shadow.stylex'
import * as stylex from '@stylexjs/stylex'

const IconButton = ({
  icon,
  style,
  handleClick,
}: {
  icon: React.ReactNode
  style?: stylex.StyleXStyles
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}) => {
  return (
    <button
      {...stylex.props(styles.button, style)}
      onClick={(e) => handleClick(e)}
    >
      {icon}
    </button>
  )
}

const styles = stylex.create({
  button: {
    display: 'grid',
    placeContent: 'center',
    background: gradient.main,
    height: 48,
    width: 44,
    cursor: 'pointer',
    transition: 'all 0.3s',
    zIndex: 1,
    position: 'relative',
    fontSize: 20,
    color: '#fff',
    boxShadow: shadow.near,
    ':hover': {
      transform: 'scale(1.05)',
      zIndex: 2,
      boxShadow: shadow.far,
    },
    ':not(__) > *': {
      fontSize: 20,
    },
  },
})

export default IconButton
