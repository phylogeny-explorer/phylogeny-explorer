import styled from 'styled-components';
import { HeadingXLarge, Heading } from 'components/Typography';

interface Props {
  backgroundUrl: string;
}

export const Wrapper = styled.div<Props>`
  padding: ${props => props.theme.xxLargeSpacer}px;
  background: #000 url(${props => props.backgroundUrl});
  background-size: cover;
  color: ${props => props.theme.white};
  display: grid;
  grid-gap: ${props => props.theme.xLargeSpacer}px;
  text-align: center;

  @media screen and (max-width: 320px) {
    padding: ${props => props.theme.xLargeSpacer}px;
  }
`;

export const Title = styled(HeadingXLarge)`
  font-weight: 300;
  text-shadow: black 2px 4px 5px;
`;

export const Subtitle = styled(Heading)`
  font-weight: 300;
  text-shadow: black 1px 2px 3px;
`;
