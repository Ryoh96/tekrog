import { pageColor } from '../../../_styles/color.stylex'
import { shadow } from '../../../_styles/shadow.stylex'
import { DEFAULT_IMAGE } from '@/constants/strings'
import * as stylex from '@stylexjs/stylex'
import Image from 'next/image'

const HorizontalCard = ({
  src = DEFAULT_IMAGE,
  title,
}: {
  src?: string
  title: string
}) => {
  return (
    <div {...stylex.props(styles.div)}>
      <figure {...stylex.props(styles.figure)}>
        <Image
          src={src}
          alt={title}
          width={100}
          height={100}
          style={{
            objectFit: 'cover',
          }}
          sizes="200px"
          quality={50}
          {...stylex.props(styles.img)}
        />
      </figure>
      <p {...stylex.props(styles.p)}>{title}</p>
    </div>
  )
}

const fade = stylex.keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
})

const styles = stylex.create({
  div: {
    display: 'flex',
    gap: 6,
    boxShadow: shadow.near,
    zIndex: 2,
    minHeight: 82,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    alignItems: 'center',
    height: 100,
    transition: 'all 0.3s',
    position: 'relative',
    transform: 'scale(1)',
    borderColor: pageColor.white,
    ':hover': {
      transform: 'scale(1.05)',
      boxShadow: shadow.far,
      zIndex: 3,
      cursor: 'pointer',
    },
  },
  figure: {
    flex: '0 0 100px',
    position: 'relative',
    height: '100%',
  },
  img: {
    animation: fade,
    animationDuration: '2s',
  },
  p: {
    flex: '1 1 auto',
    fontWeight: 700,
    fontSize: 14,
    padding: 4,
  },
})

export default HorizontalCard
