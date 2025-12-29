import type { ReactNode } from "react";

import { RouterProvider as Provider } from "@tanstack/react-router";

import { router } from "@app/router/router";

type Props = { children?: ReactNode };

export const RouterProvider = (_: Props) => {
  return <Provider router={router} />;
};
