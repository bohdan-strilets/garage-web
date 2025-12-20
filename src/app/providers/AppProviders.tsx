import type { ReactNode } from "react";

import { ThemeProvider } from "./ThemeProvider";

type Props = { children: ReactNode };

export const AppProviders = ({ children }: Props) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
