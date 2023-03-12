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
  const paths = ['/a']
  return {
    paths,
    fallback: false,
  }
}

const id = 'YXJyYXljb25uZWN0aW9uOjE4OTI='

export const getStaticProps: GetStaticProps<PostProps> = async (context) => {
  // const permalink = context.params?.permalink as string
  // console.log(permalink)
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
