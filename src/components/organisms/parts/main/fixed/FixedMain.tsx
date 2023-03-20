import { faGrav } from '@fortawesome/free-brands-svg-icons'
import { faBomb, faKey, faPerson } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PostBody from '@/components/organisms/parts/main/post/PostBody'

import MainIconTitle from '../common/MainIconTitle'

type FixedMainProps = {
  content: string
  title: string
}

const FixedMain = ({ content, title }: FixedMainProps) => {
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
      <PostBody content={content} />
    </>
  )
}

export default FixedMain
