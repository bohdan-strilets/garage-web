import type { UserSelf } from "@entities/user/types/UserSelf";

import type { AuthSession } from "./AuthSession";

export type SessionState = {
  accessToken: string | null;
  user: UserSelf | null;
  isInitialized: boolean;

  setSession: (data: AuthSession) => void;
  clearSession: () => void;
};
