import Image from 'next/image'
import Link from 'next/link'
import styled, { useTheme } from 'styled-components'

import type { CategoryType } from '@/types/CategoryType'
import { cat2Name, name2Cat } from '@/utils/cat2name'

import Tag from '../atoms/Tag'

type CategoryTagProps = {
  categoryName: string
  count?: number
  link?: string
}

const ImageWrapper = styled.div`
  flex: 0 0 20px;
  height: 20px;
  position: relative;
`

const TagText = styled.span`
  word-break: keep-all;
`

const CategoryTag = ({ categoryName, count, link }: CategoryTagProps) => {
  const theme = useTheme()
  const category = name2Cat[categoryName]
  return (
    <Link href={link ?? ""}>
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
            {categoryName}
            {count && <span> ({count})</span>}
          </>
        </TagText>
      </Tag>
    </Link>
  )
}

export default CategoryTag
