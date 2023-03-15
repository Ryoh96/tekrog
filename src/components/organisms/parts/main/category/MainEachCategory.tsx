import MainEachCategoryTitle from '@/components/organisms/parts/main/category/MainEachCategoryTitle'
import MainTopPage from '@/components/organisms/parts/main/top/MainTopPage'
import type { PostConnection } from '@/graphql/generated/graphql'

type MainEachCategoryProps = {
  posts: PostConnection & { edges: { cursor: string }[] }
  totalPages: number
  current?: number
  category: string
  type?: string
}

const MainEachCategory = ({
  posts,
  totalPages,
  current = 1,
  category,
  type,
}: MainEachCategoryProps) => {
  return (
    <MainTopPage
      title={<MainEachCategoryTitle category={category} />}
      posts={posts}
      totalPages={totalPages}
      current={current}
      type={type}
    />
  )
}

export default MainEachCategory
