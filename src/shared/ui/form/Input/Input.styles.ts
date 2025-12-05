import styled from '@emotion/styled';

import type { InputStyleProps } from './Input.types';

export const StyledInput = styled.input<InputStyleProps>(({ theme, $invalid, $fullWidth }) => ({
  width: $fullWidth ? '100%' : 'auto',
  minWidth: 0,
  padding: `${theme.space[2]} ${theme.space[3]}`,

  fontSize: theme.typography.fontSizes.md,
  lineHeight: 1.4,

  color: theme.colors.text,
  border: `1px solid ${theme.input.border}`,
  borderRadius: theme.radii.md,
  backgroundColor: theme.input.bg,
  boxShadow: theme.shadows.sm,

  transition: [
    `border-color ${theme.transitions.fast}`,
    `box-shadow ${theme.transitions.fast}`,
    `background-color ${theme.transitions.fast}`,
  ].join(', '),

  '::placeholder': {
    color: theme.input.placeholder,
  },

  '&:hover': {
    borderColor: theme.colors.border,
  },

  '&:focus-visible': {
    outline: 'none',
    borderColor: theme.input.focus,
    boxShadow: `${theme.shadows.insetSm}, 0 0 0 ${theme.focusRing.width} 1`,
    backgroundColor: theme.colors.surface,
  },

  ...($invalid && {
    borderColor: theme.colors.danger,
    boxShadow: `${theme.shadows.insetSm}, 0 0 0 ${theme.focusRing.width} 1`,
  }),

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
    backgroundColor: theme.colors.surfaceMuted,
  },
}));
