import type { AuthSession } from "../types/Session";

export const isAuthenticated = (session: AuthSession): boolean => {
  return Boolean(session.accessToken);
};
