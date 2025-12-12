import clsx from 'clsx';
import type { FC } from 'react';

import * as styles from './Button.css';
import type { ButtonProps } from './types/ButtonProps';

export const Button: FC<ButtonProps> = ({
  children,
  tone = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  ...props
}) => {
  return (
    <button className={clsx(styles.root({ tone, size, fullWidth }), className)} {...props}>
      {children}
    </button>
  );
};
