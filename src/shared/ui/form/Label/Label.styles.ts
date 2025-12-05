import styled from '@emotion/styled';

import type { StyledLabelProps } from './Label.types';

export const StyledLabel = styled.label<StyledLabelProps>(({ theme, $fullWidth }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.space[1],

  fontSize: theme.typography.fontSizes.sm,
  fontWeight: 500,

  marginBottom: theme.space[1],
  width: $fullWidth ? '100%' : 'auto',

  color: theme.colors.text,
}));

export const RequiredMark = styled.span(({ theme }) => ({
  color: theme.colors.danger,
}));
