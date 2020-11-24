import styled from 'styled-components';
import { darken, lighten } from 'polished';
import { ButtonText } from '../Typography';

interface WrapperProps {
  small?: boolean;
  light?: boolean;
  dark?: boolean;
  disabled?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  background-color: ${(props) => props.theme.primary};
  border-radius: ${(props) => props.theme.borderRadius}px;
  padding: 0 ${(props) => props.theme.largeSpacer}px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: ${(props) => props.theme.buttonHeight}px;
  ${(props) =>
    props.small &&
    `height: 24px;
     padding: 0 ${props.theme.spacer}px;`}
  ${(props) => props.dark && `background-color: ${props.theme.black};`}
  ${(props) => props.light && `background-color: ${props.theme.white};`}
  ${(props) =>
    props.disabled &&
    `background-color: ${props.theme.lgrey};
     pointer-events: none;`}
     cursor: pointer;

     &:hover,
  &:focus {
    outline: none;
    background-color: #ACE8DD;
      transition: background-color 300;
  }
`;

interface TextProps {
  small?: boolean;
  light?: boolean;
  disabled?: boolean;
}

export const Text = styled(ButtonText)<TextProps>`
  color: ${(props) => props.theme.white};
  ${(props) => props.small && 'font-size: 9px;'}
  ${(props) => props.light && `color: ${props.theme.black};`}
  ${(props) => props.disabled && `color: ${props.theme.vlgrey};`}
`;
