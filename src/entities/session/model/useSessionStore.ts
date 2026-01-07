import { create } from 'zustand'

import type { SessionState } from '../types/SessionState'

export const useSessionStore = create<SessionState>(set => ({
  user: null,
  accessToken: null,
  isAuthenticated: false,

  setSession: ({ user, accessToken }) =>
    set({
      user,
      accessToken,
      isAuthenticated: true,
    }),

  setAccessToken: accessToken =>
    set({
      accessToken,
      isAuthenticated: true,
    }),

  clearSession: () =>
    set({
      user: null,
      accessToken: null,
      isAuthenticated: false,
    }),
}))
