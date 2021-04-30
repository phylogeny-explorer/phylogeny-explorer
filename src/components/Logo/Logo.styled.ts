import styled from 'styled-components';

interface WrapperProps {
  size: number;
  full: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  height: ${props => props.size}px;
  width: ${props => (props.full ? props.size * 7.2 : props.size)}px;
  cursor: pointer;
`;
