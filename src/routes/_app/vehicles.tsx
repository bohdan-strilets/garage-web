import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/vehicles")({
  component: () => <div>Vehicles page</div>,
});
