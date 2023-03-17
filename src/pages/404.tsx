import { faWarning } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GraphQLClient } from 'graphql-request'
import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import styled from 'styled-components'

import Layout from '@/components/layout/Layout'
import { getSdk } from '@/graphql/generated/request'

import MainIconTitle from './../components/organisms/parts/main/common/MainIconTitle'

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
  data: any
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
      <Layout data={data} breadcrumbList={breadcrumbList}>
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

  const data = await client.getNotFoundPage()

  return {
    props: {
      data,
    },
  }
}
