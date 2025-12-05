import styled from '@emotion/styled';

export const FieldWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',

  marginBottom: theme.space[3],

  [theme.breakpoints.up('tablet')]: {
    marginBottom: theme.space[4],
  },
}));

export const LabelRow = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',

  marginBottom: theme.space[1],
}));

export const HelperText = styled.span(({ theme }) => ({
  fontSize: theme.typography.fontSizes.xs,
  color: theme.colors.textMuted,
}));
