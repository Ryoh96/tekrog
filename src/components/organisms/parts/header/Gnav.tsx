import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'

import HamburgerButton from '@/components/atoms/HamburgerButton'
import SearchForm from '@/components/molecules/SearchForm'
import SpOnly from '@/components/utils/SpOnly'

const gnavItems = [
  { title: 'HOME', href: '/' },
  { title: 'ABOUT', href: '/about' },
  { title: 'CATEGORY', href: '/category' },
  { title: 'CONTACT', href: '/contact' },
]

const GnavList = styled.ul<{ isOpen: boolean }>`
  display: flex;
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    display: grid;
    place-content: center;
    text-align: center;
    position: fixed;
    inset: 0 -100% 0 100%;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.8);
    transition: transform 0.4s;
    font-size: 32px;

    ${({ isOpen }) => (isOpen ? 'transform: translateX(-100%)' : 'revert')};
  }
`

const GnavItem = styled.li`
  transition: transform 0.2s;
  position: relative;
  color: #fff;

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`

const Gnav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleGnav = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      <GnavList isOpen={isMenuOpen} id="hamburger-menu">
        <>
          {gnavItems.map((item) => (
            <Link href={item.href} key={item.title}>
              <GnavItem>{item.title}</GnavItem>
            </Link>
          ))}
          <SpOnly>
            <SearchForm />
          </SpOnly>
        </>
      </GnavList>
      <SpOnly>
        <HamburgerButton onClick={toggleGnav} isOpen={isMenuOpen} />
      </SpOnly>
      {isMenuOpen && (
        <style jsx global>{`
          body {
            overflow: hidden;
            position: fixed;
            width: 100%;
          }
        `}</style>
      )}
    </>
  )
}

export default Gnav
