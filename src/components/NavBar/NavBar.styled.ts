import styled from 'styled-components';
import { transparentize } from 'polished';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 328px 1fr auto;
  grid-auto-flow: column;
  grid-gap: ${props => props.theme.largeSpacer}px;
  align-items: center;
  height: ${props => props.theme.topBarHeight}px;
  min-height: ${props => props.theme.topBarHeight}px;
  padding: ${props => props.theme.spacer}px
    ${props => props.theme.xLargeSpacer}px;
  background: ${props => transparentize(0.05, props.theme.black)};
  color: ${props => props.theme.white};
  box-sizing: border-box;

  @media screen and (max-width: 650px) {
    grid-template-columns: 1fr auto;
    padding: ${props => props.theme.spacer}px
      ${props => props.theme.largeSpacer}px;
  }
`;

export const NavItems = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${props => props.theme.largeSpacer}px;
  justify-content: start;

  @media screen and (max-width: 650px) {
    grid-auto-flow: row;
  }
`;

interface MenuProps {
  isOpen?: boolean;
}

export const MenuWrapper = styled.div<MenuProps>`
  position: fixed;
  top: ${props => props.theme.topBarHeight}px;
  left: 0;
  display: grid;
  align-content: start;
  height: 0;
  width: 100%;
  box-sizing: border-box;
  padding-top: ${props => props.theme.smallSpacer}px;
  background-color: ${props => props.theme.offBlack};
  z-index: 1;
  opacity: 0;
  transition: height 300ms, opacity 100ms;
  pointer-events: none;

  ${props =>
    props.isOpen &&
    `opacity: 1;
    height: 100%;
    pointer-events: all;`}
`;

export const MenuItem = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${props => props.theme.largeSpacer}px;
  justify-content: start;
  padding: ${props => props.theme.largeSpacer}px;
  background: ${props => props.theme.white};
  color: ${props => props.theme.black};
`;
