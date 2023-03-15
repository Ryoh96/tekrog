import { GraphQLClient } from 'graphql-request'
import type { GetServerSideProps } from 'next'

import { getSdk } from '@/graphql/generated/request.ts'

type SearchProps = {
  data: any
}

const Search = ({ data }: SearchProps) => {
  return (
    <>
      <>{console.log(data)}</>
    </>
  )
}

export default Search

export const getServerSideProps: GetServerSideProps<SearchProps> = async (
  context
) => {
  const receivedQuery = context.query.s as any as string
  const query = decodeURI(receivedQuery)
  console.log(5555,query)
  const params = { first: 100, query }

  const graphQLClient = new GraphQLClient(
    process.env.END_POINT ?? 'https://tekrog.com/graphql'
  )
  const client = getSdk(graphQLClient)

  const data = await client.searchPosts(params)

  return {
    props: {
      data,
    },
  }
}
