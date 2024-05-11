import type { z } from 'zod'
import { validateSchema } from './schema'

export type FieldErrors = Record<string, { message: string }>

type Error = {
  message: string
  status: number
  fieldErrors?: FieldErrors
}

type Payload = z.infer<typeof validateSchema>

export type FormState = Payload & {
  error: Error | null
}

export const initialFormState = (
  initialState?: Partial<FormState>,
): FormState => ({
  name: '',
  email: '',
  message: '',
  error: null,
  ...initialState,
})

export const handleSuccess = (prevState: FormState): FormState => ({
  ...prevState,
})

export const handleError = (prevState: FormState, error: Error): FormState => ({
  ...prevState,
  error,
})

export const errors = {
  400: { message: 'Bad Request', status: 400 },
  500: { message: 'Internal Server Error', status: 500 },
}
