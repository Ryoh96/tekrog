import { GraphQLClient } from 'graphql-request'
import type { GetStaticPaths, GetStaticProps } from 'next'

import Layout from '@/components/layout/Layout'
import MainEachCategoryTitle from '@/components/templates/main/category/MainEachCategoryTitle'
import MainTopPage from '@/components/templates/main/top/MainTopPage'
import { POSTS_PER_PAGE } from '@/constants/number'
import type {
  GetArchivePostsQuery,
  GetCategoriesQuery,
  GetCategoryPageQuery,
  GetCategoryQuery,
  GetRecentPostsQuery,
} from '@/graphql/generated/request'
import { getSdk } from '@/graphql/generated/request'
import type { CategoryType } from '@/types/CategoryType'
import { cat2Name } from '@/utils/cat2name'

type CategoryPageProps = {
  data: GetCategoryPageQuery
  pageNum: number
  categoryName: string
  totalPages: number
}

const CategoryPage = ({
  data,
  categoryName,
  totalPages,
  pageNum,
}: CategoryPageProps) => {
  const title = cat2Name[categoryName as CategoryType]
  const desc = `${title}の記事一覧です。`
  const url = `/category/${categoryName}`

  const breadcrumbList: {
    name: string
    href: string
  }[] = [
    {
      name: 'カテゴリー',
      href: '/category',
    },
    {
      name: title,
      href: url,
    },
    {
      name: `ページ${pageNum}`,
      href: `${url}/page/${pageNum}`,
    },
  ]

  const meta = {
    title,
    desc,
    url: `${url}/page/${pageNum}`,
  }

  return (
    <>
      <Layout
        data={data}
        breadcrumbList={breadcrumbList}
        meta={meta}
        title="カテゴリー別記事一覧"
      >
        <MainTopPage
          title={<MainEachCategoryTitle category={categoryName} />}
          posts={data.posts}
          totalPages={totalPages}
          type={`/category/${categoryName}/`}
          current={pageNum}
        />
      </Layout>
    </>
  )
}

export default CategoryPage

export const getStaticPaths: GetStaticPaths = async () => {
  const graphQLClient = new GraphQLClient(
    process.env.END_POINT ?? 'https://tekrog.com/graphql'
  )
  const client = getSdk(graphQLClient)

  const allCategories = await client
    .getAllCategoryName()
    .then((data) => data.categories?.nodes)
  const allCategoryNames = allCategories?.map(({ slug }) => slug) as string[]
  const paths: string[] = []
  for (const categoryName of allCategoryNames) {
    const allCursor = await client
      .getCategoryCursor({ categoryName })
      .then((data) => data.posts?.edges)
    const totalPosts = allCursor?.length ?? 0
    const totalPage = Math.floor((totalPosts - 1) / POSTS_PER_PAGE + 1)

    if (totalPage > 1) {
      for (let i = 2; i <= totalPage; i++) {
        paths.push(`/category/${categoryName}/page/${i}`)
      }
    }
  }
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<CategoryPageProps> = async ({
  params,
}) => {
  const categoryName = params?.slug as string
  const pageNum = Number(params?.id)

  const graphQLClient = new GraphQLClient(
    process.env.END_POINT ?? 'https://tekrog.com/graphql'
  )
  const client = getSdk(graphQLClient)

  const allCursor = await client
    .getCategoryCursor({ categoryName })
    .then((data) => data.posts?.edges)

  const queryParams = {
    after: allCursor?.[(pageNum - 1) * POSTS_PER_PAGE - 1].cursor,
    first: POSTS_PER_PAGE,
    categoryName,
  }

  const [posts, recentPost, categories, archivePosts] = await Promise.all<
    [
      Promise<GetCategoryQuery>,
      Promise<GetRecentPostsQuery>,
      Promise<GetCategoriesQuery>,
      Promise<GetArchivePostsQuery>
    ]
  >([
    client.getCategory(queryParams),
    client.getRecentPosts(),
    client.getCategories(),
    client.getArchivePosts(),
  ])

  const data = {
    posts: posts.posts,
    recentPost: recentPost.recentPost,
    categories: categories.categories,
    archivePosts: archivePosts.archivePosts,
  }

  const totalPosts = allCursor?.length ?? 0
  const totalPages = Math.floor((totalPosts - 1) / POSTS_PER_PAGE + 1)

  return {
    props: {
      data,
      pageNum,
      categoryName,
      totalPages,
    },
  }
}
