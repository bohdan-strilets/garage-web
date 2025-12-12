import type { FC, PropsWithChildren } from 'react';
import { useEffect } from 'react';

import { darkTheme, lightTheme } from '@shared/styles';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const type = 'light' as 'light' | 'dark';

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;
    const themeClass = type === 'dark' ? darkTheme : lightTheme;

    root.classList.remove(lightTheme, darkTheme);
    root.classList.add(themeClass);
    root.dataset.theme = type;
  }, [type]);

  return <>{children}</>;
};
