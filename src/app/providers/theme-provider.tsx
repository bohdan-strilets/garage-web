import type { ReactNode } from "react";

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <>{children}</>;
};
