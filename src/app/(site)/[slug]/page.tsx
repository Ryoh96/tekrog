import { getClient } from '@/graphql/apollo/client'
import {
  GetAllPathsAndCursorDocument,
  GetAllPathsAndCursorQuery,
  GetAllPathsDocument,
  GetAllPathsQuery,
  GetPostPageDocument,
  GetPostPageQuery,
} from '@/graphql/generated/request'
import { notFound } from 'next/navigation'
import React from 'react'
import PostFoot from './_components/PostFoot'
import { Category } from '@/graphql/generated/graphql'
import PostBody from './_components/PostBody'
import { meta } from '@/app/_libs/meta'

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string
  }
}) {
  const { post } = await getPostInfo(params.slug)

  return meta({
    title: post.title,
    description: post.excerpt,
    url: `/${params.slug}`,
    imgUrl: post.featuredImage?.node.sourceUrl ?? '/thumb-tekrog.png',
  })
}

export async function generateStaticParams() {
  const { data } = await getClient().query<GetAllPathsQuery>({
    query: GetAllPathsDocument,
  })

  return data.posts.nodes.map((node) => {
    const uri = node.uri.substring(1, node.uri.length - 1)
    return {
      slug: uri,
    }
  })
}

const getPostInfo = async (slug: string) => {
  const { data: cursorData } =
    await getClient().query<GetAllPathsAndCursorQuery>({
      query: GetAllPathsAndCursorDocument,
    })

  const target = cursorData.posts.edges.filter(
    (edge) => edge.node.uri === `/${slug}/`,
  )

  const cursor = target[0]?.cursor

  if (!cursor) {
    notFound()
  }

  const { data } = await getClient().query<GetPostPageQuery>({
    query: GetPostPageDocument,
    variables: {
      id: cursor,
      key: cursor,
    },
  })

  return data
}

const Page = async ({
  params,
}: {
  params: {
    slug: string
  }
}) => {
  const { post, prevPost, nextPost } = await getPostInfo(params.slug)

  return (
    <div>
      <PostBody>{post.content}</PostBody>
      <PostFoot
        categories={post.categories.nodes as Category[]}
        prevPost={prevPost.nodes[0]}
        nextPost={nextPost.nodes[0]}
        title={post.title}
        uri={post.uri}
      />
    </div>
  )
}

export default Page
