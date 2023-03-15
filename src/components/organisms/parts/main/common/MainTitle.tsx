import type { ReactNode } from 'react'
import styled from 'styled-components'

const MainTitleWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    margin-bottom: 18px;
  }
`

type MainTitleProps = {
  children: ReactNode
}

const MainTitle = ({ children }: MainTitleProps) => {
  return <MainTitleWrapper>{children}</MainTitleWrapper>
}

export default MainTitle
