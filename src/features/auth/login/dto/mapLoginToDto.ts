import type { LoginDto } from '../types/LoginDto'
import type { LoginFormValues } from '../types/LoginFormValues'

export const mapLoginToDto = (values: LoginFormValues): LoginDto => ({
  email: values.email,
  password: values.password,
})
