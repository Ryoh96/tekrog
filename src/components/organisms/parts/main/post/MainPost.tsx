import Postbody from '@/components/organisms/parts/main/post/PostBody'
import PostFoot from '@/components/organisms/parts/main/post/PostFoot'
import PostHead from '@/components/organisms/parts/main/post/PostHead'
import type { Post } from '@/graphql/generated/graphql'

type MainPostProps = {
  post: Post & {
    prevPost: {
      nodes: Post[]
    }
    nextPost: {
      nodes: Post[]
    }
  }
  blurImg: string | null
}

const MainPost = ({ post, blurImg }: MainPostProps) => {
  return (
    <>
      <PostHead
        title={post.title}
        date={post.date}
        imgUrl={post.featuredImage.node.sourceUrl}
        categories={post.categories}
        uri={post.uri}
        blurImg={blurImg}
      />
      <Postbody content={post.content} />
      <PostFoot
        categories={post.categories}
        prevPost={post.prevPost}
        nextPost={post.nextPost}
      />
    </>
  )
}

export default MainPost
