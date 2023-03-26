import { GraphQLClient } from 'graphql-request'
import type { GetStaticProps, NextPage } from 'next'

import Layout from '@/components/layout/Layout'
import type {
  GetArchivePostsQuery,
  GetCategoriesQuery,
  GetContactPageQuery,
  GetRecentPostsQuery,
} from '@/graphql/generated/request'
import { getSdk } from '@/graphql/generated/request'

import MainContact from '../../components/organisms/parts/main/contact/MainContact'

type ContactProps = {
  data: GetContactPageQuery
}

const Contact: NextPage<ContactProps> = ({ data }) => {
  const title = 'お問い合わせ完了'
  const desc = 'お問い合わせ完了のページです。'
  const url = '/contact/thanks'
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
    <Layout data={data} breadcrumbList={breadcrumbList} meta={meta}>
      <MainContact isPosted={true} />
    </Layout>
  )
}

export default Contact

export const getStaticProps: GetStaticProps<ContactProps> = async () => {
  const graphQLCluent = new GraphQLClient(
    process.env.END_POINT ?? 'https://tekrog.com/graphql'
  )
  const client = getSdk(graphQLCluent)
  const [recentPost, categories, archivePosts] = await Promise.all<
    [
      Promise<GetRecentPostsQuery>,
      Promise<GetCategoriesQuery>,
      Promise<GetArchivePostsQuery>
    ]
  >([client.getRecentPosts(), client.getCategories(), client.getArchivePosts()])
  const data = {
    recentPost: recentPost.recentPost,
    categories: categories.categories,
    archivePosts: archivePosts.archivePosts,
  }

  return {
    props: {
      data,
    },
  }
}