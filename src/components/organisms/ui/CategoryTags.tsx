import CategoryTag from '@/components/molecules/CategoryTag'
import type { Category } from '@/graphql/generated/graphql'

type CategoryTagsProps = {
  categories: {
    nodes: Category[]
  }
}

const CategoryTags = ({ categories }: CategoryTagsProps) => {
  const url = categories.nodes.map((node) =>
    node.uri &&
    node.uri.split('/').length === 5
      ? node.uri.slice(node.uri.indexOf('/', node.uri.indexOf('/') + 1))
      : node.uri
  )
  return (
    <>
      {categories.nodes.map(
        (category, index) =>
          category.count !== null && (
            <CategoryTag
              key={category.name}
              categoryName={category.name}
              count={category.count}
              link={url[index]}
            />
          )
      )}
    </>
  )
}

export default CategoryTags
