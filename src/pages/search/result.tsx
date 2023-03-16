import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GraphQLClient } from 'graphql-request'
import type { GetServerSideProps, NextPage } from 'next'

import Layout from '@/components/layout/Layout'
import MainIconTitle from '@/components/organisms/parts/main/common/MainIconTitle'
import MainSearch from '@/components/organisms/parts/main/search/MainSearch'
import MainTopPage from '@/components/organisms/parts/main/top/MainTopPage'
import { getSdk } from '@/graphql/generated/request'

type SearchProps = {
  data: any
  query: string
}

const Search: NextPage<SearchProps> = ({ data, query }) => {
  const breadcrumbList: {
    name: string
    href: string
  }[] = [
    {
      name: `『${query}』の検索結果`,
      href: ``,
    },
  ]

  return (
    <>
      <Layout data={data} breadcrumbList={breadcrumbList}>
        <MainTopPage
          title={
            <MainIconTitle
              icon={<FontAwesomeIcon icon={faSearch} />}
            >{`『${query}』の検索結果`}</MainIconTitle>
          }
          posts={data.posts}
          totalPages={1}
          current={1}
          type={`/search/result?s=${query}/`}
        />
      </Layout>
    </>
  )
}

export default Search

export const getServerSideProps: GetServerSideProps<SearchProps> = async (
  context
) => {
  const receivedQuery = context.query.s as any as string
  const query = decodeURI(receivedQuery)
  const params = { first: 100, query }

  const graphQLClient = new GraphQLClient(
    process.env.END_POINT ?? 'https://tekrog.com/graphql'
  )
  const client = getSdk(graphQLClient)

  const data = await client.searchPosts(params)

  return {
    props: {
      data,
      query,
    },
  }
}
