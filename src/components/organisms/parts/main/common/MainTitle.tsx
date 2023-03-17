import type { ReactNode } from 'react'
import styled from 'styled-components'

const MainTitleWrapper = styled.div<{ borderColor?: string }>`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  padding-bottom: 1em;
  border-bottom: 7px solid #1f2a82;
  border-image: ${({ theme, borderColor }) =>
    !borderColor && theme.gradient.main};
  border-image-slice: 1;
  border-color: ${({ borderColor }) => borderColor && borderColor} !important;

  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    margin-bottom: 18px;
  }
`

type MainTitleProps = {
  children: ReactNode
  borderColor?: string
  className?: string
}

const MainTitle = ({ children, borderColor, className }: MainTitleProps) => {
  return (
    <MainTitleWrapper borderColor={borderColor} className={className}>
      {children}
    </MainTitleWrapper>
  )
}

export default MainTitle
