import { HeadingLarge } from 'components/Typography';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.xLargeSpacer}px;
  grid-template-rows: auto 1fr;
  max-width: 300px;
`;

export const Name = styled(HeadingLarge)`
  text-align: center;
`;

export const Info = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.largeSpacer}px;
  grid-template-rows: auto 1fr;
`;
