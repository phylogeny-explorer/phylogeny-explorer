import styled from 'styled-components';

interface GProps {
  isRoot?: boolean;
  isLeaf?: boolean;
}

export const G = styled.g<GProps>`
  fill: ${props => props.theme.white};
  stroke: ${props => props.theme.primary};
  stroke-width: 2.5px;

  ${props =>
    props.isRoot &&
    `fill: ${props.theme.secondary};
    stroke: none;`}
  ${props =>
    props.isLeaf &&
    `fill: ${props.theme.primary};
    stroke: none;

    circle {
      pointer-events: none;
    }`}
`;

interface TextProps {
  disabled?: boolean;
  overlay?: boolean;
  selected?: boolean;
}

export const Text = styled.text<TextProps>`
  fill: ${props => props.theme.offBlack};
  stroke: none;
  font-size: 14px;
  font-weight: 500;

  ${props =>
    props.disabled &&
    `fill: ${props.theme.grey};
    cursor: grab;`}

  ${props => props.overlay && `stroke: ${props.theme.offWhite};`}

  ${props =>
    props.selected &&
    `fill: ${props.theme.primary};
    cursor: grab;`}
`;
