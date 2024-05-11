import Image from 'next/image'
import BlogName from '@/images/blog_name.png'
import Icon from '@/images/logo_transparent.svg'
import Link from 'next/link'
import * as stylex from '@stylexjs/stylex'
import { SP } from '@/types/BreakPoints'

const Logo = () => {
  return (
    <Link href="/" {...stylex.props(styles.link)}>
      <Image
        src={Icon}
        alt=""
        width={50}
        height={50}
        {...stylex.props(styles.icon)}
      />
      <Image
        src={BlogName}
        alt="TekRog"
        sizes="100vw"
        {...stylex.props(styles.blogName)}
      />
    </Link>
  )
}

const MQ_SP: SP = 768

const styles = stylex.create({
  link: {
    display: 'flex',
    alignItems: 'center',
    transition: '0.3s',
    gap: 10,
    ':hover': {
      transform: 'scale(1.1)',
    },
    ':focus': {
      transform: 'scale(1.1)',
    },
  },
  icon: {
    ':hover': {
      transform: 'rotate(180deg)',
      transition: 'transform 0.3s',
    },
  },
  blogName: {
    position: 'relative',
    zIndex: 10,
    marginBlockStart: '0.2em',
    width: {
      default: 90,
      [`@media (max-width: ${MQ_SP}px)`]: 80,
    },
    height: 'auto',
  },
})

export default Logo
