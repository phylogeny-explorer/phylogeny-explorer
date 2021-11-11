import styled from 'styled-components';
import { transparentize } from 'polished';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-gap: ${props => props.theme.spacer}px;
  align-items: center;
  height: ${props => props.theme.topBarHeight}px;
  padding: ${props => props.theme.spacer}px
    ${props => props.theme.xLargeSpacer}px;
  background: ${props => transparentize(0.05, props.theme.black)};
  box-sizing: border-box;
`;
