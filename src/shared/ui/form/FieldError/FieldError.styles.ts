import styled from '@emotion/styled';

export const StyledError = styled.p(({ theme }) => ({
  margin: 0,
  marginTop: theme.space[1],

  fontSize: theme.typography.fontSizes.xs,
  color: theme.colors.danger,
}));
