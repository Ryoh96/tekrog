import { GraphQLClient } from 'graphql-request'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'
import styled from 'styled-components'

import Layout from '@/components/layout/Layout'
import Main from '@/components/templates/main/common/Main'
import type { Category } from '@/graphql/generated/graphql'
import type {
  GetArchivePostsQuery,
  GetCategoriesQuery,
  GetFixedPageQuery,
  GetFixedQuery,
  GetPostPageQuery,
  GetRecentPostsQuery,
} from '@/graphql/generated/request'
import { getSdk } from '@/graphql/generated/request'
import type {
  FixedPageQuery,
  NextPost,
  PostPageQuery,
  PrevPost,
} from '@/types/Page'

const ImageWrapper = styled.figure`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;

  background-color: #000;
  background: ${({ theme }) => theme.gradient.dark};

  @keyframes fade {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
  img {
    position: static !important;
    animation: fade 2s;
    max-width: 600px !important;
    margin: 0 auto !important;
  }
`

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
  } else {
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
  const postInfo = isSingle
    ? undefined
    : {
        date: (content as PostPageQuery).date,
        categories: (content as PostPageQuery).categories as {
          nodes: Category[]
        },
        uri: (content as PostPageQuery).uri,
      }

  return (
    <>
      <Layout
        data={data}
        breadcrumbList={breadcrumbList}
        isPostPage={isSingle ? false : true}
        meta={meta}
        title={content.title}
        post={postInfo}
        hero={
          !isSingle ? (
            <ImageWrapper>
              <Image
                src={
                  (content as PostPageQuery)?.featuredImage?.node.sourceUrl ??
                  '/thumb-tekrog.png'
                }
                alt="thumbnail"
                fill
                style={{
                  objectFit: 'cover',
                  aspectRatio: '1700 / 825',
                }}
                sizes="50vw"
                quality={60}
                placeholder="blur"
                blurDataURL={blurImg ?? ''}
                loading="eager"
                priority
              />
            </ImageWrapper>
          ) : undefined
        }
      >
        <Main data={content} isSingle={isSingle} />
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
  const [recentPost, categories, archivePosts] = await Promise.all<
    [
      Promise<GetRecentPostsQuery>,
      Promise<GetCategoriesQuery>,
      Promise<GetArchivePostsQuery>
    ]
  >([client.getRecentPosts(), client.getCategories(), client.getArchivePosts()])

  const single = await client
    .getAllFixedPage()
    .then((data) => data.pages?.edges)

  let singleSlug = single?.map(({ node }) => node.slug)
  if (singleSlug?.includes(permalink)) {
    isSingle = true
    const target = single?.filter((edge) => edge.node.uri === `/${permalink}/`)

    const cursor = target?.[0].cursor

    const page = await client.getFixed({
      id: cursor,
    })

    data = {
      page: page.page,
      recentPost: recentPost.recentPost,
      categories: categories.categories,
      archivePosts: archivePosts.archivePosts,
    }

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

    const post = await client.getPost(queryParams)
    data = {
      post: post.post,
      prevPost: post.prevPost,
      nextPost: post.nextPost,
      recentPost: recentPost.recentPost,
      categories: categories.categories,
      archivePosts: archivePosts.archivePosts,
    } as any as GetPostPageQuery

    if (isGetPostPageQuery(data)) {
      const { base64 } = await getPlaiceholder(
        data.post?.featuredImage?.node.sourceUrl ?? '/thumb-tekrog.png'
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
