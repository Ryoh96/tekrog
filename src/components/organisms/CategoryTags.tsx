import CategoryTag from '../molecules/CategoryTag'

type CategoryTagsProps = {
  categories: {
    nodes: {
      name: string
    }[]
  }
}

const CategoryTags = ({ categories }: CategoryTagsProps) => {
  return (
    <>
      {categories.nodes.map((category) => (
        <CategoryTag key={category.name} categoryName={category.name} />
      ))}
    </>
  )
}

export default CategoryTags
