import WordPressTextWrapper from '@/app/_components/layouts/WordPressTextWrapper'
import { meta } from '@/app/_libs/meta'
import { getClient } from '@/graphql/apollo/client'
import {
  GetStaticPageDocument,
  GetStaticPageQuery,
} from '@/graphql/generated/request'
import { Metadata } from 'next'

export function generateMetadata() {
  return meta({
    title: 'プライバシーポリシー',
    description: 'このブログのプライバシーポリシーです。',
    url: '/privacy-policy',
  })
}

const Page = async () => {
  const { data } = await getClient().query<GetStaticPageQuery>({
    query: GetStaticPageDocument,
    variables: {
      name: 'privacy-policy',
    },
  })
  return (
    <WordPressTextWrapper>{data.pages.nodes[0].content}</WordPressTextWrapper>
  )
}

export default Page
