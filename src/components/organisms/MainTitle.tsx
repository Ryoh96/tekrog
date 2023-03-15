import { faCalendar, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import styled from 'styled-components'

import type { CategoryType } from '@/types/CategoryType'

import { cat2Name } from './../../utils/cat2name'

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
  pageInfo: {
    type: string
    name: string
  }
}

const MainTitle = ({ pageInfo }: MainTitleProps) => {
  console.log(pageInfo.name)

  return (
    <MainTitleWrapper>
      {pageInfo.type === 'category' ? (
        <>
          <Image
            src={`/ttl-${pageInfo.name}.png`}
            alt=""
            height={44}
            width={44}
            style={{ objectFit: 'contain' }}
          />
          <Title>{`${
            cat2Name[pageInfo.name as CategoryType]
          }の記事一覧`}</Title>
        </>
      ) : pageInfo.type === 'archive' ? (
        <>
          <IconWrapper>
            <FontAwesomeIcon icon={faCalendar} />
          </IconWrapper>
          <Title>{`${pageInfo.name}の記事一覧`}</Title>
        </>
      ) : null}
    </MainTitleWrapper>
  )
}

export default MainTitle
