import { GraphQLClient } from 'graphql-request'
import type { GetStaticPaths, GetStaticProps } from 'next'

import Layout from '@/components/layout/Layout'
import MainEachCategory from '@/components/organisms/parts/main/category/MainEachCategory'
import { POSTS_PER_PAGE } from '@/constants/number'
import { getSdk } from '@/graphql/generated/request'
import type { CategoryType } from '@/types/CategoryType'
import { cat2Name } from '@/utils/cat2name'

type CategoryProps = {
  data: any
  categoryName: string
  totalPages: number
}

const Category = ({ data, categoryName, totalPages }: CategoryProps) => {
  const breadcrumbList: {
    name: string
    href: string
  }[] = [
    {
      name: 'カテゴリー',
      href: '/category',
    },
    {
      name: cat2Name[categoryName as CategoryType],
      href: `/${categoryName}`,
    },
  ]
  return (
    <>
      <Layout data={data} breadcrumbList={breadcrumbList}>
        <MainEachCategory
          posts={data.posts}
          totalPages={totalPages}
          category={categoryName}
          type={`/category/${categoryName}/`}
        />
      </Layout>
    </>
  )
}

export default Category

export const getStaticPaths: GetStaticPaths = async () => {
  const graphQLClient = new GraphQLClient(
    process.env.END_POINT ?? 'https://tekrog.com/graphql'
  )
  const client = getSdk(graphQLClient)

  const allCategories = await client
    .getAllCategoryName()
    .then((data) => data.categories!.nodes)
  const paths = allCategories.map(({ slug }) => `/category/${slug}`)
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<CategoryProps> = async ({
  params,
}) => {
  const categoryName = params?.slug as string
  const graphQLClient = new GraphQLClient(
    process.env.END_POINT ?? 'https://tekrog.com/graphql'
  )
  const client = getSdk(graphQLClient)

  const allCursor: any[] = await client
    .getCategoryCursor({ categoryName })
    .then((data) => data.posts!.edges)

  const queryParams = {
    first: POSTS_PER_PAGE,
    categoryName,
  }
  const data = await client.getCategoryPage(queryParams)

  const totalPosts = allCursor.length
  const totalPages = Math.floor((totalPosts - 1) / POSTS_PER_PAGE + 1)

  return {
    props: {
      data,
      categoryName,
      totalPages,
    },
  }
}
