import { GraphQLClient } from 'graphql-request'
import type { GetStaticPaths, GetStaticProps } from 'next'

import Layout from '@/components/layout/Layout'
import Main from '@/components/organisms/parts/main/common/Main'
import { getSdk } from '@/graphql/generated/request.ts'

type PostProps = {
  data: any
  isSingle: boolean
}

const Post = ({ data, isSingle }: PostProps) => {
  const content = isSingle
    ? data
    : {
        ...data.post,
        prevPost: data.prevPost,
        nextPost: data.nextPost,
      }

  const breadcrumbList = isSingle
    ? [
        {
          name: content.page.title,
          href: content.page.uri,
        },
      ]
    : [
        {
          name: content.categories.nodes[0].name,
          href: content.categories.nodes[0].uri,
        },
        {
          name: content.title,
          href: content.uri,
        },
      ]

  return (
    <>
      <Layout
        data={data}
        breadcrumbList={breadcrumbList}
        isPostPage={isSingle ? false : true}
      >
        <Main data={content} isSingle={isSingle} />
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

  // posts
  const allPaths: { uri: string }[] = await client
    .getAllPaths()
    .then((data) => data.posts.nodes)

  const paths = allPaths.map(({ uri }) => uri)

  // single
  let single = await client.getAllFixedPage().then((data) => data.pages.edges)

  single = single.filter(({ node }) => node.slug !== 'thanks')
  const singlePaths: string[] = single.map(({ node }) => node.uri)

  paths.push(...singlePaths)
  console.log(paths)
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
  let slug = params?.slug
  const permalink = Array.isArray(slug) ? slug.join('/') : (slug as string)
  const graphQLCluent = new GraphQLClient(
    process.env.END_POINT ?? 'https://tekrog.com/graphql'
  )
  const client = getSdk(graphQLCluent)

  let isSingle: boolean
  let data: any

  const single = await client.getAllFixedPage().then((data) => data.pages.edges)

  let singleSlug: string[] = single.map(({ node }) => node.slug)
  if (singleSlug.includes(permalink)) {
    isSingle = true
    const target = single.filter((edge) => edge.node.uri === `/${permalink}/`)

    const cursor: string = target[0].cursor

    data = await client.getFixedPage({
      id: cursor,
    })
  } else {
    isSingle = false
    const edges = await client
      .getAllPathsAndCursor()
      .then((data) => data.posts.edges)

    const target = edges.filter((edge) => edge.node.uri === `/${permalink}/`)

    const cursor: string = target[0].cursor

    const queryParams = {
      id: cursor,
      key: cursor,
    }

    data = await client.getPostPage(queryParams)
  }

  return {
    props: {
      data,
      isSingle,
    },
  }
}
