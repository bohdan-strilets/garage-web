import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "@pages/public/HomePage";

export const Route = createFileRoute("/_public/")({
  component: () => <HomePage />,
});
