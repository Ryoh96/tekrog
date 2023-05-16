import Postbody from '@/components/templates/main/post/PostBody'
import PostFoot from '@/components/templates/main/post/PostFoot'
import PostHead from '@/components/templates/main/post/PostHead'
import type { Category, Post } from '@/graphql/generated/graphql'
import type { GetPostPageQuery } from '@/graphql/generated/request'
import type { NextPost, PostPageQuery, PrevPost } from '@/types/Page'

type PostMainProps = {
  post: PostPageQuery
  blurImg: string | null
}

const PostMain = ({ post, blurImg }: PostMainProps) => {
  return (
    <>
      <PostHead
        title={post.title as string}
        date={post.date as string}
        imgUrl={post.featuredImage?.node.sourceUrl}
        categories={
          post.categories as {
            nodes: Category[]
          }
        }
        uri={post.uri as string}
        blurImg={blurImg}
      />
      <Postbody content={post.content as string} />
      <PostFoot
        title={post.title as string}
        uri={post.uri as string}
        categories={
          post.categories as {
            nodes: Category[]
          }
        }
        prevPost={post.prevPost}
        nextPost={post.nextPost}
      />
    </>
  )
}

export default PostMain
