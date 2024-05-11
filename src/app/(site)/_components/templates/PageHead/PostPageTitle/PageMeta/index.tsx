import DateTime from '@/app/_components/molecules/DateTime'
import CategoryTags from '@/app/_components/organisms/CategoryTags'
import { SP } from '@/types/BreakPoints'
import * as stylex from '@stylexjs/stylex'

const PageMeta = ({
  createdAt,
  updatedAt,
  categories,
  uri,
}: {
  createdAt: string
  updatedAt: string
  categories: {
    name: string
    uri?: string
  }[]
  uri: string
}) => {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <div>
        <p {...stylex.props(styles.times)}>
          <span {...stylex.props(styles.time)}>
            更新日:
            <DateTime>{updatedAt}</DateTime>
          </span>
          <span {...stylex.props(styles.time)}>
            (作成日: <DateTime>{createdAt}</DateTime>)
          </span>
        </p>
      </div>
      <div {...stylex.props(styles.categories)}>
        <span {...stylex.props(styles.category)}>カテゴリー:</span>
        <CategoryTags categories={categories} />
      </div>
    </div>
  )
}

const MQ_SP: SP = 768

const styles = stylex.create({
  wrapper: {
    width: '90%',
    margin: 'auto',
    textAlign: 'center',
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  time: {
    display: 'flex',
    color: '#fff',
    gap: '0.5em',
    fontSize: 14,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  times: {
    display: 'flex',
    marginInline: 'auto',
    marginBottom: 16,
    textAlign: 'center',
    gap: 16,
    [`@media (max-width: ${MQ_SP}px)`]: {
      flexDirection: 'column',
    },
  },
  categories: {
    textAlign: 'center',
    marginInline: 'auto',
    marginBottom: 16,
    display: 'flex',
    alignItems: 'center',
    gap: 16,
  },
  category: {
    color: '#fff',
    fontSize: 14,
    wordBreak: 'keep-all',
  },
})

export default PageMeta
