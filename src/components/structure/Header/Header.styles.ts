import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: ${theme.sizes.fullWidth};
    padding: ${theme.spacing.lg};
  `}
`;
