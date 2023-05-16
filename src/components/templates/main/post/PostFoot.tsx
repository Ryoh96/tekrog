import styled from 'styled-components'

import CategoryTags from '@/components/organisms/CategoryTags'
import PrevNextPagers from '@/components/organisms/PrevNextPager'
import _Share from '@/components/organisms/Share'
import PostRelated from '@/components/templates/main/post/PostRelated'
import type { Category, Post } from '@/graphql/generated/graphql'
import type { GetPostPageQuery } from '@/graphql/generated/request'
import type { NextPost, PrevPost } from '@/types/Page'

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
  prevPost: PrevPost
  nextPost: NextPost
  title: string
  uri: string
}

const PostFoot = ({
  categories,
  prevPost,
  nextPost,
  title,
  uri,
}: PostFootProps) => {
  return (
    <>
      <Meta>
        <CategoryTagsWrapper>
          <CategoryTags categories={categories} />
        </CategoryTagsWrapper>
        <Share
          title={title}
          url={`${process.env.NEXT_PUBLIC_SITE_URL}${uri}`}
        />
      </Meta>
      <PostRelated categories={categories} />
      <PrevNextPagers prevPost={prevPost} nextPost={nextPost} />
    </>
  )
}

export default PostFoot
