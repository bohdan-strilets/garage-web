import { createFileRoute } from "@tanstack/react-router";

import { VerifyEmailPage } from "@pages/auth/VerifyEmailPage";

export const Route = createFileRoute("/_auth/verify-email")({
  component: () => <VerifyEmailPage />,
});
