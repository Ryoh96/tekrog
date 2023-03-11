import { faNoteSticky } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import styled from 'styled-components'

import HorizontalCard from '@/components/molecules/HorizontalCard'
import SideContent from '@/components/molecules/SideContent'
import type { Post } from '@/graphql/generated/graphql'

const HorizontalCardWrapper = styled.div`
  display: grid;
  gap: 18px;
`

type SideRecentPostsProps = {
  posts: {
    nodes: Post[]
  }
}

const SideRecentPosts = ({ posts }: SideRecentPostsProps) => {
  return (
    <SideContent
      title="最近の記事"
      icon={<FontAwesomeIcon icon={faNoteSticky} />}
    >
      <HorizontalCardWrapper>
        {posts.nodes.map((post, index) => (
          <Link href={post.link} key={index}>
            <article>
              <HorizontalCard
                src={post.featuredImage.node.sourceUrl}
                title={post.title}
              />
            </article>
          </Link>
        ))}
      </HorizontalCardWrapper>
    </SideContent>
  )
}

export default SideRecentPosts
