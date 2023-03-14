import { GraphQLClient } from 'graphql-request'
import type { GetStaticPaths, GetStaticProps } from 'next'

import Layout from '@/components/layout/Layout'
import MainTop from '@/components/organisms/MainTop'
import { POSTS_PER_PAGE } from '@/constants/number'
import { getSdk } from '@/graphql/generated/request.ts'

type CategoryPageProps = {
  data: any
  pageNum: number
  categoryName: string
  totalPages: number
}

const CategoryPage = ({
  data,
  categoryName,
  totalPages,
  pageNum,
}: CategoryPageProps) => {
  const breadcrumbList: {
    name: string
    href: string
  }[] = [
    {
      name: categoryName,
      href: `/${categoryName}`,
    },
    {
      name: `ページ${pageNum}`,
      href: `/${categoryName}/page/${pageNum}`,
    },
  ]
  return (
    <>
      <Layout data={data} breadcrumbList={breadcrumbList}>
        <MainTop
          posts={data.posts}
          totalPages={totalPages}
          type={`/category/${categoryName}/`}
          current={pageNum}
          pageInfo={{
            type: 'category',
            name: categoryName,
          }}
        />
      </Layout>
    </>
  )
}

export default CategoryPage

export const getStaticPaths: GetStaticPaths = async () => {
  const graphQLClient = new GraphQLClient(
    process.env.END_POINT ?? 'https://tekrog.com/graphql'
  )
  const client = getSdk(graphQLClient)

  const allCategories = await client
    .getAllCategoryName()
    .then((data) => data.categories.nodes)
  const allCategoryNames = allCategories.map(({ slug }) => slug)
  const paths: string[] = []
  for (const categoryName of allCategoryNames) {
    const allCursor: { cursor: string }[] = await client
      .getCategoryCursor({ categoryName })
      .then((data) => data.posts.edges)
    const totalPosts = allCursor.length
    const totalPage = Math.floor((totalPosts - 1) / POSTS_PER_PAGE + 1)

    if (totalPage > 1) {
      for (let i = 2; i <= totalPage; i++) {
        paths.push(`/category/${categoryName}/page/${i}`)
      }
    }
  }
  console.log(paths)
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<CategoryPageProps> = async ({
  params,
}) => {
  const categoryName = params?.slug as string
  const pageNum = Number(params?.id)

  const graphQLClient = new GraphQLClient(
    process.env.END_POINT ?? 'https://tekrog.com/graphql'
  )
  const client = getSdk(graphQLClient)

  const allCursor: { cursor: string }[] = await client
    .getCategoryCursor({ categoryName })
    .then((data) => data.posts.edges)

  const queryParams = {
    after: allCursor[(pageNum - 1) * POSTS_PER_PAGE - 1].cursor,
    first: POSTS_PER_PAGE,
    categoryName,
  }
  const data = await client.getCategoryPage(queryParams)

  const totalPosts = allCursor.length
  const totalPages = Math.floor((totalPosts - 1) / POSTS_PER_PAGE + 1)

  return {
    props: {
      data,
      pageNum,
      categoryName,
      totalPages,
    },
  }
}
