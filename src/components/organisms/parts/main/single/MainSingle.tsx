import { faGrav } from '@fortawesome/free-brands-svg-icons'
import { faBomb, faKey, faPerson } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Postbody from '@/components/organisms/parts/main/post/PostBody'

import MainIconTitle from '../common/MainIconTitle'

type MainSingleProps = {
  content: any
  title: string
}

const MainSingle = ({ content, title }: MainSingleProps) => {
  return (
    <>
      <MainIconTitle
        icon={
          <FontAwesomeIcon
            icon={
              title === 'プライバシーポリシー'
                ? faKey
                : title === 'このブログについて'
                ? faPerson
                : faBomb
            }
          />
        }
      >
        {title}
      </MainIconTitle>
      <Postbody content={content} />
    </>
  )
}

export default MainSingle
