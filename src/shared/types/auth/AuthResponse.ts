import type { UserSelf } from '@entities/user'

export type AuthResponse = {
  user: UserSelf
  accessToken: string
}
