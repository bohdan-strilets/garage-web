import type { FC } from 'react';

import * as styles from './Heading.css';
import type { HeadingProps } from './types/HeadingProps';

export const Heading: FC<HeadingProps> = ({ children, type = 'h1', size = 'xl' }) => {
  const Tag = type;

  return <Tag className={styles.root({ size })}>{children}</Tag>;
};
