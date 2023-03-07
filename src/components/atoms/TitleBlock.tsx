import styled from 'styled-components'

const TitleWrapper = styled.p`
  font-size: 18px;
  background: ${({ theme }) => theme.gradient.main};
  color: #fff;
  padding: 16px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`

type TitleBlockProps = {
  title: string
}

const TitleBlock = ({ title }: TitleBlockProps) => {
  return <TitleWrapper>{title}</TitleWrapper>
}

export default TitleBlock
