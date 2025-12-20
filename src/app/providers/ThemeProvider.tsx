import type { ReactNode } from "react";

type Props = { children: ReactNode };

export const ThemeProvider = ({ children }: Props) => {
  return <>{children}</>;
};
