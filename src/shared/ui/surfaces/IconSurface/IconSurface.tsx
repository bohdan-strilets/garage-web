import type { FC } from 'react';

import * as styles from './IconSurface.css';
import type { IconSurfaceProps } from './types/IconSurfaceProps';

export const IconSurface: FC<IconSurfaceProps> = ({
  children,
  size = 'md',
  tone = 'default',
  isGradient = true,
}) => {
  return <div className={styles.root({ size, tone, isGradient })}>{children}</div>;
};
