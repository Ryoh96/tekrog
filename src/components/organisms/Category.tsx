import Link from 'next/link'
import styled, { useTheme } from 'styled-components'

import Tag from '@/components/atoms/Tag'
import CategoryTag from '@/components/molecules/CategoryTag'
import SideContent from '@/components/molecules/SideContent'

const categoryList = [
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
  gap: 16px;
`

const Category = () => {
  const theme = useTheme()
  return (
    <SideContent title="カテゴリー">
      <CategoryTagWrapper>
        {categoryList.map((category) => (
          <Link href={`/category/${category}`} key={category}>
            <CategoryTag
              imgUrl={`/logo-${category}.png`}
              bgColor={theme.color.category[category]}
              count={3}
              text={category}
            />
          </Link>
        ))}
      </CategoryTagWrapper>
    </SideContent>
  )
}

export default Category
