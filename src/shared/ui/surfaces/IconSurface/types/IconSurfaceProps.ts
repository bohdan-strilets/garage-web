import type { ReactNode } from 'react';

type IconSurfaceSize = 'sm' | 'md' | 'lg';
type IconSurfaceTone = 'default' | 'success' | 'warning' | 'danger' | 'info' | 'primary';

export type IconSurfaceProps = {
  children: ReactNode;
  size?: IconSurfaceSize;
  tone?: IconSurfaceTone;
  isGradient?: boolean;
};
