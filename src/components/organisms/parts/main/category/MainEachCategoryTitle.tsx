import Image from 'next/image'
import styled from 'styled-components'

import MainTitle from '@/components/organisms/parts/main/common/MainTitle'
import type { CategoryType } from '@/types/CategoryType'
import { cat2Name } from '@/utils/cat2name'

const Title = styled.h1`
  font-size: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    font-size: 26px;
  }
`

type MainTitleProps = {
  category: string
}

const MainEachCategoryTitle = ({ category }: MainTitleProps) => {
  return (
    <MainTitle>
      <>
        <Image
          src={`/ttl-${category}.png`}
          alt=""
          height={44}
          width={44}
          style={{ objectFit: 'contain' }}
        />
        <Title>{`${cat2Name[category as CategoryType]}`}</Title>
      </>
    </MainTitle>
  )
}

export default MainEachCategoryTitle
