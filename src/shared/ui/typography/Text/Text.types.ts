import type { ReactNode } from 'react';

type TextSize = 'xs' | 'sm' | 'md' | 'lg';
type TextColor = 'default' | 'muted' | 'danger' | 'success' | 'warning';
type TextWeight = 400 | 500 | 600 | 700;
type TextAlign = 'left' | 'center' | 'right';
type TextTag = 'p' | 'span' | 'div';

export interface TextProps {
  children: ReactNode;
  as?: TextTag;
  size?: TextSize;
  color?: TextColor;
  weight?: TextWeight;
  align?: TextAlign;
  noWrap?: boolean;
  className?: string;
}

export interface TextStyleProps {
  $size: TextSize;
  $color: TextColor;
  $weight: TextWeight;
  $align: TextAlign;
  $noWrap?: boolean;
}
