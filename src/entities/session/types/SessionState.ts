import type { UserSelf } from '@entities/user'
import type { AuthResponse } from '@shared/types/auth'

export type SessionState = {
  user: UserSelf | null
  accessToken: string | null
  isAuthenticated: boolean

  setSession: (data: AuthResponse) => void
  setAccessToken: (token: string) => void
  clearSession: () => void
}
