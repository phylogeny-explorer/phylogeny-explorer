import styled from 'styled-components';

interface WrapperProps {
  color: 'light' | 'dark';
}

export const Wrapper = styled.div<WrapperProps>`
  display: grid;
  grid-gap: ${props => props.theme.spacer}px;
  justify-content: center;
  justify-items: center;
  align-content: center;
  color: ${props =>
    props.color === 'dark' ? props.theme.dgrey : props.theme.lgrey};
`;
