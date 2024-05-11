import React, { ComponentPropsWithRef } from 'react'
import * as stylex from '@stylexjs/stylex'

type Props = ComponentPropsWithRef<'div'> & {
  children: React.ReactNode
}

const TwoColumnsContainer = (props: Props) => {
  return <div {...props} {...stylex.props(style.div)} />
}

const style = stylex.create({
  div: {
    display: 'flex',
    gap: '2.131147541%',
    marginBlock: 40,
    alignItems: 'stretch',
    '@media (max-width: 1300px)': {
      flexDirection: 'column',
      gap: 30,
    },
  },
})

export default TwoColumnsContainer
