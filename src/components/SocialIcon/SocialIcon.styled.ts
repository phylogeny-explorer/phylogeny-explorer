import styled from 'styled-components';

interface TileProps {
  color: string;
  shape?: 'circle' | 'square';
  size: number;
}

export const Tile = styled.div<TileProps>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  ${props =>
    props.shape === 'circle' && `border-radius: ${props.size / 2}px;`};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: auto;
  flex-shrink: 0;
`;

export const StoryRow = styled.div`
  display: flex;
  flex-direction: row;
`;
