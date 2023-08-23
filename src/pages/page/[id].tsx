import { GraphQLClient } from 'graphql-request'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'

import Layout from '@/components/layout/Layout'
import MainTopPage from '@/components/templates/main/top/MainTopPage'
import { POSTS_PER_PAGE } from '@/constants/number'
import type {
  GetArchivePostsQuery,
  GetCategoriesQuery,
  GetRecentPostsQuery,
  GetTopPageQuery,
} from '@/graphql/generated/request'
import { getSdk } from '@/graphql/generated/request'

type PageProps = {
  data: GetTopPageQuery
  pageNum: number
  totalPages: number
}
const Page: NextPage<PageProps> = ({ data, pageNum, totalPages }) => {
  const url = `/page/${pageNum}`
  const breadcrumbList: {
    name: string
    href: string
  }[] = [
    {
      name: `ページ${pageNum}`,
      href: url,
    },
  ]

  const meta = {
    url,
  }

  return (
    <>
      <Layout
        data={data}
        breadcrumbList={breadcrumbList}
        meta={meta}
        title="投稿記事一覧"
      >
        <MainTopPage
          posts={data.posts}
          totalPages={totalPages}
          current={pageNum}
        />
      </Layout>
    </>
  )
}

export default Page

export const getStaticPaths: GetStaticPaths = async () => {
  const graphQLClient = new GraphQLClient(
    process.env.END_POINT ?? 'https://tekrog.com/graphql'
  )
  const client = getSdk(graphQLClient)

  const allCursor = await client
    .getAllCursor()
    .then((data) => data.posts?.edges)

  const totalPosts = allCursor?.length ?? 1
  const totalPage = Math.floor((totalPosts - 1) / POSTS_PER_PAGE + 1)
  const paths = [...Array(totalPage)].map((_, i) => `/page/${i + 1}`)
  paths.shift()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  const pageNum = Number(params?.id)
  const graphQLClient = new GraphQLClient(
    process.env.END_POINT ?? 'https://tekrog.com/graphql'
  )
  const client = getSdk(graphQLClient)

  const allCursor = await client
    .getAllCursor()
    .then((data) => data.posts?.edges)

  const queryParams = {
    after: allCursor?.[(pageNum - 1) * POSTS_PER_PAGE - 1].cursor,
    first: POSTS_PER_PAGE,
  }
  const [posts, recentPost, categories, archivePosts] = await Promise.all<
    [
      Promise<GetTopPageQuery>,
      Promise<GetRecentPostsQuery>,
      Promise<GetCategoriesQuery>,
      Promise<GetArchivePostsQuery>
    ]
  >([
    client.getTopPagePosts(queryParams),
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

  const totalPosts = allCursor?.length ?? 1
  const totalPages = Math.floor((totalPosts - 1) / POSTS_PER_PAGE + 1)

  return {
    props: {
      data,
      pageNum,
      totalPages,
    },
  }
}
