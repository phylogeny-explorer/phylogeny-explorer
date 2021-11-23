import styled from 'styled-components';
import { transparentize } from 'polished';

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 328px 1fr auto;
  grid-auto-flow: column;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.14);
  display: flex;
  grid-gap: ${props => props.theme.largeSpacer}px;
  align-items: center;
  height: ${props => props.theme.topBarHeight}px;
  padding: ${props => props.theme.spacer}px
    ${props => props.theme.xLargeSpacer}px;
  background: ${props => transparentize(0.05, props.theme.black)};
  box-sizing: border-box;
`;

export const NavItems = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${props => props.theme.largeSpacer}px;
  justify-content: start;
`;
