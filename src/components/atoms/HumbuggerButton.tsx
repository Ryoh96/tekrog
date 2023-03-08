import styled from 'styled-components'

import ScreenReaderOnly from '../utils/ScreenReaderOnly'

const Bar = styled.span`
  &,
  &::after,
  &::before {
    height: 3px;
    width: 32px;
    display: block;
    background-color: #fff;
    z-index: 1000;
    transition: 0.3s ease;
  }

  &::before {
    position: absolute;
    content: '';
    transform: translateY(-10px);
  }

  &::after {
    position: absolute;
    content: '';
    transform: translateY(10px);
  }

  position: relative;
`

const HumbuggerButton = () => {
  return (
    <>
      <ScreenReaderOnly>Menu</ScreenReaderOnly>
      <Bar />
    </>
  )
}

export default HumbuggerButton
