import { GraphQLClient } from 'graphql-request'
import type { GetStaticPaths, GetStaticProps } from 'next'

import Layout from '@/components/layout/Layout'
import MainTop from '@/components/organisms/MainTop'
import { POSTS_PER_PAGE } from '@/constants/number'
import { getSdk } from '@/graphql/generated/request.ts'

type PageProps = {
  data: any
  pageNum: number
  totalPages: number
}

const Page = ({ data, pageNum, totalPages }: PageProps) => {
  const breadcrumbList: {
    name: string
    href: string
  }[] = [
    {
      name: `ページ${pageNum}`,
      href: `/page/${pageNum}`,
    },
  ]
  return (
    <>
      <Layout data={data} breadcrumbList={breadcrumbList}>
        <MainTop posts={data.posts} totalPages={totalPages} current={pageNum} />
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
  console.log(paths)
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

    console.log(allCursor[(pageNum - 1) * POSTS_PER_PAGE - 1])
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
