import styled from 'styled-components';
import ReactCodeInput from 'react-code-input';

export const CodeInput = styled(ReactCodeInput)`
  display: flex !important;
  justify-content: space-between;
  input {
    color: ${props => props.theme.black};
    font-size: 16px;
    padding: ${props => props.theme.spacer}px;
    height: ${props => props.theme.buttonHeight}px;
    width: ${props => props.theme.buttonHeight}px;
    box-sizing: border-box;
    border-radius: ${props => props.theme.borderRadius}px;
    border: 1px solid ${props => props.theme.black};
    outline: none;
    text-align: center;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type='number'] {
      -moz-appearance: textfield;
    }
  }
`;
