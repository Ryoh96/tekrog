import { NextPost, PrevPost } from '@/types/Page'
import Link from 'next/link'
import PrevNextPager from './PrevNextPager'
import * as stylex from '@stylexjs/stylex'

const PrevNextPagers = ({
  prevPost,
  nextPost,
}: {
  prevPost: PrevPost
  nextPost: NextPost
}) => {
  return (
    <div {...stylex.props(styles.wrapper)}>
      {prevPost && (
        <Link href={prevPost.uri}>
          <PrevNextPager
            type="prev"
            imgUrl={prevPost.featuredImage?.node.sourceUrl}
            title={prevPost.title}
          />
        </Link>
      )}
      {nextPost && (
        <Link href={nextPost.uri}>
          <PrevNextPager
            type="next"
            imgUrl={nextPost.featuredImage?.node.sourceUrl}
            title={nextPost.title}
          />
        </Link>
      )}
    </div>
  )
}

const styles = stylex.create({
  wrapper: {
    display: 'grid',
    gap: 30,
  },
})

export default PrevNextPagers
