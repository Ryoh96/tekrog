import { getClient } from '@/graphql/apollo/client'
import {
  GetRecentPostsDocument,
  GetRecentPostsQuery,
} from '@/graphql/generated/request'
import React from 'react'
import SideContent from '../SideContent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import HorizontalCard from '@/app/_components/molecules/HorizontalCard'
import * as stylex from '@stylexjs/stylex'

const SideRecentPosts = async () => {
  const { data } = await getClient().query<GetRecentPostsQuery>({
    query: GetRecentPostsDocument,
  })
  return (
    <SideContent
      title="最新の記事"
      icon={<FontAwesomeIcon icon={faNoteSticky} />}
    >
      <div {...stylex.props(styles.div)}>
        {data.recentPost.nodes.map((post) => (
          <Link href={post.uri} key={post.uri}>
            <article>
              <HorizontalCard
                src={post.featuredImage.node.sourceUrl}
                title={post.title}
              />
            </article>
          </Link>
        ))}
      </div>
    </SideContent>
  )
}

const styles = stylex.create({
  div: {
    display: 'grid',
    gap: 18,
    position: 'relative',
    zIndex: 1,
  },
})

export default SideRecentPosts
