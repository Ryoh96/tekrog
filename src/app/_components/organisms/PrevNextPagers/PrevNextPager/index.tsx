import { DEFAULT_IMAGE } from '@/constants/strings'
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import * as stylex from '@stylexjs/stylex'
import { SP } from '@/types/BreakPoints'
import { shadow } from '../../../../_styles/shadow.stylex'
import { pageColor } from '../../../../_styles/color.stylex'

const PrevNextPager = ({
  type,
  imgUrl = DEFAULT_IMAGE,
  title,
}: {
  type: 'prev' | 'next'
  imgUrl?: string
  title: string
}) => {
  return (
    <div
      {...stylex.props(styles.wrapper, type === 'next' && styles.wrapperNext)}
    >
      <div {...stylex.props(styles.icon, type === 'next' && styles.iconNext)}>
        <FontAwesomeIcon icon={faCircleChevronLeft} />
      </div>
      <figure {...stylex.props(styles.figure)}>
        <Image
          src={imgUrl}
          alt=""
          fill
          style={{
            objectFit: 'cover',
          }}
          sizes="15vw"
          quality={50}
          {...stylex.props(styles.img)}
        />
      </figure>
      <p {...stylex.props(styles.title)}>{title}</p>
      {type === 'prev' && (
        <span {...stylex.props(styles.wrapperAfter, styles.wrapperAfterPrev)}>
          Prev
        </span>
      )}
      {type === 'next' && (
        <span {...stylex.props(styles.wrapperAfter, styles.wrapperAfterNext)}>
          Next
        </span>
      )}
    </div>
  )
}

const MQ_SP: SP = 768

const styles = stylex.create({
  title: {
    flex: '1 1 auto',
    zIndex: 2,
    position: 'relative',
    fontWeight: 'bold',
    [`@media (max-width: ${MQ_SP}px)`]: {
      fontSize: 14,
    },
  },
  figure: {
    position: 'relative',
    minHeight: 80,
    flex: '0 0 120px',
    zIndex: 2,
  },
  img: {
    position: 'static',
  },
  icon: {
    flex: '0 0 auto',
    textAlign: 'center',
    zIndex: 2,
    ':not(#__unused__) svg': {
      fontSize: 40,
      color: '#555',
    },
  },
  iconNext: {
    transform: 'rotate(180deg)',
  },
  wrapper: {
    display: 'flex',
    gap: '4.2%',
    minHeight: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: pageColor.white,
    transition: 'all 0.3s',
    boxShadow: shadow.near,
    zIndex: 2,
    width: '92%',
    position: 'relative',
    marginInline: 'auto',
    padding: 8,
    borderRadius: 10,
    ':hover': {
      transform: 'scale(1.05)',
      zIndex: 3,
      boxShadow: shadow.far,
    },
  },
  wrapperNext: {
    flexDirection: 'row-reverse',
    textAlign: 'right',
  },
  wrapperAfter: {
    position: 'absolute',
    color: '#f3f3f3',
    fontSize: 90,
    bottom: 0,
    fontWeight: 700,
    lineHeight: 1,
    fontStyle: 'italic',
    zIndex: 1,
    ':hover': {
      zIndex: -1,
    },
  },
  wrapperAfterPrev: {
    right: 30,
  },
  wrapperAfterNext: {
    left: 30,
  },
})

export default PrevNextPager
