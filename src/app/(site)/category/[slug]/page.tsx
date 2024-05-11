import { POSTS_PER_PAGE } from '@/constants/numbers'
import { getClient } from '@/graphql/apollo/client'
import {
  GetAllCategoriesDocument,
  GetAllCategoryNameDocument,
  GetAllCategoryNameQuery,
  GetCategoryCursorDocument,
  GetCategoryCursorQuery,
  GetCategoryDocument,
  GetCategoryQuery,
} from '@/graphql/generated/request'
import CardGridLayout from '../../_components/layout/TwoColumnsContainer/MainArea/CardGridLayout'
import { meta } from '@/app/_libs/meta'
import { cat2Name } from '@/app/_utils/cat2name'

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string
  }
}) {
  return meta({
    title: `${cat2Name[params.slug]}の記事一覧`,
    description: `カテゴリー別のページで、${cat2Name[params.slug]}の記事一覧です。`,
    url: `/category/${params.slug}`,
  })
}

export async function generateStaticParams() {
  const { data } = await getClient().query<GetAllCategoryNameQuery>({
    query: GetAllCategoryNameDocument,
  })

  return data.categories?.nodes.map((node) => ({
    slug: `${node.slug}`,
  }))
}

const Page = async ({
  params,
}: {
  params: {
    slug: string
  }
}) => {
  const categoryName = params.slug
  const [posts, cursors] = await Promise.all([
    getClient().query<GetCategoryQuery>({
      query: GetCategoryDocument,
      variables: {
        first: POSTS_PER_PAGE,
        categoryName,
      },
    }),
    getClient().query<GetCategoryCursorQuery>({
      query: GetCategoryCursorDocument,
      variables: {
        categoryName,
      },
    }),
  ])

  return (
    <CardGridLayout
      posts={posts.data.posts.nodes}
      totalPages={Math.floor(
        (cursors.data.posts.edges.length - 1) / POSTS_PER_PAGE + 1,
      )}
      type={`/category/${categoryName}/`}
    />
  )
}

export default Page
