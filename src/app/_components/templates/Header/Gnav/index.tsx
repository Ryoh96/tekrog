'use client'

import SPOnly from '@/app/_components/utils/SPOnly'
import * as stylex from '@stylexjs/stylex'
import { useState } from 'react'
import HamburgerButton from './HamburgerButton'
import { SP } from '@/types/BreakPoints'
import { useRouter } from 'next/navigation'

const gnavItems = [
  { title: 'HOME', href: '/' },
  { title: 'ABOUT', href: '/about' },
  { title: 'CATEGORY', href: '/category' },
  { title: 'CONTACT', href: '/contact' },
]

const Gnav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const toggleGnav = () => setIsMenuOpen((prevState) => !prevState)

  const handleClick = (href: string) => {
    router.push(href)
    setIsMenuOpen(false)
  }

  return (
    <nav>
      <ul {...stylex.props(styles.ul, isMenuOpen && styles.isMenuOpen)}>
        <>
          {gnavItems.map((item) => (
            <span key={item.title} onClick={() => handleClick(item.href)}>
              <li {...stylex.props(styles.li)}>{item.title}</li>
            </span>
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
      zIndex: 999
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
