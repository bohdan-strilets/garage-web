import type { PropsWithChildren } from "react";

import { Navigate } from "@tanstack/react-router";

import { useSession } from "@entities/session";

export const AuthGuard = ({ children }: PropsWithChildren) => {
  const { isAuthenticated } = useSession();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};
