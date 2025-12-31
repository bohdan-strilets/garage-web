import { useSessionStore } from "./useSessionStore";

export const useSession = () => {
  const accessToken = useSessionStore(s => s.accessToken);
  const user = useSessionStore(s => s.user);
  const isInitialized = useSessionStore(s => s.isInitialized);

  return {
    accessToken,
    user,
    isInitialized,
    isAuthenticated: Boolean(accessToken),
  };
};
