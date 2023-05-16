import { GraphQLClient } from 'graphql-request'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

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

type CategoryProps = {
  data: GetCategoryPageQuery
  categoryName: string
  totalPages: number
}

const Category: NextPage<CategoryProps> = ({
  data,
  categoryName,
  totalPages,
}) => {
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
  ]

  const meta = {
    title,
    desc,
    url,
  }

  return (
    <>
      <Layout data={data} breadcrumbList={breadcrumbList} meta={meta}>
        <MainTopPage
          title={<MainEachCategoryTitle category={categoryName} />}
          posts={data.posts}
          totalPages={totalPages}
          type={`/category/${categoryName}/`}
        />
      </Layout>
    </>
  )
}

export default Category

export const getStaticPaths: GetStaticPaths = async () => {
  const graphQLClient = new GraphQLClient(
    process.env.END_POINT ?? 'https://tekrog.com/graphql'
  )
  const client = getSdk(graphQLClient)

  const allCategories = await client
    .getAllCategoryName()
    .then((data) => data.categories!.nodes)
  const paths = allCategories.map(({ slug }) => `/category/${slug}`)
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<CategoryProps> = async ({
  params,
}) => {
  const categoryName = params?.slug as string
  const graphQLClient = new GraphQLClient(
    process.env.END_POINT ?? 'https://tekrog.com/graphql'
  )
  const client = getSdk(graphQLClient)

  const allCursor: any[] = await client
    .getCategoryCursor({ categoryName })
    .then((data) => data.posts!.edges)

  const queryParams = {
    first: POSTS_PER_PAGE,
    categoryName,
  }
  // const data = await client.getCategoryPage(queryParams)

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
  const totalPosts = allCursor.length
  const totalPages = Math.floor((totalPosts - 1) / POSTS_PER_PAGE + 1)

  return {
    props: {
      data,
      categoryName,
      totalPages,
    },
  }
}
