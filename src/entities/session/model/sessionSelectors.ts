import { useSessionStore } from './useSessionStore'

export const sessionSelectors = {
  getAccessToken: () => useSessionStore.getState().accessToken,
  isAuthenticated: () => useSessionStore.getState().isAuthenticated,
  getUser: () => useSessionStore.getState().user,
}
