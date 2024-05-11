import React, { ComponentPropsWithRef } from 'react'
import * as stylex from '@stylexjs/stylex'
import { shadow } from '../../../../../_styles/shadow.stylex'
import Base from '@/app/_components/atoms/Base'
import { SP } from '@/types/BreakPoints'

type Props = ComponentPropsWithRef<'div'> & {
  children: React.ReactNode
}

const MainArea = (props: Props) => {
  return <Base {...props} {...stylex.props(style.div)} styles={style.div} />
}

const MQ_SP: SP = 768

const style = stylex.create({
  div: {
    flex: '1 1 auto',
  },
})

export default MainArea
