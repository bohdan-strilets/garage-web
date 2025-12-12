import clsx from 'clsx';
import type { FC } from 'react';

import * as styles from './Card.css';
import type { CardProps } from './types/CardProps';

export const Card: FC<CardProps> = ({
  children,
  tone = 'default',
  border = 'none',
  fullWidth = false,
  interactive = false,
  elevation = 'md',
  className,
}) => {
  return (
    <div
      className={clsx(styles.root({ tone, border, fullWidth, interactive, elevation }), className)}
      tabIndex={interactive ? 0 : undefined}
    >
      {children}
    </div>
  );
};
