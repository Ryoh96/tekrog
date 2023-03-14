import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import styled from 'styled-components'

import type { Category } from '@/graphql/generated/graphql'
import shuffleArray from '@/utils/shuffleArray'

import Card from './Card'

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

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    grid-template-columns: 1fr;
  }
`

const RelatedPostTitle = styled.p`
  font-size: 24px;
  margin-top: 0.2em;

  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    font-size: 18px;
  }
`

const RelatedTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-left: 0.3em;

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
      uri: n.uri,
    }))
  )

  console.log(333333, relatedPostsAll)

  const titles: string[] = []
  const uniqueRelatedPosts = relatedPostsAll.filter((post) => {
    return titles.includes(post?.title) ? false : titles.push(post?.title)
  })

  const relatedPostsShuffled = shuffleArray(uniqueRelatedPosts)
  const posts = relatedPostsShuffled.slice(0, 6)

  return (
    <RelatedPostsWrapper>
      <RelatedTitleWrapper>
        <FontAwesomeIcon icon={faPencil} />
        <RelatedPostTitle>関連記事</RelatedPostTitle>
      </RelatedTitleWrapper>
      <CardWrapper>
        {posts.map((post, index) => (
          <>
            {post && (
              <Link key={index} href={post.uri}>
                <article>
                  <Card
                    title={post.title}
                    categories={post.categories}
                    imgUrl={post.imgUrl}
                  />
                </article>
              </Link>
            )}
          </>
        ))}
      </CardWrapper>
    </RelatedPostsWrapper>
  )
}

export default RelatedPosts
