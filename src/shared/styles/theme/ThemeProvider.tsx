import { type FC, type PropsWithChildren } from 'react';

import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import { lightTheme } from './theme';

export const AppThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const theme = lightTheme;
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};
