'use client'

import SPOnly from '@/app/_components/utils/SPOnly'
import * as stylex from '@stylexjs/stylex'
import Link from 'next/link'
import { useState } from 'react'
import HamburgerButton from './HamburgerButton'
import { SP } from '@/types/BreakPoints'

const gnavItems = [
  { title: 'HOME', href: '/' },
  { title: 'ABOUT', href: '/about' },
  { title: 'CATEGORY', href: '/category' },
  { title: 'CONTACT', href: '/contact' },
]

const Gnav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleGnav = () => setIsMenuOpen((prevState) => !prevState)

  return (
    <nav>
      <ul {...stylex.props(styles.ul, isMenuOpen && styles.isMenuOpen)}>
        <>
          {gnavItems.map((item) => (
            <Link href={item.href} key={item.title}>
              <li {...stylex.props(styles.li)}>{item.title}</li>
            </Link>
          ))}
        </>
      </ul>
      <SPOnly>
        <HamburgerButton isOpen={isMenuOpen} onClick={toggleGnav} />
      </SPOnly>
      {isMenuOpen && (
        <style jsx global>{`
          body {
            overflow: hidden;
            position: fixed;
            width: 100%;
          }
        `}</style>
      )}
    </nav>
  )
}

const MQ_SP: SP = 768

const styles = stylex.create({
  ul: {
    display: 'flex',
    gap: 40,
    [`@media (max-width: ${MQ_SP}px)`]: {
      display: 'grid',
      placeContent: 'center',
      textAlign: 'center',
      position: 'fixed',
      inset: '0 -100% 0 100%',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      transition: 'transform 0.4s',
      fontSize: 32,
      transform: null,
    },
  },
  isMenuOpen: {
    [`@media (max-width: ${MQ_SP}px)`]: {
      transform: 'translateX(-100%)',
    },
  },
  li: {
    transition: 'transform 0.2s',
    position: 'relative',
    color: '#fff',
    ':hover': {
      transform: 'scale(1.2)',
    },
  },
})

export default Gnav
