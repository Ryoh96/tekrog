'use client'

import {
  GetPageMetaBySlugDocument,
  GetPageMetaBySlugQuery,
} from '@/graphql/generated/request'
import { useSuspenseQuery } from '@apollo/client'
import * as stylex from '@stylexjs/stylex'
import { usePathname, useSearchParams } from 'next/navigation'
import { SP } from '@/types/BreakPoints'
import { cat2Name, name2Cat } from '@/app/_utils/cat2name'
import Share from '@/app/_components/organisms/Share'
import { Suspense } from 'react'
import Loading from '@/app/loading'
import PageTitle from '../PageTitle'
import PageMeta from './PageMeta'

type Meta = {
  date: string
  modified: string
  categories: {
    nodes: {
      uri?: string
      name: string
    }[]
  }
} | null

const PostPageTitle = ({ pathname }: { pathname: string }) => {
  const { data } = useSuspenseQuery<GetPageMetaBySlugQuery>(
    GetPageMetaBySlugDocument,
    {
      variables: {
        uri: pathname.substring(1),
      },
    },
  )

  let title = data.posts.edges[0]?.node.title ?? ''
  let meta: Meta = data.posts.edges[0]?.node

  return (
    <div {...stylex.props(styles.wrapper)}>
      <Suspense fallback={<Loading />}>
        <PageTitle title={title} />
      </Suspense>
      <PageMeta
        createdAt={meta.date}
        updatedAt={meta.modified}
        categories={meta.categories.nodes.map((node) => ({
          name: node.name,
          uri: `/category/${name2Cat[node.name]}`,
        }))}
        uri={pathname}
      />
      <Share
        title={title}
        url={`${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`}
        style={styles.share}
      />
    </div>
  )
}

const MQ_SP: SP = 768

const styles = stylex.create({
  share: {
    color: '#fff',
    marginBottom: 28,
    marginTop: 32,
    [`@media (max-width: ${MQ_SP}px)`]: {
      justifyContent: 'center',
    },
  },
  wrapper: {
    width: '90%',
    marginInline: 'auto',
    textAlign: 'center',
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default PostPageTitle
