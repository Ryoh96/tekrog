import styled from 'styled-components'

import RelatedPosts from '@/components/organisms/parts/main/post/RelatedPosts'
import CategoryTags from '@/components/organisms/ui/CategoryTags'
import PrevNextPagers from '@/components/organisms/ui/PrevNextPager'
import _Share from '@/components/organisms/ui/Share'
import type { Category, Post } from '@/graphql/generated/graphql'

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 20px;
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
  prevPost: {
    nodes: Post[]
  }
  nextPost: {
    nodes: Post[]
  }
}

const PostFoot = ({ categories, prevPost, nextPost }: PostFootProps) => {
  console.log(10, prevPost)
  return (
    <>
      <Meta>
        <CategoryTagsWrapper>
          <CategoryTags categories={categories} />
        </CategoryTagsWrapper>
        <Share />
      </Meta>
      <RelatedPosts categories={categories} />
      <PrevNextPagers prevPost={prevPost} nextPost={nextPost} />
    </>
  )
}

export default PostFoot