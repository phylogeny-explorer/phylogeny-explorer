import styled from 'styled-components';
import { transparentize } from 'polished';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 328px 1fr auto;
  grid-auto-flow: column;
  grid-gap: ${props => props.theme.largeSpacer}px;
  align-items: center;
  height: ${props => props.theme.topBarHeight}px;
  padding: ${props => props.theme.spacer}px
    ${props => props.theme.xLargeSpacer}px;
  background: ${props => transparentize(0.05, props.theme.black)};
  box-sizing: border-box;

  @media screen and (max-width: 600px) {
    grid-template-columns: auto 1fr auto;
  }
`;

export const NavItems = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${props => props.theme.largeSpacer}px;
  justify-content: start;
`;
