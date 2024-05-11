import React from 'react'
import ShareIcons from './ShareIcons'
import * as stylex from '@stylexjs/stylex'
import { SP } from '@/types/BreakPoints'

const Share = ({
  title,
  url,
  style,
}: {
  title: string
  url: string
  style?: stylex.StyleXStyles
}) => {
  return (
    <div {...stylex.props(styles.wrapper, style)}>
      <p {...stylex.props(styles.p)}>シェア!</p>
      <ShareIcons title={title} url={url} />
    </div>
  )
}

const MQ_SP: SP = 768

const styles = stylex.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: 30,
    flexWrap: 'wrap',
    marginInline: 'auto',
  },
  p: {
    fontWeight: 'bold',
    [`@media (max-width: ${MQ_SP}px)`]: {
      fontSize: 14,
    },
  },
})

export default Share
