import styled from 'styled-components';
import { transparentize } from 'polished';

interface TileProps {
  color: string;
  shape?: 'circle' | 'square';
  size: number;
}

export const Tile = styled.div<TileProps>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  ${props => props.shape === 'circle' && `border-radius: ${props.size / 2}px;`};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: auto;
  flex-shrink: 0;
`;

export const ClickWrapper = styled.span`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  transition: transform 0.2s;
  position: relative;
  border-radius: 50%;
  color: inherit;

  &:hover {
    transform: scale(1.1);
    background-color: ${props => transparentize(0.95, props.theme.vdgrey)};
    box-shadow: 0 0 0 8px ${props => transparentize(0.95, props.theme.vdgrey)};
  }
`;

export const StoryRow = styled.div`
  display: flex;
  flex-direction: row;
`;
