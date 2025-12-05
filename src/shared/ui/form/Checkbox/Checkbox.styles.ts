import styled from '@emotion/styled';

import type { BoxProps } from './Checkbox.types';

export const Wrapper = styled.label(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.space[2],

  cursor: 'pointer',
  userSelect: 'none',
}));

export const BoxWrapper = styled.span({
  position: 'relative',
  display: 'inline-flex',
});

export const HiddenInput = styled.input({
  position: 'absolute',
  opacity: 0,
  pointerEvents: 'none',
});

export const Box = styled.span<BoxProps>(({ theme, $checked, $disabled }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: 22,
  height: 22,

  borderRadius: theme.radii.sm,
  border: `1px solid ${theme.colors.border}`,
  backgroundColor: theme.colors.surface,
  boxShadow: theme.shadows.insetSm,

  transition: [
    `border-color ${theme.transitions.fast}`,
    `background-color ${theme.transitions.fast}`,
    `box-shadow ${theme.transitions.fast}`,
  ].join(', '),

  ...($checked && {
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.primary,
    boxShadow: theme.shadows.sm,
  }),

  ...($disabled && {
    opacity: 0.6,
    cursor: 'not-allowed',
  }),
}));

export const CheckMark = styled.span(({ theme }) => ({
  width: 10,
  height: 10,

  borderRadius: theme.radii.sm,
  backgroundColor: theme.colors.text,
  boxShadow: theme.shadows.sm,
}));

export const TextWrapper = styled.span(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.space[1],
}));

export const LabelText = styled.span(({ theme }) => ({
  fontSize: theme.typography.fontSizes.sm,
  color: theme.colors.text,
}));

export const HelperText = styled.span(({ theme }) => ({
  fontSize: theme.typography.fontSizes.xs,
  color: theme.colors.textMuted,
}));
