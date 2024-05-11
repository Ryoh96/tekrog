import { POSTS_PER_PAGE } from '@/constants/numbers'
import { getClient } from '@/graphql/apollo/client'
import {
  GetAllCursorDocument,
  GetAllCursorQuery,
  GetTopPagePostsDocument,
  GetTopPagePostsQuery,
} from '@/graphql/generated/request'
import CardGridLayout from './_components/layout/TwoColumnsContainer/MainArea/CardGridLayout'
import { meta } from '../_libs/meta'

export function generateMetadata() {
  return meta({})
}

export default async function Home() {
  const [posts, cursors] = await Promise.all([
    getClient().query<GetTopPagePostsQuery>({
      query: GetTopPagePostsDocument,
      variables: {
        first: POSTS_PER_PAGE,
      },
    }),
    getClient().query<GetAllCursorQuery>({
      query: GetAllCursorDocument,
    }),
  ])

  return (
    <CardGridLayout
      posts={posts.data.posts.nodes}
      totalPages={Math.floor(
        (cursors.data.posts.edges.length - 1) / POSTS_PER_PAGE + 1,
      )}
    />
  )
}
