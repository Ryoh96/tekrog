import { GraphQLClient } from 'graphql-request'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Layout from '@/components/layout/Layout'
import MainTopPage from '@/components/organisms/parts/main/top/MainTopPage'
import { POSTS_PER_PAGE } from '@/constants/number'
import { getSdk } from '@/graphql/generated/request'

type PageProps = {
  data: any
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
      <Layout data={data} breadcrumbList={breadcrumbList} meta={meta}>
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

  const allCursor: { cursor: string }[] = await client
    .getAllCursor()
    .then((data) => data.posts.edges)

  const totalPosts = allCursor.length
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

  const allCursor: { cursor: string }[] = await client
    .getAllCursor()
    .then((data) => data.posts.edges)

  const queryParams = {
    after: allCursor[(pageNum - 1) * POSTS_PER_PAGE - 1].cursor,
    first: POSTS_PER_PAGE,
  }
  const data = await client.getTopPage(queryParams)

  const totalPosts = allCursor.length
  const totalPages = Math.floor((totalPosts - 1) / POSTS_PER_PAGE + 1)

  return {
    props: {
      data,
      pageNum,
      totalPages,
    },
  }
}
