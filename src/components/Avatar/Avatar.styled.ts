import styled from 'styled-components';

interface MainProps {
  size: number;
  onClick?: () => void;
}

export const Main = styled.div<MainProps>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.theme.grey};
  border-radius: ${props => props.size / 2}px;
  overflow: hidden;
  box-sizing: border-box;
  flex-shrink: 0;
  ${props => !!props.onClick && 'cursor: pointer'};
`;
