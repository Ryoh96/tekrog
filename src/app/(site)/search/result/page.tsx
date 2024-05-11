import { getClient } from '@/graphql/apollo/client'
import { GetSearchDocument, GetSearchQuery } from '@/graphql/generated/request'
import CardGridLayout from '../../_components/layout/TwoColumnsContainer/MainArea/CardGridLayout'
import { meta } from '@/app/_libs/meta'

export function generateMetadata({}) {
  return meta({
    title: 'ブログ内検索結果',
    description: 'ブログ内の記事の検索結果です。',
  })
}

const Page = async ({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const receivedQuery = searchParams.s as string
  const query = decodeURI(receivedQuery)

  const { data } = await getClient().query<GetSearchQuery>({
    query: GetSearchDocument,
    variables: {
      first: 100,
      query,
    },
  })

  return <CardGridLayout posts={data.posts.nodes} totalPages={1} />
}

export default Page
