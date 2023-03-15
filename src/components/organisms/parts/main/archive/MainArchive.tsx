import MainArchiveTitle from '@/components/organisms/parts/main/archive/MainArchiveTitle'
import MainTopPage from '@/components/organisms/parts/main/top/MainTopPage'
import type { PostConnection } from '@/graphql/generated/graphql'

type MainEachCategoryProps = {
  posts: PostConnection & { edges: { cursor: string }[] }
  totalPages: number
  current?: number
  date: string
  type?: string
}

const MainEachCategory = ({
  posts,
  totalPages,
  current = 1,
  date,
  type,
}: MainEachCategoryProps) => {
  return (
    <MainTopPage
      title={<MainArchiveTitle date={date} />}
      posts={posts}
      totalPages={totalPages}
      current={current}
      type={type}
    />
  )
}

export default MainEachCategory
