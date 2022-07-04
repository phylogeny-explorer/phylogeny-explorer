import styled from 'styled-components';
import { BoxStyles } from 'lib/types';
import { DescriptionText } from 'components/Typography';

export const Wrapper = styled.div<BoxStyles>`
  display: grid;
  grid-gap: ${props => props.theme.spacer}px;
  width: 100%;
  box-sizing: border-box;

  ${props => props.px && `padding: 0 ${props.theme.spacers[props.px]}px`}
`;

export const InputWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: minmax(200px, 360px);
  grid-auto-columns: 1fr;
  grid-gap: ${props => props.theme.spacer}px;
  justify-content: space-between;
  align-items: center;
`;

export const ErrorMessage = styled(DescriptionText)`
  margin-top: ${props => props.theme.smallSpacer}px;
  color: ${props => props.theme.secondary};
`;
