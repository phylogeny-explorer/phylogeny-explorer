import styled from 'styled-components';
import Button from 'components/Button';
import { HeadingXLarge, Heading } from 'components/Typography';
import barnacle from '../../../../public/images/barnacle.png';

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - ${props => props.theme.topBarHeight}px);
  flex-shrink: 0;
  padding: ${props => props.theme.xLargeSpacer}px;
  box-sizing: border-box;
  background: #000 url(${barnacle.src});
  background-size: cover;
  color: ${props => props.theme.white};
  display: grid;
  grid-gap: ${props => props.theme.xLargeSpacer}px;
  justify-items: center;
  align-content: center;
  text-align: center;

  @media screen and (max-width: 320px) {
    padding: ${props => props.theme.xLargeSpacer}px;
  }
`;

export const Title = styled(HeadingXLarge)`
  text-transform: uppercase;
  font-weight: 300;
  text-shadow: black 2px 4px 5px;
`;

export const Subtitle = styled(Heading)`
  font-weight: 300;
  text-shadow: black 2px 4px 3px;
`;

export const LargeButton = styled(Button)`
  height: unset;
  margin-top: ${props => props.theme.xLargeSpacer}px;
  padding: ${props => props.theme.largeSpacer}px
    ${props => props.theme.xLargeSpacer}px;

  @media screen and (max-width: 320px) {
    padding: ${props => props.theme.largeSpacer}px;
  }

  span {
    font-size: 2rem;
    line-height: unset;
    letter-spacing: 2.5px;
    @media screen and (max-width: 600px) {
      font-size: 1.8rem;
    }
    @media screen and (max-width: 360px) {
      font-size: 1.7rem;
    }
    @media screen and (max-width: 320px) {
      font-size: 1.5rem;
    }
  }
`;
