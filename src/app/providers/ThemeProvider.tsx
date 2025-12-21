import { useEffect, type ReactNode } from "react";

import { darkTheme, lightTheme, useTheme } from "@shared/styles";

import "@shared/styles/reset.css";
import "@shared/styles/global.css";

type Props = { children: ReactNode };

export const ThemeProvider = ({ children }: Props) => {
  const { isDark } = useTheme();

  useEffect(() => {
    const root = document.body;

    root.classList.remove(lightTheme, darkTheme);
    root.classList.add(isDark ? darkTheme : lightTheme);
  }, [isDark]);

  return <>{children}</>;
};
