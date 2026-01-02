import { queryClient } from "@shared/lib/queryClient";

import { useSessionStore } from "./useSessionStore";

import type { AuthSession } from "../types/AuthSession";

export const sessionActions = {
  set: (data: AuthSession) => useSessionStore.getState().setSession(data),

  clear: () => useSessionStore.getState().clearSession(),

  logout: () => {
    useSessionStore.getState().clearSession();
    queryClient.clear();
  },
};
