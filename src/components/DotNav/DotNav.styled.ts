import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  display: grid;
  grid-gap: ${props => props.theme.spacers.lg}px;
  right: ${props => props.theme.spacers.lg}px;
  height: 100%;
  align-content: center;
`;

interface DotProps {
  active: boolean;
}

export const Dot = styled.a<DotProps>`
  border-radius: 50%;
  width: ${props => props.theme.spacers.lg}px;
  height: ${props => props.theme.spacers.lg}px;
  background: ${props => props.theme.vvlgrey};
  opacity: ${props => (props.active ? 1 : 0.5)};
  transition: opacity 0.2s ease-in-out;
`;
