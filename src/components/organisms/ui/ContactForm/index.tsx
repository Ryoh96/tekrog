import { useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

import _Button from '@/components//atoms/Button'
import SendEmail from '@/components/organisms/ui//SendEmail'

const ErrorText = styled.strong`
  color: red;
  font-size: 0.8em;
  font-weight: bold;
`

type FormData = {
  name: string
  email: string
  message: string
}

type ContactFormProps = {
  onCompleted: () => void
}

const Button = styled(_Button).attrs({
  'data-testid': 'submit-button',
})`
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

const FormLabel = styled.label`
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

const TextArea = styled.textarea.attrs({
  'data-testid': 'input-message',
})`
  width: 100%;
  height: 7em;
`

const FormParts = styled.div`
  display: grid;
  gap: 0.6em;
`

const ContactForm = ({ onCompleted }: ContactFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<FormData>({
    mode: 'onChange',
  })

  const [isSend, setIsSend] = useState(false)
  const [isError, setIsError] = useState(false)

  const sendEmail = async ({ name, email, message }: FormData) => {
    try {
      const res = await fetch('/api/mail', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      })
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

  const onSubmit = async (data: FormData) => {
    if (Object.keys(errors).length) return
    await sendEmail(data)
  }

  return (
    <>
      {isError && <ErrorText>エラーが発生しました</ErrorText>}
      {!isSend ? (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormLabel>
            <span>名前:</span>{' '}
            <FormParts>
              <input
                type="text"
                {...register('name', {
                  required: {
                    value: true,
                    message: '※入力してください',
                  },
                  maxLength: {
                    value: 20,
                    message: '※最大文字数を超えています',
                  },
                })}
                data-testid="input-name"
              />
              {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
            </FormParts>
          </FormLabel>
          <FormLabel>
            <span>メールアドレス:</span>{' '}
            <FormParts>
              <input
                type="email "
                {...register('email', {
                  required: {
                    value: true,
                    message: '※入力してください',
                  },
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: '※メールアドレスの形式が正しくありません',
                  },
                })}
                data-testid="input-email"
              />
              {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
            </FormParts>
          </FormLabel>
          <FormLabel>
            <span>お問い合わせ内容:</span>
            <FormParts>
              <TextArea
                {...register('message', {
                  required: {
                    value: true,
                    message: '※入力してください',
                  },
                })}
              ></TextArea>
              {errors.message && (
                <ErrorText>{errors.message.message}</ErrorText>
              )}
            </FormParts>
          </FormLabel>
          <Button
            type="submit"
            disabled={
              !!Object.keys(errors).length ||
              !(dirtyFields.name && dirtyFields.email && dirtyFields.message)
            }
          >
            送信
          </Button>
        </Form>
      ) : (
        <SendEmail />
      )}
    </>
  )
}

export default ContactForm
