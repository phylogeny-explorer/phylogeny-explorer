import styled, { css } from 'styled-components';
import { HeadingLabel, DescriptionText } from 'components/Typography';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled(HeadingLabel)`
  margin-bottom: ${props => props.theme.spacer}px;
`;

export const sharedInputStyle = css`
  font-family: inherit;
  font-size: inherit;
  color: ${props => props.theme.black};
  padding: ${props => props.theme.spacer}px;
  height: ${props => props.theme.buttonHeight}px;
  box-sizing: border-box;
  border-radius: ${props => props.theme.borderRadius}px;
  border: 1px solid ${props => props.theme.vvlgrey};
  outline: none;

  ::placeholder {
    font-family: inherit;
    font-weight: normal;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`;

export const StyledInput = styled.input`
  ${sharedInputStyle}
`;

export const ErrorMessage = styled(DescriptionText)`
  margin-top: ${props => props.theme.smallSpacer}px;
  color: ${props => props.theme.secondary};
`;
