import type { Post } from '@/graphql/generated/graphql'

import Postbody from './PostBody'
import PostFoot from './PostFoot'
import PostHead from './PostHead'

type MainPostProps = {
  post: Post & {
    prevPost: {
      nodes: Post[]
    }
    nextPost: {
      nodes: Post[]
    }
  }
}

const MainPost = ({ post }: MainPostProps) => {
  return (
    <>
      <PostHead
        title={post.title}
        date={post.date}
        imgUrl={post.featuredImage.node.sourceUrl}
        categories={post.categories}
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
