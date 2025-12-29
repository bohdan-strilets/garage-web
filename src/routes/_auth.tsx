import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  component: () => (
    <div>
      <div>AUTH PAGE HEADER</div>
      <Outlet />
    </div>
  ),
});
