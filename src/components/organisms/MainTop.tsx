import Link from 'next/link'
import styled from 'styled-components'

import type { PostConnection } from '@/graphql/generated/graphql'

import Card from './Card'
import NumericPager from './NumericPager'

type MainTopProps = {
  posts: PostConnection & { edges: { cursor: string }[] }
  totalPages: number
  current?: number
}

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  gap: 32px 3%;
  margin-block: 20px;
`

const MainTopWrapper = styled.div``

const NumericPagerWrapper = styled.div`
  margin-block-start: 40px;
`

const MainTop = ({ posts, totalPages, current = 1 }: MainTopProps) => {
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
      <NumericPagerWrapper>
        <NumericPager total={totalPages} current={current} />
      </NumericPagerWrapper>
    </MainTopWrapper>
  )
}

export default MainTop
