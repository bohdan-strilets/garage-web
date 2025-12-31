import type { PropsWithChildren } from "react";

import { useSession } from "@entities/session";
import { useInitSession } from "@features/auth/session";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const { isInitialized } = useSession();
  const { isLoading } = useInitSession();

  if (!isInitialized || isLoading) {
    return <p>SplashScreen...</p>;
  }

  return <>{children}</>;
};
