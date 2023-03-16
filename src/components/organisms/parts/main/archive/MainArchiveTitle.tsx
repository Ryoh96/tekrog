import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import MainIconTitle from '@/components/organisms/parts/main/common/MainIconTitle'

type MainTitleProps = {
  date: string
}

const MainArchiveTitle = ({ date }: MainTitleProps) => {
  return (
    <MainIconTitle
      icon={<FontAwesomeIcon icon={faCalendar} />}
    >{`${date}の記事一覧`}</MainIconTitle>
  )
}

export default MainArchiveTitle
