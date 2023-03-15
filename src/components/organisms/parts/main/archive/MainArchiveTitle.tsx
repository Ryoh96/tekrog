import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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

type MainTitleProps = {
  date: string
}

const MainArchiveTitle = ({ date }: MainTitleProps) => {
  return (
    <MainTitle>
      <>
        <IconWrapper>
          <FontAwesomeIcon icon={faCalendar} />
        </IconWrapper>
        <Title>{`${date}の記事一覧`}</Title>
      </>
    </MainTitle>
  )
}

export default MainArchiveTitle
