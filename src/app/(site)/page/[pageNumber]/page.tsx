import { POSTS_PER_PAGE } from '@/constants/numbers'
import { getClient } from '@/graphql/apollo/client'
import {
  GetAllCursorDocument,
  GetAllCursorQuery,
  GetTopPagePostsDocument,
  GetTopPagePostsQuery,
} from '@/graphql/generated/request'
import { notFound } from 'next/navigation'
import React from 'react'
import CardGridLayout from '../../_components/layout/TwoColumnsContainer/MainArea/CardGridLayout'
import { meta } from '@/app/_libs/meta'

export function generateMetadata() {
  return meta({})
}

export async function generateStaticParams() {
  const { data: cursorsData } = await getClient().query<GetAllCursorQuery>({
    query: GetAllCursorDocument,
  })

  const totalPosts = cursorsData.posts.edges?.length ?? 1
  const totalPage = Math.floor((totalPosts - 1) / POSTS_PER_PAGE + 1)

  return [...Array(totalPage - 1)].map((_, i) => ({
    pageNumber: `${i + 2}`,
  }))
}

const Page = async ({
  params,
}: {
  params: {
    pageNumber: number
  }
}) => {
  const pageNumber = Number(params.pageNumber)

  if (isNaN(pageNumber)) {
    notFound()
  }

  const { data: cursorsData } = await getClient().query<GetAllCursorQuery>({
    query: GetAllCursorDocument,
  })

  const cursors = cursorsData.posts.edges

  const { data: postData } = await getClient().query<GetTopPagePostsQuery>({
    query: GetTopPagePostsDocument,
    variables: {
      first: POSTS_PER_PAGE,
      after: cursors[(pageNumber - 1) * POSTS_PER_PAGE - 1].cursor,
    },
  })

  return (
    <CardGridLayout
      posts={postData.posts.nodes}
      totalPages={Math.floor(
        (cursorsData.posts.edges.length - 1) / POSTS_PER_PAGE + 1,
      )}
      current={pageNumber}
    />
  )
}

export default Page
