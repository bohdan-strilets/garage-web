import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/gallery")({
  component: () => <div>Gallery page</div>,
});
