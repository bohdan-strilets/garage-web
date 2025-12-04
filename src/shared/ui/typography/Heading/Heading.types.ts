import type { ReactNode } from 'react';

type HeadingSize = 'xl' | '2xl' | '3xl';
type HeadingAlign = 'left' | 'center' | 'right';
type HeadingTag = 'h1' | 'h2' | 'h3';
type TextColor = 'default' | 'muted' | 'danger' | 'success' | 'warning';

export interface HeadingProps {
  children: ReactNode;
  as?: HeadingTag;
  size?: HeadingSize;
  align?: HeadingAlign;
  color?: TextColor;
  className?: string;
}

export interface HeadingStyleProps {
  $size: HeadingSize;
  $align: HeadingAlign;
  $color: TextColor;
}
