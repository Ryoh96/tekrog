import React, { ComponentPropsWithRef } from 'react'
import * as stylex from '@stylexjs/stylex'
import { SP } from '@/types/BreakPoints'

type Props = ComponentPropsWithRef<'div'> & {
  children: React.ReactNode
}

const SideArea = (props: Props) => {
  return (
    <div {...stylex.props(style.wrapper)}>
      <div {...props} {...stylex.props(style.container)} />
    </div>
  )
}

const MQ_SP: SP = 768
const SIDE_AREA_WIDTH = 324

const style = stylex.create({
  container: {
    display: 'grid',
    alignContent: 'start',
    gap: 26,
    height: '100%',
    width: '100%',
  },
  wrapper: {
    flex: `0 0 ${SIDE_AREA_WIDTH}px`,
    display: 'flex',
  },
})

export default SideArea
