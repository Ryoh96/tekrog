import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import styled from 'styled-components'

import CategoryTag from '@/components/molecules/CategoryTag'
import SideContent from '@/components/molecules/SideContent'
import type { CategoryType } from '@/types/CategoryType'

const categoryList: CategoryType[] = [
  'appli',
  'css',
  'html',
  'javascript',
  'laravel',
  'math',
  'news',
  'php',
  'python',
  'react',
  'sass',
  'typescript',
  'vuejs',
  'wordpress',
]

const CategoryTagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

const Category = () => {
  return (
    <SideContent
      title="カテゴリー"
      icon={<FontAwesomeIcon icon={faProjectDiagram} />}
    >
      <CategoryTagWrapper>
        {categoryList.map((category) => (
          <Link href={`/category/${category}`} key={category}>
            {/* <CategoryTag category={category} count={3} /> */}
          </Link>
        ))}
      </CategoryTagWrapper>
    </SideContent>
  )
}

export default Category
