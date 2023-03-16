import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import MainIconTitle from '../common/MainIconTitle'

const MainContact = () => {
  return (
    <>
      <MainIconTitle icon={<FontAwesomeIcon icon={faEnvelope} />}>
        お問い合わせ
      </MainIconTitle>
    </>
  )
}

export default MainContact
