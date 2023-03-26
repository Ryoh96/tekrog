import styled from 'styled-components'

import GoogleAdsense from '@/components/organisms/adsense/GoogleAdsense'
import PostRelated from '@/components/organisms/parts/main/post/PostRelated'
import CategoryTags from '@/components/organisms/ui/CategoryTags'
import PrevNextPagers from '@/components/organisms/ui/PrevNextPager'
import _Share from '@/components/organisms/ui/Share'
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
      <GoogleAdsense
        style={{ display: 'block', textAlign: 'center' }}
        layout="in-article"
        format="fluid"
        slot="1534380891"
      />
      <PostRelated categories={categories} />
      <PrevNextPagers prevPost={prevPost} nextPost={nextPost} />
    </>
  )
}

export default PostFoot
