import { faWarning } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GraphQLClient } from 'graphql-request'
import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import styled from 'styled-components'

import Layout from '@/components/layout/Layout'
import MainIconTitle from '@/components/templates/main/common/MainIconTitle'
import type {
  GetArchivePostsQuery,
  GetCategoriesQuery,
  GetNotFoundPageQuery,
  GetRecentPostsQuery,
} from '@/graphql/generated/request'
import { getSdk } from '@/graphql/generated/request'

const Text = styled.p`
  margin-top: 30px;
  margin-bottom: 20px;
  text-align: center;
`

const StyledLink = styled(Link)`
  display: block;
  margin-inline: auto;
  text-align: center;
  text-decoration: underline;
  &:hover {
    opacity: 0.6;
  }
`

type NotFoundProps = {
  data: GetNotFoundPageQuery
}

const NotFound: NextPage<NotFoundProps> = ({ data }: NotFoundProps) => {
  const breadcrumbList: {
    name: string
    href: string
  }[] = [
    {
      name: 'お探しのページが見つかりません',
      href: '',
    },
  ]

  return (
    <>
      <Layout
        data={data}
        breadcrumbList={breadcrumbList}
        title="404 NOT FOUND!"
      >
        <MainIconTitle icon={<FontAwesomeIcon icon={faWarning} />}>
          404 お探しのページが見つかりません
        </MainIconTitle>
        <Text>お探しのページが見つかりませんでした。</Text>
        <StyledLink href="/">
          こちらからトップページへお戻りください。
        </StyledLink>
      </Layout>
    </>
  )
}

export default NotFound

export const getStaticProps: GetStaticProps<NotFoundProps> = async () => {
  const graphQLCluent = new GraphQLClient(
    process.env.END_POINT ?? 'https://tekrog.com/graphql'
  )
  const client = getSdk(graphQLCluent)

  const [recentPost, categories, archivePosts] = await Promise.all<
    [
      Promise<GetRecentPostsQuery>,
      Promise<GetCategoriesQuery>,
      Promise<GetArchivePostsQuery>
    ]
  >([client.getRecentPosts(), client.getCategories(), client.getArchivePosts()])

  const data = {
    recentPost: recentPost.recentPost,
    categories: categories.categories,
    archivePosts: archivePosts.archivePosts,
  }

  return {
    props: {
      data,
    },
  }
}
