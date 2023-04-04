import styled from 'styled-components';

export const StyledLink = styled.a`
  color: ${props => props.theme.warning};
  &:hover {
    text-decoration-color: ${props => props.theme.warning};
  }
`;
