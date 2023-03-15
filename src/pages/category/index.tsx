import { GraphQLClient } from 'graphql-request'
import type { GetStaticProps } from 'next'

import Layout from '@/components/layout/Layout'
import MainCategory from '@/components/organisms/MainCategory'
import { getSdk } from '@/graphql/generated/request.ts'

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
        <MainCategory nodes={data.mainCategory.nodes} />
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
