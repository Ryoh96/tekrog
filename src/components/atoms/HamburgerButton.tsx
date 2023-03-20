import styled from 'styled-components'

import ScreenReaderOnly from '../utils/ScreenReaderOnly'

type HamburgerButtonProps = {
  onClick: () => void
  isOpen: boolean
}

const HamburgerButtonWrapper = styled.button<{ isOpen: boolean }>`
  all: unset;
  outline: revert;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  width: 42px;
  height: 42px;
  position: relative;
  z-index: 200;

  display: grid;
  place-items: center;

  &::after,
  &::before {
    grid-area: 1 / -1;
    content: '';
    width: 32px;
    height: 1px;
    display: block;
    background-color: #fff;
    z-index: 1000;
    transition: 0.3s ease;
  }

  &::before {
    ${({ isOpen }) =>
      isOpen ? 'transform: rotate(-135deg)' : 'transform: translateY(-10px)'}
  }

  &::after {
    ${({ isOpen }) =>
      isOpen ? 'transform: rotate(135deg)' : 'transform: translateY(10px)'}
  }
`

const Bar = styled.span<{ isOpen: boolean }>`
  & {
    grid-area: 1 / -1;
    width: 32px;
    height: 1px;
    display: block;
    background-color: #fff;
    z-index: 1000;
    transition: 0.3s ease;

    ${({ isOpen }) => (isOpen ? 'transform: scale(0)' : 'revert')}
  }

  position: relative;
`

const HamburgerButton = ({ onClick, isOpen }: HamburgerButtonProps) => {
  return (
    <HamburgerButtonWrapper
      onClick={onClick}
      isOpen={isOpen}
      aria-label="メニュー"
      aria-expanded={isOpen}
      aria-controls="hamburger-menu"
    >
      <ScreenReaderOnly>Menu</ScreenReaderOnly>
      <Bar isOpen={isOpen} />
    </HamburgerButtonWrapper>
  )
}

export default HamburgerButton
