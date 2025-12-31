import { useSessionStore } from "./useSessionStore";

export const isAuthenticated = (): boolean => {
  return Boolean(useSessionStore.getState().accessToken);
};

export const getAccessToken = (): string | null => {
  return useSessionStore.getState().accessToken;
};
