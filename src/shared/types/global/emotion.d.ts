/* eslint-disable @typescript-eslint/no-empty-object-type */

import type { AppTheme } from '../../styles/theme/types';

import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}
