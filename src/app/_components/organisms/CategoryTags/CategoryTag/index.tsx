import Link from 'next/link'
import { name2Cat } from '@/app/_utils/cat2name'
import { cat2Color } from '@/constants/color'
import IconTag from '@/app/_components/molecules/IconTag'

const CategoryTag = ({
  categoryName,
  count,
  uri,
  hoverable,
}: {
  categoryName: string
  count?: number
  uri?: string
  hoverable?: boolean
}) => {
  const category = name2Cat[categoryName]
  const color = cat2Color[category]
  return (
    <>
      {uri ? (
        <Link href={uri}>
          <IconTag bgColor={color} imageUrl={`/logo-${category}.png`} hoverable>
            {categoryName}
            {count && <span>{`(${count})`}</span>}
          </IconTag>
        </Link>
      ) : (
        <IconTag bgColor={color} imageUrl={`/logo-${category}.png`}>
          {categoryName}
          {count && <span>{`(${count})`}</span>}
        </IconTag>
      )}
    </>
  )
}

export default CategoryTag
