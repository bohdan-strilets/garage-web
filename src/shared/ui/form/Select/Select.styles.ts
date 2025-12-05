import styled from '@emotion/styled';

import type { OptionProps, TriggerProps, WrapperProps } from './Select.types';

export const Wrapper = styled.div<WrapperProps>(({ theme, $fullWidth, $disabled }) => ({
  position: 'relative',

  width: $fullWidth ? '100%' : 'auto',
  minWidth: 0,

  fontSize: theme.typography.fontSizes.md,

  opacity: $disabled ? 0.6 : 1,
  pointerEvents: $disabled ? 'none' : 'auto',
}));

export const Trigger = styled.button<TriggerProps>(({ theme, $invalid, $isOpen }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.space[2],

  width: '100%',
  minHeight: 40,
  padding: `${theme.space[2]} ${theme.space[3]}`,

  textAlign: 'left',

  color: theme.colors.text,
  backgroundColor: theme.input.bg,
  borderRadius: theme.radii.md,
  border: `1px solid ${theme.input.border}`,
  boxShadow: theme.shadows.insetSm,

  cursor: 'pointer',

  transition: [
    `border-color ${theme.transitions.fast}`,
    `box-shadow ${theme.transitions.fast}`,
    `background-color ${theme.transitions.fast}`,
    `transform ${theme.transitions.fast}`,
  ].join(', '),

  '&:hover': {
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.surface,
  },

  '&:focus-visible': {
    outline: 'none',
    borderColor: theme.input.focus,
    boxShadow: `${theme.shadows.sm}, 0 0 0 1 ${theme.focusRing.color}`,
  },

  ...($invalid && {
    borderColor: theme.colors.danger,
    boxShadow: `${theme.shadows.insetSm}, 0 0 0 ${theme.focusRing.width} ${theme.colors.dangerSoft}`,
  }),

  ...($isOpen && {
    transform: 'translateY(0)',
    boxShadow: theme.shadows.card,
  }),
}));

export const ValueText = styled.span(({ theme }) => ({
  flex: 1,
  minWidth: 0,

  color: theme.colors.text,

  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}));

export const PlaceholderText = styled(ValueText)(({ theme }) => ({
  color: theme.input.placeholder,
}));

export const Arrow = styled.span(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',

  marginLeft: theme.space[2],
  color: theme.colors.textMuted,

  fontSize: theme.typography.fontSizes.sm,
}));

export const Dropdown = styled.div(({ theme }) => ({
  position: 'absolute',
  zIndex: 20,
  top: '100%',
  left: 0,
  right: 0,

  marginTop: theme.space[1],
  maxHeight: 260,
  padding: `${theme.space[1]} 0`,

  borderRadius: theme.radii.md,
  backgroundColor: theme.colors.surface,
  boxShadow: theme.shadows.card,
  border: `1px solid ${theme.colors.border}`,

  overflowY: 'auto',
}));

export const Option = styled.button<OptionProps>(({ theme, $active, $selected, $disabled }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.space[2],

  width: '100%',
  padding: `${theme.space[2]} ${theme.space[3]}`,

  fontSize: theme.typography.fontSizes.sm,
  textAlign: 'left',

  color: theme.colors.text,
  background: 'transparent',
  border: 'none',

  cursor: $disabled ? 'not-allowed' : 'pointer',

  transition: `background-color ${theme.transitions.fast}, color ${theme.transitions.fast}`,

  ...(!$disabled && {
    '&:hover': {
      backgroundColor: theme.colors.surfaceMuted,
    },
  }),

  ...($active &&
    !$disabled && {
      backgroundColor: theme.colors.primary,
    }),

  ...($selected && {
    fontWeight: 500,
  }),

  ...($disabled && {
    color: theme.colors.textMuted,
  }),
}));

export const OptionLabel = styled.span({
  flex: 1,
  minWidth: 0,

  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const OptionCheck = styled.span(({ theme }) => ({
  fontSize: theme.typography.fontSizes.md,
  color: theme.colors.text,
}));
