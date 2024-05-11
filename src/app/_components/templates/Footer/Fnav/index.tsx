import { SP } from '@/types/BreakPoints'
import * as stylex from '@stylexjs/stylex'
import Link from 'next/link'

const fnavItems = [
  {
    name: 'HOME',
    link: '/',
  },
  {
    name: 'プライバシーポリシー',
    link: '/privacy-policy',
  },
  {
    name: 'お問い合わせ',
    link: '/contact',
  },
]

const Fnav = () => {
  return (
    <nav>
      <ul {...stylex.props(styles.ul)}>
        {fnavItems.map((item) => (
          <Link href={item.link} key={item.name}>
            <li {...stylex.props(styles.li)}>{item.name}</li>
          </Link>
        ))}
      </ul>
    </nav>
  )
}

const MQ_SP: SP = 768

const styles = stylex.create({
  ul: {
    display: 'flex',
    gap: 20,
    height: 64,
    placeContent: 'center',
  },
  li: {
    transition: 'transform 0.2s',
    position: 'relative',
    [`@media (max-width: ${MQ_SP}px)`]: {
      fontSize: 14,
    },
    ':hover': {
      transform: 'scale(1.2)',
    },
  },
  copyright: {
    fontSize: 12,
  },
})

export default Fnav
