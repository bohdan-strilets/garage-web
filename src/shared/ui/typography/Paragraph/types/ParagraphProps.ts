import type { ReactNode } from 'react';

type ParagraphTone =
  | 'normal'
  | 'muted'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'inverted'
  | 'disabled';

type ParagraphSize = 'xs' | 'sm' | 'md' | 'lg';

type ParagraphWeight = 'regular' | 'medium' | 'bold';

export type ParagraphProps = {
  children: ReactNode;
  tone?: ParagraphTone;
  size?: ParagraphSize;
  weight?: ParagraphWeight;
};
