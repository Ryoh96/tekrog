import MainSearchTitle from '@/components/organisms/parts/main/search/MainSearchTitle'
import MainTopPage from '@/components/organisms/parts/main/top/MainTopPage'
import type { PostConnection } from '@/graphql/generated/graphql'

type MainSearchProps = {
  posts: PostConnection & { edges: { cursor: string }[] }
  totalPages: number
  current?: number
  query: string
  type?: string
}

const MainSearch = ({
  posts,
  totalPages,
  current = 1,
  query,
  type,
}: MainSearchProps) => {
  return (
    <MainTopPage
      title={<MainSearchTitle query={query} />}
      posts={posts}
      totalPages={totalPages}
      current={current}
      type={type}
    />
  )
}

export default MainSearch
