import type { Category } from '@/graphql/generated/graphql'

import CategoryTag from '../molecules/CategoryTag'

type CategoryTagsProps = {
  categories: {
    nodes: Category[]
  }
}

const CategoryTags = ({ categories }: CategoryTagsProps) => {
  return (
    <>
      {categories.nodes.map((category) => (
        category.count !== null &&
        <CategoryTag
          key={category.name}
          categoryName={category.name}
          count={category.count}
          link={category.link}
        />
      ))}
    </>
  )
}

export default CategoryTags
