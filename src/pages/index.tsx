import { GraphQLClient } from 'graphql-request'
import type { GetStaticProps } from 'next'

import Layout from '@/components/layout/Layout'
import MainTop from '@/components/organisms/MainTop'
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
        <MainTop posts={data.posts} totalPages={totalPages}/>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const params = {
    first: 10,
  }
  const graphQLCluent = new GraphQLClient(
    process.env.END_POINT ?? 'https://tekrog.com/graphql'
  )
  const client = getSdk(graphQLCluent)
  const data = await client.getTopPage(params)

  const allCursor: { cursor: string }[] = await client
    .getAllCursor()
    .then((data: { posts: { edges: any } }) => data.posts.edges)

  const totalPosts = allCursor.length
  const totalPages = Math.floor((totalPosts - 1) / POSTS_PER_PAGE + 1)

  return {
    props: {
      data,
      totalPages
    },
  }
}
