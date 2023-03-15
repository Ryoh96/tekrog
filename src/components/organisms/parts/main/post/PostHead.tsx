import Image from 'next/image'
import styled from 'styled-components'

import DateTime from '@/components/atoms/DateTime'
import CategoryTags from '@/components/organisms/ui/CategoryTags'
import _Share from '@/components/organisms/ui/Share'
import type { Category } from '@/graphql/generated/graphql'

const Thumbnail = styled.figure`
  width: 100%;
  height: auto;
  margin-bottom: 24px;

  img {
    position: static !important;
  }
`

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    font-size: 26px;
  }
`

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

type PostHeadProps = {
  title: string
  date: string
  imgUrl: string
  categories: {
    nodes: Category[]
  }
}

const CategoryTagsWrapper = styled.div`
  display: flex;
  gap: 20px;
`

const Share = styled(_Share)`
  margin-bottom: 28px;
  justify-content: flex-end;
  padding-right: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    justify-content: center;
  }
`

const PostHead = ({ title, date, imgUrl, categories }: PostHeadProps) => {
  return (
    <>
      <Title>{title}</Title>
      <Meta>
        <CategoryTagsWrapper>
          <CategoryTags categories={categories} />
        </CategoryTagsWrapper>
        <DateTime>{date}</DateTime>
      </Meta>
      <Thumbnail>
        <Image
          src={imgUrl}
          alt={title}
          fill
          style={{
            objectFit: 'contain',
          }}
          sizes="50vw"
          quality={75}
        />
      </Thumbnail>
      <Share />
    </>
  )
}

export default PostHead
