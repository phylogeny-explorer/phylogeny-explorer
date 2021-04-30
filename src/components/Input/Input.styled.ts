import styled from 'styled-components';
import { HeadingLabel, DescriptionText } from 'components/Typography';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled(HeadingLabel)`
  margin-bottom: ${props => props.theme.spacer}px;
`;

export const StyledInput = styled.input`
  color: ${props => props.theme.black};
  font-size: 16px;
  padding: ${props => props.theme.spacer}px;
  height: ${props => props.theme.buttonHeight}px;
  box-sizing: border-box;
  border-radius: ${props => props.theme.borderRadius}px;
  border: 1px solid ${props => props.theme.black};
  outline: none;
`;

export const ErrorMessage = styled(DescriptionText)`
  margin-top: ${props => props.theme.smallSpacer}px;
  color: ${props => props.theme.lsecondary};
`;
