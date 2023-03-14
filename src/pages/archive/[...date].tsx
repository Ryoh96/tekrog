import { GraphQLClient } from 'graphql-request'
import type { GetStaticPaths, GetStaticProps } from 'next'

import Layout from '@/components/layout/Layout'
import MainTop from '@/components/organisms/MainTop'
import { getSdk } from '@/graphql/generated/request.ts'

type ArchiveProps = {
  data: any
  year: number
  month: number
}

const Archive = ({ data, year, month }: ArchiveProps) => {
  const breadcrumbList: {
    name: string
    href: string
  }[] = [
    {
      name: `${year}年${month}月の投稿`,
      href: `/archive/${year}/${month}`,
    },
  ]

  return (
    <>
      <Layout data={data} breadcrumbList={breadcrumbList}>
        <MainTop
          posts={data.posts}
          totalPages={1}
          type={`/archive/${year}/${month}/`}
          pageInfo = {{
            type: "archive",
            name: `${year}年${month}月`
          }}
        />
      </Layout>
    </>
  )
}

export default Archive

export const getStaticPaths: GetStaticPaths = async () => {
  const graphQLClient = new GraphQLClient(
    process.env.END_POINT ?? 'https://tekrog.com/graphql'
  )
  const client = getSdk(graphQLClient)

  const allDate = await client.getAllPostDate().then((data) => data.posts)
  const date = allDate.edges.map((edge) => edge.node.date.slice(0, 7))
  const yearMonthSet = new Set<string>(date)

  const yearMonthList: string[] = [...yearMonthSet].map((ym) =>
    ym.replace('-', '/')
  )

  const paths = yearMonthList.map((ym) => `/archive/${ym}`)

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<ArchiveProps> = async ({
  params,
}) => {
  const [year, month] = params?.date as any as number[]
  const graphQLClient = new GraphQLClient(
    process.env.END_POINT ?? 'https://tekrog.com/graphql'
  )
  const client = getSdk(graphQLClient)

  const data = await client.getArchivePage({
    year: Number(year),
    month: Number(month),
  })

  return {
    props: {
      data,
      year,
      month,
    },
  }
}
