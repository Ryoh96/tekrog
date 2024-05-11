import React, { ComponentPropsWithRef } from 'react'
import * as stylex from '@stylexjs/stylex'
import { shadow } from '../../../_styles/shadow.stylex'
import type { StyleXStyles } from '@stylexjs/stylex'
import { SP } from '@/types/BreakPoints'
import { pageColor } from '../../../_styles/color.stylex'

type Props = ComponentPropsWithRef<'div'> & {
  children: React.ReactNode
  styles?: StyleXStyles
}

const Base = (props: Props) => {
  return <div {...props} {...stylex.props(style.div, props.styles)} />  
}

const MQ_SP: SP = 768

const style = stylex.create({
  div: {
    overflowX: 'hidden',
    backgroundColor: pageColor.white,
    padding: '40px 32px',
    borderRadius: 10,
    flexGrow: 1,
    boxShadow: shadow.default,
    [`@media (max-width: ${MQ_SP}px)`]: {
      padding: '16px',
    },
  },
})

export default Base
