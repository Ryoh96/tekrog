'use server'

import { createTransport } from 'nodemailer'
import { FormState } from './state'
import { transformFieldErrors, validateFormData } from './validate'
import { errors, handleError } from './state'
import { ZodError } from 'zod'
import { redirect } from 'next/navigation'

async function sendMessage(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const payload = validateFormData(formData)

  const transporter = createTransport({
    port: 465,
    host: process.env.NEXT_PUBLIC_MAIL_HOST,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_MAIL_USER,
      pass: process.env.NEXT_PUBLIC_MAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_MAIL_SYSTEM,
      to: process.env.NEXT_PUBLIC_MAIL_USER,
      subject: '問い合わせが来ました',
      text: `
      名前
      ${payload.name}
      
      メールアドレス
      ${payload.email}
      
      お問い合わせ内容
      ${payload.message}
      `,
    })

    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_MAIL_USER,
      to: payload.email,
      subject: '以下の内容でお問い合わせを受け付けました',
      text: `
      名前
      ${payload.name}
      
      メールアドレス
      ${payload.email}
      
      お問い合わせ内容
      ${payload.message}
      `,
    })
  } catch (err) {
    if (err instanceof ZodError) {
      return handleError(prevState, {
        ...errors[400],
        fieldErrors: transformFieldErrors(err),
      })
    }
    return handleError(prevState, errors[500])
  }
  redirect('/contact/thanks')
}

export default sendMessage
