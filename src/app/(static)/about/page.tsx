import WordPressTextWrapper from '@/app/_components/layouts/WordPressTextWrapper'
import { meta } from '@/app/_libs/meta'
import { getClient } from '@/graphql/apollo/client'
import {
  GetStaticPageDocument,
  GetStaticPageQuery,
} from '@/graphql/generated/request'

export function generateMetadata() {
  return meta({
    title: 'このページについて',
    description: 'このブログのAboutページです',
    url: '/about',
  })
}

const Page = async () => {
  const { data } = await getClient().query<GetStaticPageQuery>({
    query: GetStaticPageDocument,
    variables: {
      name: 'about',
    },
  })
  return (
    <WordPressTextWrapper>{data.pages.nodes[0].content}</WordPressTextWrapper>
  )
}

export default Page
