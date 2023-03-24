import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

import SideContent from '@/components/molecules/SideContent'
import CategoryTags from '@/components/organisms/ui/CategoryTags'
import type { Category } from '@/graphql/generated/graphql'

const CategoryTagWrapper = styled.div.attrs({
  'data-testid': 'side-categories',
})`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

type SideCategoryProps = {
  categories: {
    nodes: Category[]
  }
}

const SideCategory = ({ categories }: SideCategoryProps) => {
  return (
    <SideContent
      title="カテゴリー"
      icon={<FontAwesomeIcon icon={faProjectDiagram} />}
    >
      <CategoryTagWrapper>
        <CategoryTags categories={categories} />
      </CategoryTagWrapper>
    </SideContent>
  )
}

export default SideCategory
