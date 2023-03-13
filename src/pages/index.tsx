import { GraphQLClient } from 'graphql-request'
import type { GetStaticPaths, GetStaticProps } from 'next'

import Layout from '@/components/layout/Layout'
import type { PostPageQueryVariables } from '@/graphql/generated/request.ts'
import { getSdk } from '@/graphql/generated/request.ts'

import MainPost from '../components/organisms/MainPost'



type PostProps = {
  data: any
}

const Post = ({ data }: PostProps) => {

  const breadcrumbList: {
    name: string
    href: string
  }[] = []

  return (
    <>
      <Layout data={data} breadcrumbList={breadcrumbList}>
        <MainPost post={data} />
      </Layout>
    </>
  )
}

export default Post

export const getStaticProps: GetStaticProps<PostProps> = async () => {
  // const graphQLCluent = new GraphQLClient(
  //   process.env.END_POINT ?? 'https://tekrog.com/graphql'
  )
  const client = getSdk(graphQLCluent)
  const data = await client.PostPage({id, key: id})
  console.log(data)
  return {
    props: {
      data,
    },
  }
}
