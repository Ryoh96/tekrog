import { GraphQLClient } from 'graphql-request'
import type { GetStaticProps } from 'next'

import Layout from '@/components/layout/Layout'
import MainAllCategories from '@/components/organisms/parts/main/category/MainAllCategories'
import { getSdk } from '@/graphql/generated/request'

type CategoryProps = {
  data: any
}

const Category = ({ data }: CategoryProps) => {
  const breadcrumbList: {
    name: string
    href: string
  }[] = [
    {
      name: 'カテゴリー',
      href: '/category',
    },
  ]
  return (
    <>
      <Layout data={data} breadcrumbList={breadcrumbList}>
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
