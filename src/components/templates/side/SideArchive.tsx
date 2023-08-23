import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

import DropDown from '@/components/atoms/DropDown'
import SideContent from '@/components/molecules/SideContent'
import type { Post } from '@/graphql/generated/graphql'
import getYearMonth from '@/utils/getYearMonth'

type SideArchiveProps = {
  posts: Partial<Post>
}

const SideArchiveWrapper = styled.div.attrs({
  'data-testid': 'side-archives',
})``

const SideArchive = ({ posts }: SideArchiveProps) => {
  const yearMonth = getYearMonth(posts)
  const archives = [
    '月を選択',
    ...yearMonth.map((ym) => {
      return ym.join('年') + '月'
    }),
  ]
  const links = yearMonth.map((ym) => `/archive/${ym.join('/')}`)
  links.unshift('')
  return (
    <SideContent
      title="アーカイブ"
      icon={<FontAwesomeIcon icon={faCalendar} />}
    >
      <SideArchiveWrapper>
        <DropDown value={archives} links={links} />
      </SideArchiveWrapper>
    </SideContent>
  )
}

export default SideArchive
