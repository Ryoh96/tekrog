import {
  faChampagneGlasses,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCallback, useState } from 'react'
import styled from 'styled-components'

import ContactForm from '@/components/organisms/ContactForm'
import SendEmail from '@/components/organisms/SendEmail'

import MainIconTitle from '../common/MainIconTitle'

const ContactFormWrapper = styled.div`
  max-width: 850px;
  margin-inline: auto;
`

type MainContactProps = {
  isPosted?: boolean
}

const MainContact = ({ isPosted }: MainContactProps) => {
  const [isCompleted, setIsCompleted] = useState(false)
  const onCompleted = useCallback(() => {
    setIsCompleted(true)
  }, [])
  return (
    <>
      {!isCompleted ? (
        <MainIconTitle icon={<FontAwesomeIcon icon={faEnvelope} />}>
          お問い合わせ
        </MainIconTitle>
      ) : (
        <MainIconTitle icon={<FontAwesomeIcon icon={faChampagneGlasses} />}>
          お問い合わせ完了
        </MainIconTitle>
      )}
      <ContactFormWrapper>
        <ContactForm onCompleted={onCompleted} />
      </ContactFormWrapper>
    </>
  )
}

export default MainContact
