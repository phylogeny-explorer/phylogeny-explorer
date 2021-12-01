import styled from 'styled-components';
import { HeadingLabel } from 'components/Typography';

export const Wrapper = styled.div`
  width: 100%;
  padding: ${props => props.theme.xxLargeSpacer}px;
  box-sizing: border-box;
  background: ${props => props.theme.foreground};
  color: ${props => props.theme.white};
  display: grid;
  grid-gap: ${props => props.theme.xLargeSpacer}px;
  grid-template-columns: 1fr auto;
  align-items: center;

  @media screen and (max-width: 700px) {
    grid-template-columns: unset;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: unset;
    padding: ${props => props.theme.xLargeSpacer}px;
  }
`;

export const Copyright = styled(HeadingLabel)`
  font-size: 1rem;
  line-height: 1rem;
  letter-spacing: 0.1rem;
`;

export const Icons = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.xLargeSpacer}px;
  grid-auto-flow: column;

  @media screen and (max-width: 700px) {
    justify-content: start;
  }
`;
