import { GraphQLClient } from 'graphql-request'
import type { GetStaticPaths, GetStaticProps } from 'next'

import Layout from '@/components/layout/Layout'
import { getSdk } from '@/graphql/generated/request.ts'

import MainPost from '../components/organisms/MainPost'

type PostProps = {
  data: any
}

const Post = ({ data }: PostProps) => {
  const postData = {
    ...data.post,
    prevPost: data.prevPost,
    nextPost: data.nextPost,
  }
  const breadcrumbList = [
    {
      name: data.post.categories.nodes[0].name,
      href: data.post.categories.nodes[0].uri,
    },
    {
      name: data.post.title,
      href: data.post.uri,
    },
  ]
  return (
    <>
      <Layout data={data} breadcrumbList={breadcrumbList}>
        <MainPost post={postData} />
      </Layout>
    </>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  const graphQLCluent = new GraphQLClient(
    process.env.END_POINT ?? 'https://tekrog.com/graphql'
  )
  const client = getSdk(graphQLCluent)
  const allPaths: { uri: string }[] = await client
    .getAllPaths()
    .then((data) => data.posts.nodes)

  const paths = allPaths.map(({ uri }) => uri)
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
  const permalink = params?.permalink as string
  const graphQLCluent = new GraphQLClient(
    process.env.END_POINT ?? 'https://tekrog.com/graphql'
  )
  const client = getSdk(graphQLCluent)
  const edges = await client
    .getAllPathsAndCursor()
    .then((data) => data.posts.edges)

  const target = edges.filter((edge) => edge.node.uri === `/${permalink}/`)

  const cursor: string = target[0].cursor

  const queryParams = {
    id: cursor,
    key: cursor,
  }

  const data = await client.getPostPage(queryParams)
  console.log(101010101010101010,data)
  return {
    props: {
      data,
    },
  }
}
