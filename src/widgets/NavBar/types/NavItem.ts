import type { ReactNode } from 'react';

export type NavItem = {
  id: string;
  icon: ReactNode;
  label: string;
  to: string;
};
