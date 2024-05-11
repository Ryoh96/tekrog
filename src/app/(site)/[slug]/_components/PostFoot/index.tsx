import CategoryTags from '@/app/_components/organisms/CategoryTags'
import Share from '@/app/_components/organisms/Share'
import { Category } from '@/graphql/generated/graphql'
import { NextPost, PrevPost } from '@/types/Page'
import * as stylex from '@stylexjs/stylex'
import PostRelated from './PostRelated'
import PrevNextPagers from '@/app/_components/organisms/PrevNextPagers'

const PostFoot = ({
  categories,
  title,
  uri,
  prevPost,
  nextPost,
}: {
  categories: Category[]
  prevPost: PrevPost
  nextPost: NextPost
  title: string
  uri: string
}) => {
  return (
    <>
      <div>
        <div {...stylex.props(styles.meta)}>
          <div {...stylex.props(styles.categories)}>
            <span>カテゴリー:</span>
            <CategoryTags
              categories={categories.map((category) => ({
                name: category.name as string,
                uri: category.uri as string,
              }))}
            />
          </div>
          <Share
            title={title}
            url={`${process.env.NEXT_PUBLIC_SITE_URL}${uri}`}
            style={styles.share}
          />
        </div>
        <PostRelated categories={categories} />
        <PrevNextPagers prevPost={prevPost} nextPost={nextPost} />
      </div>
    </>
  )
}

const styles = stylex.create({
  meta: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 20,
    flexWrap: 'wrap',
    gap: 20,
  },
  categories: {
    display: 'flex',
    gap: 16,
    alignItems: 'center',
  },
  share: {
    justifyContent: 'flex-end',
    marginInline: null,
    marginLeft: 'auto',
  },
})

export default PostFoot
