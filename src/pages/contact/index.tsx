import { GraphQLClient } from 'graphql-request'
import type { GetStaticProps, NextPage } from 'next'

import Layout from '@/components/layout/Layout'
import { getSdk } from '@/graphql/generated/request'

import MainContact from '../../components/organisms/parts/main/contact/MainContact'

type ContactProps = {
  data: any
}

const Contact: NextPage<ContactProps> = ({ data }) => {
  const title = 'お問い合わせ'
  const desc = 'お問い合わせのページです。'
  const url = "/contact"
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
    url
  }

  return (
    <Layout
      data={data}
      breadcrumbList={breadcrumbList}
      meta={meta}
    >
      <MainContact />
    </Layout>
  )
}

export default Contact

export const getStaticProps: GetStaticProps<ContactProps> = async () => {
  const graphQLCluent = new GraphQLClient(
    process.env.END_POINT ?? 'https://tekrog.com/graphql'
  )
  const client = getSdk(graphQLCluent)
  const data = await client.getContactPage()

  return {
    props: {
      data,
    },
  }
}
