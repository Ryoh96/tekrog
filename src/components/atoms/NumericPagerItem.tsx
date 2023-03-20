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
  color: ${({ current, theme }) => (current ? '#fff' : theme.color.page.main)};
  background: ${({ current, theme }) =>
    current ? theme.gradient.main : '#fff'};
  cursor: pointer;
  transition: all 0.3s;
  z-index: 1;
  border: 1px solid currentColor;

  &:hover {
    transform: scale(1.05);
    z-index: 2;
    box-shadow: ${({ theme }) => theme.boxShadow.far};
  }
`

const NumericPagerItem = ({ children, current = false }: NumericPagerItem) => {
  return (
    <NumericPagerItemWrapper current={current}>
      {children}
    </NumericPagerItemWrapper>
  )
}

export default NumericPagerItem
