import styled from 'styled-components';
import { transparentize } from 'polished';
import Button from 'components/Button';

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

  @media screen and (max-width: 613px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 320px) {
    padding: ${props => props.theme.spacer}px
      ${props => props.theme.largeSpacer}px;
  }
`;

export const AuthButton = styled(Button).attrs({
  squishy: true,
  iconFirst: true,
})`
  @media screen and (max-width: 613px) {
    display: none;
  }
`;
