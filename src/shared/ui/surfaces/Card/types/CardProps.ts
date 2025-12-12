import type { ReactNode } from 'react';

type CardVariant =
  | 'default'
  | 'muted'
  | 'strong'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'none';

type ElevationVariant = 'none' | 'sm' | 'md' | 'lg';

export type CardProps = {
  children: ReactNode;
  tone?: CardVariant;
  border?: CardVariant;
  fullWidth?: boolean;
  interactive?: boolean;
  elevation?: ElevationVariant;
  className?: string;
};
