import type { ReactNode } from 'react'
import styled from 'styled-components'

type NumericPagerItem = {
  children: ReactNode
  current?: boolean
}

const NumericPagerItemWrapper = styled.div<{ current: boolean }>`
  display: grid;
  place-content: center;
  width: 44px;
  height: 44px;
  color: ${({ current }) => (current ? '#fff' : '#1f2a82')};
  background-color: ${({ current }) => (current ? '#1f2a82' : '#fff')};
  cursor: pointer;
  transition: all 0.3s;
  z-index: 1;
  border: 1px solid currentColor;

  &:hover {
    transform: scale(1.05);
    z-index: 2;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  }
`

const NumericPagerItem = ({ children, current = false }: NumericPagerItem) => {
  console.log(777777, current)
  return <NumericPagerItemWrapper current={current}>{children}</NumericPagerItemWrapper>
}

export default NumericPagerItem
