import type { FC } from 'react';

import * as styles from './Paragraph.css';
import type { ParagraphProps } from './types/ParagraphProps';

export const Paragraph: FC<ParagraphProps> = ({
  children,
  tone = 'normal',
  size = 'md',
  weight = 'regular',
}) => {
  return <p className={styles.root({ tone, size, weight })}>{children}</p>;
};
