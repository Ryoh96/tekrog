import Image from 'next/image'
import styled, { useTheme } from 'styled-components'

import type { CategoryType } from '@/types/CategoryType'
import { cat2Name } from '@/utils/cat2name'

import Tag from '../atoms/Tag'

type CategoryTagProps = {
  category: CategoryType
  count?: number
}

const ImageWrapper = styled.div`
  flex: 0 0 20px;
  height: 20px;
  position: relative;
`

const TagText = styled.span`
  word-break: keep-all;
`

const CategoryTag = ({ category, count }: CategoryTagProps) => {
  const theme = useTheme()
  return (
    <Tag color="#fff" bgColor={theme.color.category[category]}>
      <ImageWrapper>
        <Image
          src={`/logo-${category}.png`}
          alt=""
          width={20}
          height={20}
          style={{ objectFit: 'contain' }}
        />
      </ImageWrapper>
      <TagText>
        <>
          {cat2Name[category]}
          {count && <span> ({count})</span>}
        </>
      </TagText>
    </Tag>
  )
}

export default CategoryTag
