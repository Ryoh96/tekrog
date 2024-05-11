import { shareListToIcon } from '@/constants/share'
import React from 'react'
import RoundedIconButton from '../../../atoms/RoundedIconButton'
import * as stylex from '@stylexjs/stylex'

const ShareIcons = ({ url, title }: { url: string; title: string }) => {
  return (
    <div {...stylex.props(styles.wrapper)}>
      {shareListToIcon.map((share) => (
        <a
          href={share.href(url, title)}
          key={share.name}
          target="_blank"
          rel="nofollow noopener"
        >
          <RoundedIconButton
            icon={share.icon}
            bgColor={share.color}
            content={share.content}
            name={share.name}
          />
        </a>
      ))}
    </div>
  )
}

const styles = stylex.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 16,
  },
})

export default ShareIcons
