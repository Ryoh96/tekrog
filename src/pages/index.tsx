import { GraphQLClient } from 'graphql-request'
import type { GetStaticProps } from 'next'

import Layout from '@/components/layout/Layout'
import MainTop from '@/components/organisms/MainTop'
import { getSdk } from '@/graphql/generated/request.ts'


type IndexProps = {
  data: any
}

const Index = ({
  data
}: IndexProps) => {
  const breadcrumbList: {
    name: string
    href: string
  }[] = []
  return (
    <>
      <Layout data={data} breadcrumbList={breadcrumbList}>
        <MainTop posts={data.posts} />
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

  return {
    props: {
      data
    }
  }
}
