import Image from 'next/image'
import styled, { useTheme } from 'styled-components'

import _MainTitle from '@/components/organisms/parts/main/common/MainTitle'
import type { CategoryType } from '@/types/CategoryType'
import { cat2Name } from '@/utils/cat2name'

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;

  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    font-size: 26px;
  }
`

const MainTitle = styled(_MainTitle)`
  margin-left: -22px;
`

type MainTitleProps = {
  category: string
}

const MainEachCategoryTitle = ({ category }: MainTitleProps) => {
  const theme = useTheme()
  return (
    <MainTitle borderColor={theme.color.category[category]}>
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
