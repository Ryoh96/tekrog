import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import DropDown from '@/components/atoms/DropDown'
import SideContent from '@/components/molecules/SideContent'
import type { Post } from '@/graphql/generated/graphql'
import getYearMonth from '@/utils/getYearMonth'

type SideArchiveProps = {
  posts: Partial<Post>
}

const SideArchive = ({ posts }: SideArchiveProps) => {
  const yearMonth = getYearMonth(posts)
  const archives = ['月を選択', ...yearMonth.map((ym) => ym.join('年') + '月')]
  const links = yearMonth.map((ym) => `/archive/${ym.join('/')}`)
  return (
    <SideContent
      title="アーカイブ"
      icon={<FontAwesomeIcon icon={faCalendar} />}
    >
      <DropDown value={archives} links={links} />
    </SideContent>
  )
}

export default SideArchive
