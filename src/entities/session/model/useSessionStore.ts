import { create } from "zustand";

import type { SessionState } from "../types/SessionState";

export const useSessionStore = create<SessionState>(set => ({
  accessToken: null,
  user: null,
  isInitialized: false,

  setSession: ({ accessToken, user }) =>
    set({
      accessToken,
      user,
      isInitialized: true,
    }),

  clearSession: () =>
    set({
      accessToken: null,
      user: null,
      isInitialized: true,
    }),
}));
