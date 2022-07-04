import styled from 'styled-components';
import Card from 'components/Card';
import { DescriptionText } from 'components/Typography';

export const Wrapper = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.spacers.md}px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 ${props => props.theme.spacers.lg}px;

  ${Card} > & {
    padding: unset;
  }
`;

export const InputWithSource = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: minmax(200px, 360px);
  grid-gap: ${props => props.theme.spacers.md}px;
  justify-content: space-between;
  align-items: center;
`;

export const InputWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${props => props.theme.spacers.lg}px;
  align-items: center;
`;

export const ErrorMessage = styled(DescriptionText)`
  margin-top: ${props => props.theme.spacers.sm}px;
  color: ${props => props.theme.secondary};
`;
