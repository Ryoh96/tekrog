import * as stylex from '@stylexjs/stylex'

const Main = ({ children }: { children: React.ReactNode }) => {
  return <div {...stylex.props(styles.div)}>{children}</div>
}

const styles = stylex.create({
  div: {
    flexGrow: 1,
  },
})

export default Main
