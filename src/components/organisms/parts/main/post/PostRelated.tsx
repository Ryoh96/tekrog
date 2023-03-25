import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

import Card from '@/components/organisms/ui/Card'
import type { Category } from '@/graphql/generated/graphql'
import shuffleArray from '@/utils/shuffleArray'

const PostRelatedWrapper = styled.div``

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 3%;
  margin-block: 20px 50px;

  p {
    font-weight: normal;
    font-size: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px 3%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    grid-template-columns: 1fr;
  }
`

const RelatedPostTitle = styled.p`
  font-size: 26px;
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
  border-bottom: 7px solid #1f2a82;
  border-image: ${({ theme }) => theme.gradient.main};
  border-image-slice: 1;

  svg {
    font-size: 24px;
  }
`

type PostRelatedProps = {
  categories: {
    nodes: Category[]
  }
}

const PostRelated = ({ categories }: PostRelatedProps) => {
  const PostRelatedAll = categories.nodes.flatMap((node) =>
    node.posts?.nodes.map(
      (n: any) => ({
        title: n.title,
        categories: n.categories.nodes,
        imgUrl: n.featuredImage.node.sourceUrl,
        uri: n.uri,
      })
    )
  )

  const titles: string[] = []
  const uniquePostRelated = PostRelatedAll.filter((post) => {
    return titles.includes(post?.title) ? false : titles.push(post?.title)
  })

  const PostRelatedShuffled = shuffleArray(uniquePostRelated)
  const posts = PostRelatedShuffled.slice(0, 6)

  return (
    <PostRelatedWrapper>
      <RelatedTitleWrapper>
        <FontAwesomeIcon icon={faPencil} />
        <RelatedPostTitle>関連記事</RelatedPostTitle>
      </RelatedTitleWrapper>
      <CardWrapper>
        {posts.map((post, index) => (
          <React.Fragment key={index}>
            {post && (
              <Link href={post.uri}>
                <article>
                  <Card
                    title={post.title}
                    categories={post.categories}
                    imgUrl={post.imgUrl}
                  />
                </article>
              </Link>
            )}
          </React.Fragment>
        ))}
      </CardWrapper>
    </PostRelatedWrapper>
  )
}

export default PostRelated
