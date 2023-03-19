import { GraphQLClient } from 'graphql-request'
import type { GetStaticProps, NextPage } from 'next'

import Layout from '@/components/layout/Layout'
import MainAllCategories from '@/components/organisms/parts/main/category/MainAllCategories'
import {
  type GetAllCategoriesPageQuery,
  getSdk,
} from '@/graphql/generated/request'

type CategoryProps = {
  data: GetAllCategoriesPageQuery
}

const Category: NextPage<CategoryProps> = ({ data }) => {
  const title = 'カテゴリー'
  const desc = 'カテゴリー一覧のページです。'
  const url = '/category'
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
      <Layout data={data} breadcrumbList={breadcrumbList} meta={meta}>
        <MainAllCategories nodes={data.mainCategory.nodes} />
      </Layout>
    </>
  )
}

export default Category

export const getStaticProps: GetStaticProps<CategoryProps> = async () => {
  const graphQLCluent = new GraphQLClient(
    process.env.END_POINT ?? 'https://tekrog.com/graphql'
  )
  const client = getSdk(graphQLCluent)

  const data = await client.getAllCategoriesPage()

  return {
    props: {
      data,
    },
  }
}
