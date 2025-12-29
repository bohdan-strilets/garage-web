import type { AuthResponse } from "@shared/types/auth/AuthResponse";

import type { AuthSession } from "./Session";

export type SessionState = AuthSession & {
  setSession: (data: AuthResponse) => void;

  clearSession: () => void;
};
