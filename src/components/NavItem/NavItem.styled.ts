import styled from 'styled-components';
import { Heading, SmallText } from 'components/Typography';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.primary};
  cursor: pointer;

  @media screen and (max-width: 650px) {
    display: grid;
    grid-auto-flow: column;
    grid-gap: ${props => props.theme.largeSpacer}px;
    justify-content: start;
    padding: ${props => props.theme.largeSpacer}px;
  }
`;

export const LargeTitle = styled(Heading)`
  color: ${props => props.theme.white};
`;

export const Title = styled(SmallText)`
  color: ${props => props.theme.white};
`;
