import { create } from "zustand";

import type { SessionState } from "../types/SessionState";

export const useSessionStore = create<SessionState>(set => ({
  accessToken: null,
  user: null,

  setSession: ({ accessToken, user }) =>
    set({
      accessToken,
      user,
    }),

  clearSession: () =>
    set({
      accessToken: null,
      user: null,
    }),
}));
