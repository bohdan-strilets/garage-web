import type { ReactNode } from 'react';

export interface LabelProps {
  children: ReactNode;
  htmlFor?: string;
  required?: boolean;
  fullWidth?: boolean;
  className?: string;
}

export interface StyledLabelProps {
  $fullWidth?: boolean;
}
