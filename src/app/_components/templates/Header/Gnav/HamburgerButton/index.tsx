import ScreenReaderOnly from '@/app/_components/utils/ScreenReaderOnly'
import * as stylex from '@stylexjs/stylex'

const HamburgerButton = ({
  onClick,
  isOpen = false,
}: {
  onClick: () => void
  isOpen?: boolean
}) => {
  return (
    <button
      onClick={onClick}
      aria-label="メニュー"
      aria-expanded={isOpen}
      aria-controls="hamburger-menu"
      {...stylex.props(styles.button)}
    >
      <ScreenReaderOnly>メニュー</ScreenReaderOnly>
      <span
        {...stylex.props(
          styles.bar,
          styles.barTop,
          isOpen && styles.isOpenBarTop,
        )}
      />
      <span {...stylex.props(styles.bar, isOpen && styles.isOpenBar)} />
      <span
        {...stylex.props(
          styles.bar,
          styles.barBottom,
          isOpen && styles.isOpenBarBottom,
        )}
      />
    </button>
  )
}

const styles = stylex.create({
  button: {
    background: 'none',
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    width: 42,
    height: 42,
    position: 'relative',
    zIndex: 200,
    display: 'grid',
    placeItems: 'center',
  },
  bar: {
    gridArea: '1 / -1',
    width: 32,
    height: 1,
    display: 'block',
    backgroundColor: '#fff',
    zIndex: 1000,
    transition: '0.3s ease',
  },
  isOpenBar: {
    transform: 'scale(0)',
  },
  barTop: {
    transform: 'translateY(-10px)',
  },
  isOpenBarTop: {
    transform: 'rotate(-135deg)',
  },
  barBottom: {
    transform: 'translateY(10px)',
  },
  isOpenBarBottom: {
    transform: 'rotate(135deg)',
  },
})

export default HamburgerButton
