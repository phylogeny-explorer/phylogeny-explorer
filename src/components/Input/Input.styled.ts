import styled, { css } from 'styled-components';

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
    color: ${props => props.theme.grey};
  }
`;

export const StyledInput = styled.input`
  ${sharedInputStyle}
`;
