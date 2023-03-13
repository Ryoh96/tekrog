import Link from 'next/link'
import styled from 'styled-components'

import type { PostConnection } from '@/graphql/generated/graphql'

import Card from './Card'

type MainTopProps = {
  posts: PostConnection
}

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px 3%;
  margin-block: 20px;
`

const MainTopWrapper = styled.div``

const MainTop = ({ posts }: MainTopProps) => {
  return (
    <MainTopWrapper>
      <CardWrapper>
        {posts.nodes.map((node) => (
          <Link key={node.uri} href={node.uri}>
            <Card
            key={node.uri}
              title={node.title}
              categories={node.categories.nodes}
              date={node.date}
              imgUrl={node.featuredImage.node.sourceUrl}
              desc={node.excerpt.slice(3, node.excerpt.length - 5)}
            />
          </Link>
        ))}
      </CardWrapper>
    </MainTopWrapper>
  )
}

export default MainTop
