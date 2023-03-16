import type { ReactNode } from 'react'
import styled from 'styled-components'

import MainTitle from '../common/MainTitle'

const Title = styled.h1`
  font-size: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    font-size: 26px;
  }
`

const IconWrapper = styled.span`
  svg {
    font-size: 32px;
    margin-bottom: 0.2em;
  }
`

type MainIconTitleProps = {
  children: string
  icon: ReactNode
}

const MainIconTitle = ({ children, icon }: MainIconTitleProps) => {
  return (
    <MainTitle>
      <>
        <IconWrapper>{icon}</IconWrapper>
        <Title>{children}</Title>
      </>
    </MainTitle>
  )
}

export default MainIconTitle
