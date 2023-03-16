import Link from 'next/link'
import styled from 'styled-components'

import Card from '@/components/organisms/ui/Card'
import NumericPager from '@/components/organisms/ui/NumericPager'
import type { PostConnection } from '@/graphql/generated/graphql'

type MainTopProps = {
  posts: PostConnection & { edges: { cursor: string }[] }
  totalPages: number
  current?: number
  type?: string
  title?: JSX.Element
}

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  gap: 32px 3%;
  margin-block: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    grid-template-columns: 1fr;
  }
`

const MainTopWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const NumericPagerWrapper = styled.div`
  margin-block-start: 40px;
`

const MainContentWrapper = styled.div``

const MainTopPage = ({
  posts,
  totalPages,
  title,
  current = 1,
  type = '/',
}: MainTopProps) => {
  return (
    <MainTopWrapper>
      <MainContentWrapper>
        {title}
        <CardWrapper>
          {posts.nodes.map((node) => (
            <Link key={node.uri} href={node.uri}>
              <article>
                <Card
                  key={node.uri}
                  title={node.title}
                  categories={node.categories.nodes}
                  date={node.date}
                  imgUrl={node.featuredImage.node.sourceUrl}
                  desc={node.excerpt.slice(3, node.excerpt.length - 5)}
                />
              </article>
            </Link>
          ))}
        </CardWrapper>
      </MainContentWrapper>
      <NumericPagerWrapper>
        <NumericPager total={totalPages} current={current} type={type} />
      </NumericPagerWrapper>
    </MainTopWrapper>
  )
}

export default MainTopPage