import { LoginFormSchema } from './loginFormSchema'

export const LoginDtoSchema = LoginFormSchema.pick({
  email: true,
  password: true,
})
