import { createFileRoute, Outlet } from "@tanstack/react-router";

import { AuthFooter, PublicLayout } from "@app/layouts/PublicLayout";

export const Route = createFileRoute("/_auth")({
  component: () => (
    <PublicLayout footer={<AuthFooter />}>
      <Outlet />
    </PublicLayout>
  ),
});
