import { createFileRoute, Outlet } from "@tanstack/react-router";

import { PublicLayout } from "@app/layouts/PublicLayout";

export const Route = createFileRoute("/_public")({
  component: () => (
    <PublicLayout>
      <Outlet />
    </PublicLayout>
  ),
});
