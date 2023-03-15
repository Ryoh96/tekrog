import { GraphQLClient } from 'graphql-request'
import type { GetStaticProps } from 'next'

import Layout from '@/components/layout/Layout'
import MainTopPage from '@/components/organisms/parts/main/top/MainTopPage'
import { POSTS_PER_PAGE } from '@/constants/number'
import { getSdk } from '@/graphql/generated/request.ts'

type IndexProps = {
  data: any
  totalPages: number
}

const Index = ({ data, totalPages }: IndexProps) => {
  const breadcrumbList: {
    name: string
    href: string
  }[] = []
  return (
    <>
      <Layout data={data} breadcrumbList={breadcrumbList}>
        <MainTopPage posts={data.posts} totalPages={totalPages} />
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const queryParams = {
    first: POSTS_PER_PAGE,
  }
  const graphQLCluent = new GraphQLClient(
    process.env.END_POINT ?? 'https://tekrog.com/graphql'
  )
  const client = getSdk(graphQLCluent)
  const data = await client.getTopPage(queryParams)

  const allCursor: { cursor: string }[] = await client
    .getAllCursor()
    .then((data: { posts: { edges: any } }) => data.posts.edges)

  const totalPosts = allCursor.length
  const totalPages = Math.floor((totalPosts - 1) / POSTS_PER_PAGE + 1)

  return {
    props: {
      data,
      totalPages,
    },
  }
}
