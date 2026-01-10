import { RegisterFormSchema } from './registerFormSchema'

export const RegisterDtoSchema = RegisterFormSchema.pick({
  firstName: true,
  lastName: true,
  email: true,
  password: true,
})
