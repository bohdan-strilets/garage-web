import type { ReactNode } from 'react';

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4';
type HeadingSize = 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';

export type HeadingProps = {
  children: ReactNode;
  type?: HeadingType;
  size?: HeadingSize;
};
