import type { RegisterDto } from '../types/RegisterDto'
import type { RegisterFormValues } from '../types/RegisterFormValues'

export const mapRegisterToDto = (values: RegisterFormValues): RegisterDto => ({
  firstName: values.firstName,
  lastName: values.lastName,
  email: values.email,
  password: values.password,
})
