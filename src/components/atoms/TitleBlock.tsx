import styled from 'styled-components'

const TitleWrapper = styled.p`
  font-size: 20px;
  background: ${({ theme }) => theme.gradient.main};
  color: #fff;
  padding: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.breakpoints.sp}) {
    font-size: 18px;
    padding: 15px;
  }
`

type TitleBlockProps = {
  title: string
  className?: string
}

const TitleBlock = ({ title, className }: TitleBlockProps) => {
  return <TitleWrapper className={className}>{title}</TitleWrapper>
}

export default TitleBlock
