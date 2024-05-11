import { z } from 'zod'

export const validateSchema = z.object({
  name: z
    .string()
    .min(1, '入力してください')
    .max(20, '20文字以内で入力してください'),
  email: z.string().email('メールアドレスの形式が正しくありません'),
  message: z
    .string()
    .min(1, '入力してください')
    .max(2000, '2000文字以内で入力してください'),
})
