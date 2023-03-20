import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GraphQLClient } from 'graphql-request'
import type { GetServerSideProps, NextPage } from 'next'

import Layout from '@/components/layout/Layout'
import MainTopPage from '@/components/layout/MainTopPage'
import MainIconTitle from '@/components/organisms/parts/main/common/MainIconTitle'
import { getSdk, type SearchPostsQuery } from '@/graphql/generated/request'

type SearchProps = {
  data: SearchPostsQuery
  query: string
}

const Search: NextPage<SearchProps> = ({ data, query }) => {
  const title = `『${query}』の検索結果`
  const desc = `『${query}』の検索結果を表示するページです。`
  const url = `/search/result?s=${encodeURI(query)}`
  const breadcrumbList: {
    name: string
    href: string
  }[] = [
    {
      name: title,
      href: url,
    },
  ]

  const meta = {
    title,
    desc,
    url,
  }

  return (
    <>
      <Layout data={data} breadcrumbList={breadcrumbList} meta={meta}>
        <MainTopPage
          title={
            <MainIconTitle icon={<FontAwesomeIcon icon={faSearch} />}>
              {title}
            </MainIconTitle>
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
