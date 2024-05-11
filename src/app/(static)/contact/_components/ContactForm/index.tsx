'use client'

import { useFormState, useFormStatus } from 'react-dom'
import sendMessage from './action'
import { FieldErrors, initialFormState } from './state'
import { ComponentPropsWithRef, useState } from 'react'
import { transformFieldErrors, validateFormData } from './validate'
import { ZodError } from 'zod'
import Button from '@/app/_components/atoms/Button'
import * as stylex from '@stylexjs/stylex'
import { SP } from '@/types/BreakPoints'
import { redirect, useRouter } from 'next/navigation'

const FormItem = ({ children }: { children: React.ReactNode }) => {
  return <div {...stylex.props(styles.formItem)}>{children}</div>
}

const FormParts = ({ children }: { children: React.ReactNode }) => {
  return <div {...stylex.props(styles.formParts)}>{children}</div>
}

const Label = ({
  children,
  ...props
}: { children: React.ReactNode } & ComponentPropsWithRef<'label'>) => {
  return (
    <label {...stylex.props(styles.label)} {...props}>
      {children}
    </label>
  )
}

const ErrorText = ({ children }: { children: React.ReactNode }) => (
  <p {...stylex.props(styles.error)}>{children}</p>
)

const FormButton = () => {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" styleXStyle={styles.button} disabled={pending}>
      {!pending ? '送信' : '送信中'}
    </Button>
  )
}

const ContactForm = () => {
  const router = useRouter()
  const [formState, formDispatch] = useFormState(
    sendMessage,
    initialFormState(),
  )

  const [clientErrors, setClientErrors] = useState<FieldErrors | undefined>(
    formState.error?.fieldErrors,
  )

  const errors = clientErrors || formState.error?.fieldErrors

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      const formData = new FormData(e.currentTarget)
      validateFormData(formData)
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      },)
      setClientErrors(undefined)
      router.push("/contact/thanks")
    } catch (err) {
      if (!(err instanceof ZodError)) throw err
      setClientErrors(transformFieldErrors(err))
    }
  }

  return (
    <form
      // action={formDispatch}
      onSubmit={handleSubmit}
      {...stylex.props(styles.form)}
      data-netlify="true"
      name="contact"
    >
      <input type="hidden" name="form-name" value="contact" />
      <FormItem>
        <Label htmlFor="name">
          <span>名前:</span>
        </Label>
        <FormParts>
          <input id="name" type="text" name="name" />
          <ErrorText>
            {errors?.['name']?.message && errors?.['name']?.message}
          </ErrorText>
        </FormParts>
      </FormItem>
      <FormItem>
        <Label htmlFor="email">
          <span>メールアドレス:</span>
        </Label>
        <FormParts>
          <input id="email" type="email" name="email" />
          <ErrorText>
            {errors?.['email']?.message && errors?.['email']?.message}
          </ErrorText>
        </FormParts>
      </FormItem>
      <FormItem>
        <Label htmlFor="message">
          <span>お問い合わせ内容:</span>
        </Label>
        <FormParts>
          <textarea
            id="message"
            name="message"
            {...stylex.props(styles.textarea)}
          ></textarea>
          <ErrorText>
            {errors?.['message']?.message && errors?.['message']?.message}
          </ErrorText>
        </FormParts>
      </FormItem>
      <FormButton />
    </form>
  )
}

const MQ_SP: SP = 768

const styles = stylex.create({
  formItem: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    [`@media (max-width:${MQ_SP}px)`]: {
      display: 'grid',
      gap: '0.5em',
      width: '100%',
      justifyContent: 'stretch',
    },
  },
  formParts: {
    display: 'grid',
    gap: '0.1em',
    flex: '1 1 auto',
  },
  label: {
    marginTop: '0.4em',
    flex: '0 0 10em',
    textAlign: 'left',
  },
  textarea: {
    width: '100%',
    height: '7em',
  },
  button: {
    marginTop: 30,
    width: 200,
    marginInline: 'auto',
    display: 'inline-block',
    textAlign: 'center',
    [`@media (max-width:${MQ_SP}px)`]: {
      width: '100%',
    },
  },
  form: {
    textAlign: 'center',
    display: 'grid',
    gap: '1em',
    [`@media (max-width:${MQ_SP}px)`]: {
      textAlign: 'left',
    },
  },
  error: {
    color: 'red',
    fontSize: '0.8em',
    fontWeight: 'bold',
    textAlign: 'left',
  },
})

export default ContactForm
