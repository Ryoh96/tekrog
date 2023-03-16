import { useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

import _Button from '../../atoms/Button'
import SendEmail from './SendEmail'

const ErrorText = styled.strong`
  color: 'red';
`

type TestFormData = {
  name: string
  email: string
  message: string
}

type ContactFormProps = {
  onCompleted: () => void
}

const Button = styled(_Button)`
  margin-top: 30px;
  width: 200px;
  margin-inline: auto;
`

const Form = styled.form`
  display: grid;
  gap: 1em;
  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    font-size: 14px;
  }
`

const FormPartsWrapper = styled.label`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  > *:first-child {
    margin-top: 0.4em;
    flex: 0 0 10em;
  }

  > *:last-child {
    flex: 1 1 auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    display: grid;
    gap: 0.5em;
    width: 100%;
    justify-content: stretch;
  }
`

const TextArea = styled.textarea`
  width: 100%;
  height: 7em;
`

const ContactForm = ({ onCompleted }: ContactFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TestFormData>()

  const [isSend, setIsSend] = useState(false)
  const [isError, setIsError] = useState(false)

  const sendEmail = async ({ name, email, message }) => {
    try {
      const res = await fetch('/api/mail', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      })
      console.log('Response received')
      if (res.status === 200) {
        onCompleted()
        setIsSend(true)
      } else {
        setIsError(true)
      }
    } catch (e) {
      setIsError(true)
    }
  }

  const onSubmit = async (data) => {
    await sendEmail(data)
    console.log('send')
  }

  return (
    <>
      {isError && <ErrorText>エラーが発生しました</ErrorText>}
      {!isSend ? (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormPartsWrapper>
            <span>名前:</span> <input {...register('name')} />
          </FormPartsWrapper>
          <FormPartsWrapper>
            <span>メールアドレス:</span> <input {...register('email')} />
          </FormPartsWrapper>
          <FormPartsWrapper>
            <span>お問い合わせ内容:</span>
            <TextArea {...register('message')}></TextArea>
          </FormPartsWrapper>
          <Button type="submit">送信</Button>
        </Form>
      ) : (
        <SendEmail />
      )}
    </>
  )
}

export default ContactForm
