import React from 'react'
import type { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as stylex from '@stylexjs/stylex'
import { shadow } from '../../../_styles/shadow.stylex'

const RoundedIconButton = ({
  icon,
  bgColor,
  content,
  name,
}: {
  icon?: IconDefinition
  bgColor: string
  content?: {
    text: string
    fontFamily: string
    fontWeight: number
  }
  name?: string
}) => {
  return (
    <div
      {...stylex.props(
        styles.wrapper,
        styles.bgColor(bgColor),
        name === 'line' && styles[name](bgColor),
      )}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {content && name === 'hatena' && (
        <span
          {...stylex.props(
            styles.hatena(content.fontFamily, content.fontWeight),
          )}
        >
          {content.text}
        </span>
      )}
    </div>
  )
}

const styles = stylex.create({
  wrapper: {
    display: 'grid',
    placeContent: 'center',
    height: 40,
    width: 40,
    cursor: 'pointer',
    transition: 'all 0.3s',
    zIndex: 1,
    position: 'relative',
    fontSize: 20,
    color: '#fff',
    borderRadius: '50%',
    overflow: 'hidden',
    boxShadow: shadow.near,
    ':hover': {
      transform: 'scale(1.05)',
      zIndex: 2,
      boxShadow: shadow.far,
    },
  },
  bgColor: (bgColor: string) => ({ backgroundColor: bgColor }),
  line: (bgColor: string) => ({
    ':not(#__unused__) svg': {
      color: bgColor,
      backgroundColor: '#fff',
      fontSize: 40,
    },
  }),
  hatena: (fontFamily: string, fontWeight: number) => ({
    fontFamily,
    fontWeight,
  }),
})

export default RoundedIconButton
