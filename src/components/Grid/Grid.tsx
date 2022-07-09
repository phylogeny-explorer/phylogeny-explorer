import styled from 'styled-components';
import { GridStyles } from 'lib/types';

const Grid = styled.div<GridStyles>`
  display: grid;
  grid-gap: ${props => props.theme.spacers[props.gap || 'md']}px;

  ${props => props.autoFlow && `grid-auto-flow: ${props.autoFlow};`}
  ${props => props.jc && `justify-content: ${props.jc};`}
  ${props => props.ji && `justify-items: ${props.ji};`}
  ${props => props.ac && `align-content: ${props.ac};`}
  ${props => props.ai && `align-items: ${props.ai};`}

  ${props => props.p && `padding: ${props.theme.spacers[props.p]}px;`}
  ${props =>
    (props.px || props.py) &&
    `padding: 
      ${props.py ? props.theme.spacers[props.py] : 0}px
      ${props.px ? props.theme.spacers[props.px] : 0}px;`}
`;

export default Grid;
