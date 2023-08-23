import styled from 'styled-components'

import DateTime from '@/components/atoms/DateTime'
import CategoryTags from '@/components/organisms/CategoryTags'
import _Share from '@/components/organisms/Share'
import type { Category } from '@/graphql/generated/graphql'

const Meta = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 22px;
  margin-bottom: 20px;
`

type PostHeadProps = {
  title: string
  date: string
  categories: {
    nodes: Category[]
  }
  uri: string
}

const CategoryTagsWrapper = styled.div`
  display: flex;
  gap: 20px;
`

const Share = styled(_Share)`
  color: white;
  margin-bottom: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    justify-content: center;
  }
`

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  text-align: center;
  display: grid;
  align-items: center;
  justify-content: center;
`

const PostHead = ({ title, date, categories, uri: pageUrl }: PostHeadProps) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL as string
  let url = pageUrl[0] === '/' ? pageUrl?.substring(1) : pageUrl
  url = url ? `${siteUrl}${url}` : siteUrl
  url = url?.replace(/\/$/, '') || url

  return (
    <Wrapper>
      <Meta>
        <DateTime>{date}</DateTime>
        <CategoryTagsWrapper>
          <CategoryTags categories={categories} />
        </CategoryTagsWrapper>
      </Meta>
      <Share title={title} url={url} />
    </Wrapper>
  )
}

export default PostHead
