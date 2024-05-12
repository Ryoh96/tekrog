import { DEFAULT_IMAGE } from '@/constants/strings'
import Image from 'next/image'
import React from 'react'
import * as stylex from '@stylexjs/stylex'
import { shadow } from '../../../_styles/shadow.stylex'
import DateTime from '../../molecules/DateTime'
import CategoryTags from '../CategoryTags'
import { SP } from '@/types/BreakPoints'
import { pageColor } from '../../../_styles/color.stylex'

const Card = ({
  imgUrl = DEFAULT_IMAGE,
  date,
  title,
  categories,
  description,
  style,
}: {
  imgUrl?: string
  date?: string
  title: string
  categories?: {
    name: string
    link?: string
  }[]
  description?: string
  style?: stylex.StyleXStyles
}) => {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <div {...stylex.props(styles.container)}>
        <figure {...stylex.props(styles.figure)}>
          <Image
            src={imgUrl}
            alt={title}
            fill
            style={{
              objectFit: 'contain',
              aspectRatio: 'auto 2000 / 1125',
            }}
            sizes="(max-width: 560px) 30vw 20vw"
            quality={40}
            priority
            {...stylex.props(styles.img)}
          />
        </figure>
        <h2 {...stylex.props(styles.title, style)}>{title}</h2>
        {description && (
          <p {...stylex.props(styles.description)}>{description}</p>
        )}
      </div>
      <div {...stylex.props(styles.meta)}>
        {/* {date && <DateTime>{date}</DateTime>} */}
        {categories && <CategoryTags categories={categories} />}
      </div>
    </div>
  )
}

const MQ_SP: SP = 768

const fade = stylex.keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
})

const styles = stylex.create({
  wrapper: {
    cursor: 'pointer',
    position: 'relative',
    boxShadow: shadow.near,
    transition: 'all 0.3s',
    zIndex: 1,
    display: 'grid',
    alignContent: 'space-between',
    gap: 10,
    padding: 10,
    backgroundColor: pageColor.white,
    borderRadius: 10,
    height: '100%',
    ':hover': {
      zIndex: 2,
      boxShadow: shadow.far,
      transform: 'scale(1.05)',
      ':not(#__unused__) img': {
        transition: 'transform 0.3s',
        transform: 'scale(1.1)',
      },
    },
  },
  container: {
    display: 'grid',
    gap: 10,
  },
  figure: {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  img: {
    animation: `${fade} 0.2s`,
    position: 'static !important',
  },
  title: {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 1.5,
    marginBlock: 10,
    [`@media (max-width: ${MQ_SP}px)`]: {
      fontSize: 14,
    },
  },
  description: {
    fontSize: 14,
    [`@media (max-width: ${MQ_SP}px)`]: {
      fontSize: 12,
    },
  },
  meta: {
    width: '100%',
    paddingInline: 10,
    gap: '14px, 8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 'auto',
  },
})

export default Card
