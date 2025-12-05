import styled from '@emotion/styled';

export const Wrapper = styled.div(({ theme }) => ({
  marginBottom: theme.space[3],

  [theme.breakpoints.up('tablet')]: {
    marginBottom: theme.space[4],
  },
}));
