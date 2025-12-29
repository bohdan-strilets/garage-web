import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "@pages/app/HomePage";

export const Route = createFileRoute("/_app/")({
  component: () => <HomePage />,
});
