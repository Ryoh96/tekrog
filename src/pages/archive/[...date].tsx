import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GraphQLClient } from 'graphql-request'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Layout from '@/components/layout/Layout'
import MainArchive from '@/components/organisms/parts/main/archive/MainArchive'
import MainIconTitle from '@/components/organisms/parts/main/common/MainIconTitle'
import MainTopPage from '@/components/organisms/parts/main/top/MainTopPage'
import { getSdk } from '@/graphql/generated/request'

type ArchiveProps = {
  data: any
  year: number
  month: number
}

const Archive: NextPage<ArchiveProps> = ({ data, year, month }) => {
  const title = `${year}年${month}月の投稿`
  const breadcrumbList: {
    name: string
    href: string
  }[] = [
    {
      name: title,
      href: `/archive/${year}/${month}`,
    },
  ]

  return (
    <>
      <Layout data={data} breadcrumbList={breadcrumbList} title={title}>
        <MainTopPage
          title={
            <MainIconTitle icon={<FontAwesomeIcon icon={faCalendar} />}>
              {title}
            </MainIconTitle>
          }
          posts={data.posts}
          totalPages={1}
          current={1}
          type={`/archive/${year}/${month}/`}
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
