import type { AuthResponse } from '@shared/types/auth'

import { useSessionStore } from './useSessionStore'

export const sessionActions = {
  setSession: (session: AuthResponse) =>
    useSessionStore.getState().setSession(session),

  setAccessToken: (token: string) =>
    useSessionStore.getState().setAccessToken(token),

  clearSession: () => useSessionStore.getState().clearSession(),
}
