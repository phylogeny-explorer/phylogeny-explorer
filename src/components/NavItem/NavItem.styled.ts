import styled from 'styled-components';
import { SmallText } from 'components/Typography';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.primary};
  cursor: pointer;
`;

export const Title = styled(SmallText)`
  color: ${props => props.theme.white};
`;
