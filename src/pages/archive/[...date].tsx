import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GraphQLClient } from 'graphql-request'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Layout from '@/components/layout/Layout'
import MainIconTitle from '@/components/templates/main/common/MainIconTitle'
import MainTopPage from '@/components/templates/main/top/MainTopPage'
import type {
  GetArchivePageQuery,
  GetArchivePostsQuery,
  GetArchiveQuery,
  GetCategoriesQuery,
  GetRecentPostsQuery,
} from '@/graphql/generated/request'
import { getSdk } from '@/graphql/generated/request'

type ArchiveProps = {
  data: GetArchivePageQuery
  year: number
  month: number
}

const Archive: NextPage<ArchiveProps> = ({ data, year, month }) => {
  const title = `${year}年${month}月の投稿`
  const desc = `${year}年${month}月の投稿記事一覧です。` 
  const url = `/archive/${year}/${month}`
  const breadcrumbList: {
    name: string
    href: string
  }[] = [
    {
      name: title,
      href: url,
    },
  ]

  const meta = {
    title,
    desc,
    url,
  }

  return (
    <>
      <Layout
        data={data}
        breadcrumbList={breadcrumbList}
        meta={meta}
        title="アーカイブ"
      >
        <MainTopPage
          title={
            <MainIconTitle icon={<FontAwesomeIcon icon={faCalendar} />}>
              {title}
            </MainIconTitle>
          }
          posts={data.posts}
          totalPages={1}
          current={1}
          type={`/archive/${year}/${month}/`}
        />
      </Layout>
    </>
  )
}

export default Archive

export const getStaticPaths: GetStaticPaths = async () => {
  const graphQLClient = new GraphQLClient(
    process.env.END_POINT ?? 'https://tekrog.com/graphql'
  )
  const client = getSdk(graphQLClient)

  const allDate = await client.getAllPostDate().then((data) => data.posts)
  const date = allDate?.edges.map((edge) => edge?.node?.date?.slice(0, 7))
  const yearMonthSet = new Set<string | undefined>(date)

  const yearMonthList: (string | undefined)[] = [...yearMonthSet].map((ym) =>
    ym?.replace('-', '/')
  )

  const paths = yearMonthList.map((ym) => `/archive/${ym}`)

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<ArchiveProps> = async ({
  params,
}) => {
  const [year, month] = params?.date as any as number[]
  const graphQLClient = new GraphQLClient(
    process.env.END_POINT ?? 'https://tekrog.com/graphql'
  )
  const client = getSdk(graphQLClient)

  const queryParams = {
    year: Number(year),
    month: Number(month),
  }

  const [posts, recentPost, categories, archivePosts] = await Promise.all<
    [
      Promise<GetArchiveQuery>,
      Promise<GetRecentPostsQuery>,
      Promise<GetCategoriesQuery>,
      Promise<GetArchivePostsQuery>
    ]
  >([
    client.getArchive(queryParams),
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

  return {
    props: {
      data,
      year,
      month,
    },
  }
}
