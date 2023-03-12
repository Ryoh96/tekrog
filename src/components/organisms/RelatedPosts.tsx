import styled from 'styled-components'

import type { Category } from '@/graphql/generated/graphql'
import shuffleArray from '@/utils/shuffleArray'

import Card from './Card'

const RelatedPostsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 3%;
  margin-block: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px 3%;
  }
`

type RelatedPostsProps = {
  categories: {
    nodes: Category[]
  }
}

const RelatedPosts = ({ categories }: RelatedPostsProps) => {
  const relatedPostsAll = categories.nodes.flatMap((node) =>
    node.posts?.nodes.map((n) => ({
      title: n.title,
      categories: n.categories.nodes,
      imgUrl: n.featuredImage.node.sourceUrl,
    }))
  )

  const relatedPostsShuffled = shuffleArray(relatedPostsAll)
  const posts = relatedPostsAll.slice(relatedPostsShuffled.length - 7)
  console.info(posts)

  return (
    <RelatedPostsWrapper>
      {posts.map((post, index) => (
        <>
          {/* {console.log(post)} */}
          {post && (
            <Card
              key={index}
              title={post.title}
              categories={post.categories}
              imgUrl={post.imgUrl}
            />
          )}
        </>
      ))}
    </RelatedPostsWrapper>
  )
}

export default RelatedPosts
