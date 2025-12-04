import styled from '@emotion/styled';

import type { HeadingStyleProps } from './Heading.types';

export const StyledHeading = styled.h1<HeadingStyleProps>(({ theme, $size, $align, $color }) => {
  let fontSize = theme.typography.fontSizes.xl;

  if ($size === '2xl') fontSize = theme.typography.fontSizes['2xl'];
  if ($size === '3xl') fontSize = theme.typography.fontSizes['3xl'];

  let textColor = theme.colors.text;

  if ($color === 'muted') textColor = theme.colors.textMuted;
  if ($color === 'danger') textColor = theme.colors.danger;
  if ($color === 'success') textColor = theme.colors.success;
  if ($color === 'warning') textColor = theme.colors.warning;

  return {
    margin: 0,
    marginBottom: theme.space[3],

    color: textColor,

    fontFamily: theme.typography.fontFamily.lobster,
    fontWeight: 600,
    letterSpacing: '0.02em',
    fontSize,
    textAlign: $align,
  };
});
