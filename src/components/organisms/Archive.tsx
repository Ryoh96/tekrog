import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import type { Post } from '@/graphql/generated/graphql'
import getYearMonth from '@/utils/getYearMonth'

import DropDown from '../atoms/DropDown'
import SideContent from '../molecules/SideContent'

type ArchiveProps = {
  posts: Partial<Post>
}

const Archive = ({ posts }: ArchiveProps) => {
  const yearMonth = getYearMonth(posts)
  const archives = [
    '月を選択',
    ...yearMonth.map((ym) => ym.join('年') + '月'),
  ]
  const links = yearMonth.map(ym => `/archive/${ym.join("/")}`)
  return (
    <SideContent
      title="アーカイブ"
      icon={<FontAwesomeIcon icon={faCalendar} />}
    >
      <DropDown value={archives} links={links}/>
    </SideContent>
  )
}

export default Archive
