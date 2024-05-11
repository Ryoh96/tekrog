import { shadow } from '../../../_styles/shadow.stylex'
import * as stylex from '@stylexjs/stylex'
import type { StyleXStyles } from '@stylexjs/stylex'

export type TagProps = {
  color?: string
  bgColor: string
  style?: StyleXStyles
  children: React.ReactNode
  hoverable?: boolean
}

const Tag = ({
  color = '#fff',
  bgColor,
  style,
  children,
  hoverable,
}: TagProps) => {
  return (
    <div
      {...stylex.props(
        styles.tag,
        hoverable && styles.hovarable,
        styles.color(color),
        styles.backgroundColor(bgColor),
        style,
      )}
    >
      {children}
    </div>
  )
}

const styles = stylex.create({
  backgroundColor: (bgColor: string) => ({ backgroundColor: bgColor }),
  color: (color: string) => ({ color }),
  tag: {
    fontSize: 12,
    padding: 5,
    display: 'inline-flex',
    gap: 5,
    flexWrap: 'nowrap',
    borderRadius: 5,
    alignItems: 'center',
    transition: 'all 0.3s',
    zIndex: 1,
    position: 'relative',
    textShadow: '0 0 5px #00000058',
    boxShadow: shadow.near,
  },
  hovarable: {
    ':hover': {
      transform: 'scale(1.05)',
      zIndex: 2,
      boxShadow: shadow.far,
    },
  },
})

export default Tag
