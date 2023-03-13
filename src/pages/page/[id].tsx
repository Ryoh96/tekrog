import { GraphQLClient } from 'graphql-request'
import type { GetStaticPaths, GetStaticProps } from 'next'

import Layout from '@/components/layout/Layout'
import MainTop from '@/components/organisms/MainTop'
import { getSdk } from '@/graphql/generated/request.ts'

type PageProps = {
  data: any
}

const Page = ({ data }: PageProps) => {
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

export default Page

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = ['/page/2', '/page/3']
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  const pageNum = Number(params?.id)
  console.log(20, Number(process.env.POST_PER_PAGE) * (pageNum - 1))
  const graphQLCluent = new GraphQLClient(
    process.env.END_POINT ?? 'https://tekrog.com/graphql'
  )
  const client = getSdk(graphQLCluent)

  const startCursor: string = await client.getStartCursor({
    index: 10 * (pageNum - 1),
  })

  const queryParams = {
    after: startCursor,
    first: 10,
  }
  const data = await client.getTopPage(queryParams)

  return {
    props: {
      data,
    },
  }
}
