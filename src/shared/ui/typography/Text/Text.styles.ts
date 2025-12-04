import styled from '@emotion/styled';

import type { TextStyleProps } from './Text.types';

export const StyledText = styled.p<TextStyleProps>(
  ({ theme, $size, $color, $weight, $align, $noWrap }) => {
    let fontSize = theme.typography.fontSizes.md;

    if ($size === 'xs') fontSize = theme.typography.fontSizes.xs;
    if ($size === 'sm') fontSize = theme.typography.fontSizes.sm;
    if ($size === 'lg') fontSize = theme.typography.fontSizes.lg;

    let textColor = theme.colors.text;

    if ($color === 'muted') textColor = theme.colors.textMuted;
    if ($color === 'danger') textColor = theme.colors.danger;
    if ($color === 'success') textColor = theme.colors.success;
    if ($color === 'warning') textColor = theme.colors.warning;

    return {
      margin: 0,

      fontSize,
      fontWeight: $weight,
      textAlign: $align,

      color: textColor,

      whiteSpace: $noWrap ? 'nowrap' : 'normal',
      textOverflow: $noWrap ? 'ellipsis' : 'clip',
      overflow: $noWrap ? 'hidden' : 'visible',
    };
  },
);
