import type { NextApiRequest, NextApiResponse } from 'next'
import { createTransport } from 'nodemailer'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const transporter = createTransport({
    port: 465,
    host: process.env.NEXT_PUBLIC_MAIL_HOST,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_MAIL_USER,
      pass: process.env.NEXT_PUBLIC_MAIL_PASS,
    },
  })

  const data = JSON.parse(req.body)
  await transporter.sendMail({
    from: process.env.NEXT_PUBLIC_MAIL_SYSTEM,
    to: process.env.NEXT_PUBLIC_MAIL_USER,
    subject: '問い合わせが来ました',
    text: `
    名前
    ${data.name}
    
    メールアドレス
    ${data.email}
    
    お問い合わせ内容
    ${data.message}
    `,
  })

  await transporter.sendMail({
    from: process.env.NEXT_PUBLIC_MAIL_USER,
    to: data.email,
    subject: '以下の内容でお問い合わせを受け付けました',
    text: `
    名前
    ${data.name}
    
    メールアドレス
    ${data.email}
    
    お問い合わせ内容
    ${data.message}
    `,
  })

  res.status(200).json({
    success: true,
  })
}
