import { getClient } from '@/graphql/apollo/client'
import {
  GetAllPostDateDocument,
  GetAllPostDateQuery,
  GetArchiveDocument,
  GetArchivePageQuery,
} from '@/graphql/generated/request'
import { notFound } from 'next/navigation'
import CardGridLayout from '../../_components/layout/TwoColumnsContainer/MainArea/CardGridLayout'
import { meta } from '@/app/_libs/meta'

export async function generateMetadata({
  params,
}: {
  params: {
    date: string[]
  }
}) {
  const [year, month] = [Number(params.date[0]), Number(params.date[1])]

  return meta({
    title: `${year}年${month}月のアーカイブ`,
    description: `${year}年${month}月のアーカイブ一覧です。`,
    url: `/archive/${year}/${month}`,
  })
}

export async function generateStaticParams() {
  const { data } = await getClient().query<GetAllPostDateQuery>({
    query: GetAllPostDateDocument,
  })

  const date = data?.posts.edges.map((edge) => edge?.node?.date?.slice(0, 7))
  const yearMonthSet = new Set<string | undefined>(date)

  const yearMonthList = Array.from(yearMonthSet).map((ym) => ym?.split('-'))

  return yearMonthList.map((ym) => ({ date: ym }))
}

const Page = async ({
  params,
}: {
  params: {
    date: string[]
  }
}) => {
  const [year, month] = [Number(params.date[0]), Number(params.date[1])]

  if (params.date.length !== 2 || isNaN(year) || isNaN(month)) {
    notFound()
  }

  const { data } = await getClient().query<GetArchivePageQuery>({
    query: GetArchiveDocument,
    variables: {
      year,
      month,
    },
  })

  return <CardGridLayout posts={data.posts.nodes} totalPages={1} />
}

export default Page
