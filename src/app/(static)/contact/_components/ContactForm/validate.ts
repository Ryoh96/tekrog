import { ZodError } from 'zod'
import { validateSchema } from './schema'

export const validateFormData = (formData: FormData) =>
  validateSchema.parse(Object.fromEntries(formData))

export const transformFieldErrors = (err: ZodError) =>
  Object.fromEntries(
    err.errors.map(({ path, message }) => [path[0], { message }]),
  )
