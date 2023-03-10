import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { ReactNode } from 'react'
import styled from 'styled-components'

const TitleWrapper = styled.div`
  font-size: 20px;
  background: ${({ theme }) => theme.gradient.main};
  color: #fff;
  padding: 14px 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    font-size: 18px;
    padding: 14px 15px;
  }
  display: flex;
  align-items: center;
  gap: 0.5em;

  svg {
    font-size: 20px;
  }
`
const Title = styled.p`
  margin-top: 0.1em;
`

type TitleBlockProps = {
  title: string
  className?: string
  icon?: ReactNode
}

const TitleBlock = ({ title, className, icon }: TitleBlockProps) => {
  return (
    <TitleWrapper className={className}>
      {icon}
      <Title>{title}</Title>
    </TitleWrapper>
  )
}

export default TitleBlock
