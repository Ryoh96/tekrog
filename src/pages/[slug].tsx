import { GraphQLClient } from 'graphql-request'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { getPlaiceholder } from 'plaiceholder'

import Layout from '@/components/layout/Layout'
import Main from '@/components/organisms/parts/main/common/Main'
import type {
  GetFixedPageQuery,
  GetPostPageQuery,
} from '@/graphql/generated/request'
import { getSdk } from '@/graphql/generated/request'
import type {
  FixedPageQuery,
  NextPost,
  PostPageQuery,
  PrevPost,
} from '@/types/Page'

type PostProps = {
  data: GetFixedPageQuery | GetPostPageQuery | undefined
  isSingle: boolean
  blurImg: string | null
}

const Post: NextPage<PostProps> = ({ data, isSingle, blurImg }) => {
  let content: FixedPageQuery | PostPageQuery
  if (isGetPostPageQuery(data)) {
    content = {
      ...data.post,
      prevPost: data.prevPost?.nodes[0] as PrevPost,
      nextPost: data.nextPost?.nodes[0] as NextPost,
    }
  } else  {
    content = data!.page
  }

  const title = content?.title as string

  let desc: string | undefined
  let imgUrl: string | undefined

  if (isGetFixedPageQuery(data)) {
    desc = `『${title}』のページです。`
  } else if (isGetPostPageQuery(data)) {
    const excerpt = data.post?.excerpt as string
    desc = /<p>(.*?)<\/p>/.exec(excerpt)?.[1]
    imgUrl = data.post?.featuredImage?.node.sourceUrl as string
  }

  const url = content?.uri as string

  const breadcrumbList = [
    {
      name: title,
      href: url,
    },
  ]

  const meta = {
    title,
    desc,
    url,
    imgUrl,
  }
  return (
    <>
      <Layout
        data={data}
        breadcrumbList={breadcrumbList}
        isPostPage={isSingle ? false : true}
        meta={meta}
      >
        <Main data={content} blurImg={blurImg} isSingle={isSingle} />
      </Layout>
    </>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  const graphQLClient = new GraphQLClient(
    process.env.END_POINT ?? 'https://tekrog.com/graphql'
  )
  const client = getSdk(graphQLClient)

  // posts
  const allPaths = await client.getAllPaths().then((data) => data.posts?.nodes)

  const paths = allPaths?.map(({ uri }) => uri) as string[]

  // single
  let single = await client.getAllFixedPage().then((data) => data.pages?.edges)

  single = single?.filter(({ node }) => node.slug !== 'thanks')
  single = single?.filter(({ node }) => node.slug !== 'contact')
  const singlePaths = single?.map(({ node }) => node.uri) as string[]

  paths.push(...singlePaths)
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
  let slug = params?.slug
  const permalink = Array.isArray(slug) ? slug.join('/') : (slug as string)
  const graphQLClient = new GraphQLClient(
    process.env.END_POINT ?? 'https://tekrog.com/graphql'
  )
  const client = getSdk(graphQLClient)

  let isSingle: boolean
  let data: GetFixedPageQuery | GetPostPageQuery | null = null
  let blurImg: string | null = null

  const single = await client
    .getAllFixedPage()
    .then((data) => data.pages?.edges)

  let singleSlug = single?.map(({ node }) => node.slug)
  if (singleSlug?.includes(permalink)) {
    isSingle = true
    const target = single?.filter((edge) => edge.node.uri === `/${permalink}/`)

    const cursor = target?.[0].cursor

    data = await client.getFixedPage({
      id: cursor,
    })

    if (isGetFixedPageQuery(data))
      return {
        props: {
          data,
          isSingle,
          blurImg: null,
        },
      }
  } else {
    isSingle = false
    const edges = await client
      .getAllPathsAndCursor()
      .then((data) => data.posts?.edges)

    const target = edges?.filter((edge) => edge.node.uri === `/${permalink}/`)

    const cursor = target?.[0].cursor

    const queryParams = {
      id: cursor,
      key: cursor,
    }

    data = (await client.getPostPage(queryParams)) as GetPostPageQuery

    if (isGetPostPageQuery(data)) {
      const { base64 } = await getPlaiceholder(
        data.post?.featuredImage?.node.sourceUrl ?? '/thumb-tekrog.com'
      )
      blurImg = base64
      return {
        props: {
          data,
          isSingle,
          blurImg,
        },
      }
    }
  }
  return {
    props: {
      data: undefined,
      isSingle: false,
      blurImg: null,
    },
  }
}

const isGetFixedPageQuery = (data: any): data is GetFixedPageQuery => {
  return data.hasOwnProperty('page')
}

const isGetPostPageQuery = (data: any): data is GetPostPageQuery => {
  return data.hasOwnProperty('post')
}
