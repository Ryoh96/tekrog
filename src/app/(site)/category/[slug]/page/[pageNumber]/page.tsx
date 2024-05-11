import CardGridLayout from '@/app/(site)/_components/layout/TwoColumnsContainer/MainArea/CardGridLayout'
import { meta } from '@/app/_libs/meta'
import { cat2Name } from '@/app/_utils/cat2name'
import { POSTS_PER_PAGE } from '@/constants/numbers'
import { getClient } from '@/graphql/apollo/client'
import {
  GetAllCategoryNameDocument,
  GetAllCategoryNameQuery,
  GetCategoryCursorDocument,
  GetCategoryCursorQuery,
  GetCategoryDocument,
  GetCategoryQuery,
} from '@/graphql/generated/request'
import { notFound } from 'next/navigation'

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string
    pageNumber: string
  }
}) {
  return meta({
    title: `${cat2Name[params.slug]}の記事一覧`,
    description: `カテゴリー別のページで、${cat2Name[params.slug]}の記事一覧の${params.pageNumber}ページ目です。`,
    url: `/category/${params.slug}`,
  })
}

export async function generateStaticParams() {
  const { data } = await getClient().query<GetAllCategoryNameQuery>({
    query: GetAllCategoryNameDocument,
  })

  const allCategoryName = data.categories.nodes.map(
    ({ slug }) => slug,
  ) as string[]

  const paths: { slug: string; pageNumber: string }[] = []

  for (const categoryName of allCategoryName) {
    const { data: cursorData } =
      await getClient().query<GetCategoryCursorQuery>({
        query: GetCategoryCursorDocument,
        variables: {
          categoryName,
        },
      })

    const totalPosts = cursorData.posts.edges?.length
    const totalPages = Math.floor((totalPosts - 1) / POSTS_PER_PAGE + 1)

    if (totalPages > 1) {
      for (let i = 2; i <= totalPages; i++) {
        paths.push({ slug: categoryName, pageNumber: `${i}` })
      }
    }
  }

  return paths
}

const Page = async ({
  params,
}: {
  params: {
    slug: string
    pageNumber: string
  }
}) => {
  const categoryName = params.slug
  const pageNumber = Number(params.pageNumber)

  if (isNaN(pageNumber)) {
    notFound()
  }

  const { data: cursorData } = await getClient().query<GetCategoryCursorQuery>({
    query: GetCategoryCursorDocument,
    variables: {
      categoryName: params.slug,
    },
  })

  const { data: postData } = await getClient().query<GetCategoryQuery>({
    query: GetCategoryDocument,
    variables: {
      first: POSTS_PER_PAGE,
      after:
        cursorData.posts.edges[(pageNumber - 1) * POSTS_PER_PAGE - 1].cursor,
      categoryName: params.slug,
    },
  })

  return (
    <CardGridLayout
      posts={postData.posts.nodes}
      totalPages={Math.floor(
        (cursorData.posts.edges.length - 1) / POSTS_PER_PAGE + 1,
      )}
      type={`/category/${categoryName}/`}
      current={pageNumber}
    />
  )
}

export default Page
