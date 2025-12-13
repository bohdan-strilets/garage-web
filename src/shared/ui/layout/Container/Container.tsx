import type { FC } from 'react';

import * as styles from './Container.css';
import type { ContainerProps } from './types/ContainerProps';

export const Container: FC<ContainerProps> = ({ children }) => {
  return <main className={styles.root}>{children}</main>;
};
