import styled from 'styled-components'

import type { Category } from '@/graphql/generated/graphql'
import shuffleArray from '@/utils/shuffleArray'

import Card from './Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'

const RelatedPostsWrapper = styled.div``

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 3%;
  margin-block: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px 3%;
  }
`

const RelatedPostTitle = styled.p`
  font-size: 24px;
  margin-top: 0.2em;
`

const RelatedTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-left:0.3em;

  svg {
    font-size: 24px;
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
      <RelatedTitleWrapper>
        <FontAwesomeIcon icon={faPencil}/>
        <RelatedPostTitle>関連記事</RelatedPostTitle>
      </RelatedTitleWrapper>
      <CardWrapper>
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
      </CardWrapper>
    </RelatedPostsWrapper>
  )
}

export default RelatedPosts
