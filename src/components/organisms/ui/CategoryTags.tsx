import CategoryTag from '@/components/molecules/CategoryTag'
import type { Category } from '@/graphql/generated/graphql'

type CategoryTagsProps = {
  categories: {
    nodes: Category[]
  }
}

const CategoryTags = ({ categories }: CategoryTagsProps) => {
  return (
    <>
      {categories.nodes.map(
        (category) =>
          category.count !== null && (
            <CategoryTag
              key={category.name}
              categoryName={category.name}
              count={category.count}
              link={category.uri}
            />
          )
      )}
    </>
  )
}

export default CategoryTags
