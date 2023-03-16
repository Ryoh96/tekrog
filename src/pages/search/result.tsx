import { GraphQLClient } from 'graphql-request'
import type { GetServerSideProps } from 'next'

import Layout from '@/components/layout/Layout'
import MainSearch from '@/components/organisms/parts/main/search/MainSearch'
import { getSdk } from '@/graphql/generated/request'

type SearchProps = {
  data: any
  query: string
}

const Search = ({ data, query }: SearchProps) => {
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
        <MainSearch
          posts={data.posts}
          totalPages={1}
          type={`/search/result?s=${query}/`}
          query={query}
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
