import * as stylex from '@stylexjs/stylex'
import { ComponentPropsWithRef } from 'react'

type Props = ComponentPropsWithRef<'div'> & {
  children: React.ReactNode
}

const PageWrapper = (props: Props) => {
  return <div {...stylex.props(styles.div)} {...props} />
}

const styles = stylex.create({
  div: {
    display: 'flex',
    flexDirection: 'column',
    height: '100svh',
  },
})

export default PageWrapper
