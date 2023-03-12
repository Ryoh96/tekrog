import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

import SideContent from '@/components/molecules/SideContent'
import type { Category } from '@/graphql/generated/graphql'

import CategoryTags from './CategoryTags'

const CategoryTagWrapper = styled.div`
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
