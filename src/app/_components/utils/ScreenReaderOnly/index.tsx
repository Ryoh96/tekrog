import * as stylex from '@stylexjs/stylex'

const ScreenReaderOnly = ({ children }: { children: React.ReactNode }) => {
  return <div {...stylex.props(style.screenOnly)}>{children}</div>
}

const style = stylex.create({
  screenOnly: {
    border: 0,
    clip: 'rect(0, 0, 0, 0)',
    height: 1,
    width: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
  },
})

export default ScreenReaderOnly
