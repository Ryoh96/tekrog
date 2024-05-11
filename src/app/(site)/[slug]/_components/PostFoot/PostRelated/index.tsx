import Card from '@/app/_components/organisms/Card'
import shuffleArray from '@/app/_utils/shuffleArray'
import { Category } from '@/graphql/generated/graphql'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import * as stylex from '@stylexjs/stylex'
import { gradient } from '../../../../../_styles/gradient.stylex'
import { SM, SP } from '@/types/BreakPoints'

const selectRelatedPosts = (categories: Category[]) => {
  const allPostRelated = categories.flatMap((node) =>
    node.posts?.nodes.map((n: any) => ({
      title: n.title,
      categories: n.categories.nodes,
      imgUrl: n.featuredImage?.node.sourceUrl,
      uri: n.uri,
    })),
  )

  const titles: string[] = []

  const uniqueRelatedPosts = allPostRelated.filter((post) =>
    titles.includes(post?.title) ? false : titles.push(post?.title),
  )

  const shuffledRelatedPosts = shuffleArray(uniqueRelatedPosts)

  const selectedPosts = shuffledRelatedPosts.slice(0, 6)

  return selectedPosts
}

const PostRelated = ({ categories }: { categories: Category[] }) => {
  const posts = selectRelatedPosts(categories)

  return (
    <div>
      <div {...stylex.props(styles.titleWrapper)}>
        <FontAwesomeIcon icon={faPencil} />
        <p {...stylex.props(styles.title)}>関連記事</p>
      </div>
      <div {...stylex.props(styles.cardWrapper)}>
        {posts.map(
          (post) =>
            post && (
              <Link href={post.uri} key={post.uri}>
                <Card
                  title={post.title}
                  categories={post.categories}
                  imgUrl={post.imgUrl}
                  style={styles.cardTitle}
                />
              </Link>
            ),
        )}
      </div>
    </div>
  )
}

const MQ_SP: SP = 768
const MQ_SM: SM = 560

const styles = stylex.create({
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5em',
    marginLeft: '0.3em',
    borderBottom: '7px solid #1f2a82',
    borderImage: gradient.accent,
    borderImageSlice: 1,
    ':not(#__unused__) svg': {
      fontSize: 24,
      [`@media (max-width:${MQ_SP}px)`]: {
        fontSize: 18,
      },
    },
  },
  title: {
    fontSize: 26,
    marginTop: '0.2em',
    [`@media (max-width:${MQ_SP}px)`]: {
      fontSize: 18,
    },
  },
  cardWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '40px 3%',
    marginBlock: '20px 50px',
    [`@media (max-width:${MQ_SP}px)`]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '32px 3%',
    },
    [`@media (max-width:${MQ_SM}px)`]: {
      gridTemplateColumns: null,
      display: 'block',
    },
  },
  cardTitle: {
    fontSize: 15,
  },
})

export default PostRelated
