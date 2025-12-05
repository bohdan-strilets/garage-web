import styled from '@emotion/styled';

import type { WrapperProps } from './PasswordInput.types';

export const Wrapper = styled.div<WrapperProps>(({ $fullWidth }) => ({
  position: 'relative',
  width: $fullWidth ? '100%' : 'auto',
  minWidth: 0,
}));

export const ToggleButton = styled.button(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  right: theme.space[2],
  transform: 'translateY(-50%)',

  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',

  fontSize: theme.typography.fontSizes.md,

  padding: `0 ${theme.space[1]}`,

  borderRadius: theme.radii.sm,
  border: 'none',
  background: 'transparent',
  color: theme.colors.textMuted,

  cursor: 'pointer',
  transition: `background-color ${theme.transitions.fast}, color ${theme.transitions.fast}`,

  '&:hover': {
    backgroundColor: theme.colors.surfaceMuted,
    color: theme.colors.text,
  },

  '&:focus-visible': {
    outline: 'none',
    boxShadow: `0 0 0 ${theme.focusRing.width} ${theme.focusRing.color}`,
  },
}));
