import styled from '@emotion/styled';

import type { ButtonStyleProps } from './Button.types';

export const StyledButton = styled.button<ButtonStyleProps>(
  ({ theme, $variant, $size, $fullWidth, $disabled, $loading }) => {
    const isDisabled = $disabled || $loading;

    let padding = `${theme.space[2]} ${theme.space[7]}`;

    if ($size === 'sm') padding = `${theme.space[1]} ${theme.space[5]}`;
    if ($size === 'lg') padding = `${theme.space[3]} ${theme.space[7]}`;

    let fontSize = theme.typography.fontSizes.md;

    if ($size === 'sm') fontSize = theme.typography.fontSizes.sm;
    if ($size === 'lg') fontSize = theme.typography.fontSizes.lg;

    let background = theme.colors.primary;
    let color = theme.colors.text;
    let boxShadow = theme.shadows.md;
    let border = 'none';

    if ($variant === 'secondary') {
      background = theme.colors.surface;
      color = theme.colors.text;
      border = `1px solid ${theme.colors.border}`;
      boxShadow = theme.shadows.card;
    }

    if ($variant === 'ghost') {
      background = 'transparent';
      color = theme.colors.text;
      border = '1px solid transparent';
      boxShadow = 'none';
    }

    if ($variant === 'danger') {
      background = theme.colors.danger;
      color = theme.colors.bg;
      border = 'none';
      boxShadow = theme.shadows.md;
    }

    if ($variant === 'success') {
      background = theme.colors.success;
      color = theme.colors.bg;
      border = 'none';
      boxShadow = theme.shadows.md;
    }

    return {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: theme.space[2],

      padding,
      width: $fullWidth ? '100%' : 'auto',

      fontSize,
      fontWeight: 500,

      color,
      backgroundColor: background,
      borderRadius: theme.radii.md,
      border,
      boxShadow,

      cursor: isDisabled ? 'not-allowed' : 'pointer',
      opacity: isDisabled ? 0.6 : 1,

      transition: [
        `transform ${theme.transitions.fast}`,
        `box-shadow ${theme.transitions.fast}`,
        `background-color ${theme.transitions.fast}`,
        `border-color ${theme.transitions.fast}`,
      ].join(', '),

      '&:hover': !isDisabled && {
        transform: 'translateY(-1px)',
        boxShadow: theme.shadows.card,
      },

      '&:active': !isDisabled && {
        transform: 'translateY(0)',
        boxShadow: theme.shadows.sm,
      },

      '&:focus-visible': {
        outline: 'none',
        boxShadow: `${theme.shadows.md}, 0 0 0 ${theme.focusRing.width} ${theme.focusRing.color}`,
      },
    };
  },
);

export const IconWrapper = styled.span(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',

  fontSize: theme.typography.fontSizes.sm,
}));
