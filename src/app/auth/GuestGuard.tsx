import type { PropsWithChildren } from "react";

import { Navigate } from "@tanstack/react-router";

import { useSession } from "@entities/session";

export const GuestGuard = ({ children }: PropsWithChildren) => {
  const { isAuthenticated } = useSession();

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};
