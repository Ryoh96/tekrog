import * as stylex from '@stylexjs/stylex'
import CategoryTag from './CategoryTag'

const CategoryTags = ({
  categories,
}: {
  categories: {
    name: string
    count?: number
    uri?: string
  }[]
}) => {
  return (
    <div {...stylex.props(styles.categories)}>
      {categories?.map((category) => (
        <CategoryTag
          categoryName={category.name}
          key={category.name}
          count={category.count}
          uri={category.uri}
        />
      ))}
    </div>
  )
}

const styles = stylex.create({
  categories: {
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
  },
})

export default CategoryTags
