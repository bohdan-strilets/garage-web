import { useEffect, type ReactNode } from "react";

import { darkTheme, lightTheme, useTheme } from "@shared/styles";

import "@shared/styles/reset.css";
import "@shared/styles/global.css";

type Props = { children: ReactNode };

export const ThemeProvider = ({ children }: Props) => {
  const { isDark, init } = useTheme();

  useEffect(() => {
    init();
  }, [init]);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove(lightTheme, darkTheme);
    root.classList.add(isDark ? darkTheme : lightTheme);

    root.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return <>{children}</>;
};
