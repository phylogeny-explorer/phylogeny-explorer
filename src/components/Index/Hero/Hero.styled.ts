import styled from 'styled-components';
import Button from 'components/Button';
import { InfographicXlarge } from 'components/Typography';
import barnacle from '../../../../public/images/barnacle.png';

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - ${props => props.theme.topBarHeight}px);
  padding: ${props => props.theme.xLargeSpacer}px;
  box-sizing: border-box;
  background: ${props => props.theme.black} url(${barnacle.src});
  background-size: cover;
  color: ${props => props.theme.white};
  display: grid;
  grid-gap: ${props => props.theme.xLargeSpacer}px;
  justify-items: center;
  align-content: center;
  text-align: center;
`;

export const Title = styled(InfographicXlarge)`
  text-transform: capitalize;
`;

export const LargeButton = styled(Button)`
  height: unset;
  margin-top: ${props => props.theme.xLargeSpacer}px;
  padding: ${props => props.theme.largeSpacer}px
    ${props => props.theme.xLargeSpacer}px;

  span {
    font-size: 32px;
    line-height: unset;
    letter-spacing: 2.5px;
  }
`;
