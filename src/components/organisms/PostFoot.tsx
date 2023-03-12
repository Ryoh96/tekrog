import styled from 'styled-components'

import type { Category } from '@/graphql/generated/graphql'

import CategoryTags from './CategoryTags'
import RelatedPosts from './RelatedPosts'
import _Share from './Share'

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

const CategoryTagsWrapper = styled.div`
  display: flex;
  gap: 20px;
`

const Share = styled(_Share)`
  margin-bottom: 28px;
  justify-content: flex-end;
  padding-right: 20px;
`

type PostFootProps = {
  categories: {
    nodes: Category[]
  }
}

const PostFoot = ({ categories }: PostFootProps) => {
  return (
    <>
      <Meta>
        <CategoryTagsWrapper>
          <CategoryTags categories={categories} />
        </CategoryTagsWrapper>
        <Share />
      </Meta>
      <RelatedPosts categories={categories} />
    </>
  )
}

export default PostFoot
