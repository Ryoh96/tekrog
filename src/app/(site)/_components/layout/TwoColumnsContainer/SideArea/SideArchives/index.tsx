import getYearMonth from '@/app/_utils/getYearMonth'
import { getClient } from '@/graphql/apollo/client'
import {
  GetArchivePostsDocument,
  GetArchivePostsQuery,
} from '@/graphql/generated/request'
import React from 'react'
import SideContent from '../SideContent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import DropDown from '@/app/_components/atoms/DropDown'

const SideArchives = async () => {
  const { data } = await getClient().query<GetArchivePostsQuery>({
    query: GetArchivePostsDocument,
  })

  const date = data.archivePosts.edges.map((edge) => edge.node.date.slice(0, 7))

  const yearMonth = getYearMonth(date)
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
      <DropDown values={archives} links={links} />
    </SideContent>
  )
}

export default SideArchives
