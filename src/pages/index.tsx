import { GraphQLClient } from 'graphql-request'
import type { GetStaticProps, NextPage } from 'next'

import Layout from '@/components/layout/Layout'
import MainTopPage from '@/components/layout/MainTopPage'
import { POSTS_PER_PAGE } from '@/constants/number'
import type {
  GetArchivePostsQuery,
  GetCategoriesQuery,
  GetRecentPostsQuery,
  GetTopPagePostsQuery,
  GetTopPageQuery,
} from '@/graphql/generated/request'
import { getSdk } from '@/graphql/generated/request'

type IndexProps = {
  data: GetTopPageQuery
  totalPages: number
}

const Index: NextPage<IndexProps> = ({ data, totalPages }) => {
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
  const [posts, recentPost, categories, archivePosts] = await Promise.all<
    [
      Promise<GetTopPagePostsQuery>,
      Promise<GetRecentPostsQuery>,
      Promise<GetCategoriesQuery>,
      Promise<GetArchivePostsQuery>
    ]
  >([
    client.getTopPagePosts(queryParams),
    client.getRecentPosts(),
    client.getCategories(),
    client.getArchivePosts(),
  ])

  const data = {
    posts: posts.posts,
    recentPost: recentPost.recentPost,
    categories: categories.categories,
    archivePosts: archivePosts.archivePosts,
  }


  const allCursor = await client
    .getAllCursor()
    .then((data) => data.posts!.edges)

  const totalPosts = allCursor.length
  const totalPages = Math.floor((totalPosts - 1) / POSTS_PER_PAGE + 1)

  return {
    props: {
      data,
      totalPages,
    },
  }
}
