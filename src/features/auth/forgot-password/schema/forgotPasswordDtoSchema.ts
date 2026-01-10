import { ForgotPasswordSchema } from './forgotPasswordSchema'

export const ForgotPasswordDtoSchema = ForgotPasswordSchema.pick({
  email: true,
})
