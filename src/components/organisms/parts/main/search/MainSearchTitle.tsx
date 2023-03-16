import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import MainIconTitle from '@/components/organisms/parts/main/common/MainIconTitle'

type MainTitleProps = {
  query: string
}

const MainSearchTitle = ({ query }: MainTitleProps) => {
  return (
    <MainIconTitle
      icon={<FontAwesomeIcon icon={faSearch} />}
    >{`『${query}』の検索結果`}</MainIconTitle>
  )
}

export default MainSearchTitle
