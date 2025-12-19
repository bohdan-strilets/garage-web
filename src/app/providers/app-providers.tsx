import type { ReactNode } from "react";

import { ThemeProvider } from "./theme-provider";

type AppProvidersProps = {
  children: ReactNode;
};

export const AppProviders = ({ children }: AppProvidersProps) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
