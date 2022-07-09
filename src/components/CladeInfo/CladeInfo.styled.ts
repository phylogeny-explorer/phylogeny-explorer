import styled from 'styled-components';
import { SmallText } from 'components/Typography';

export const Content = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.largeSpacer}px;
  align-content: start;
  padding: ${props => props.theme.largeSpacer}px
    ${props => props.theme.xLargeSpacer}px;
`;

export const Section = styled.div``;

export const Authority = styled(SmallText)`
  color: ${props => props.theme.vlgrey};
`;

export const Buttons = styled.div`
  display: grid;
  grid-auto-flow: column;
`;
