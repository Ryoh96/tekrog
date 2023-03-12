import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import type { Post } from '@/graphql/generated/graphql'
import makeArchives from '@/utils/makeArchives'

import DropDown from '../atoms/DropDown'
import SideContent from '../molecules/SideContent'

type ArchiveProps = {
  posts: Partial<Post>
}

const Archive = ({ posts }: ArchiveProps) => {
  const archives = ["月を選択", ...makeArchives(posts)]
  return (
    <SideContent
      title="アーカイブ"
      icon={<FontAwesomeIcon icon={faCalendar} />}
    >
      <DropDown
        value={archives}
      />
    </SideContent>
  )
}

export default Archive
