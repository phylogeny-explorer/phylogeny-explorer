import styled from 'styled-components';
import { hideVisually, transparentize } from 'polished';
import { BodyText } from 'components/Typography';

export const Label = styled.label`
  display: flex;
  position: relative;
  padding-left: 24px;
  min-height: 24px;
  user-select: none;
`;

export const Input = styled.input.attrs({ type: 'checkbox' })`
  ${hideVisually()};
`;

interface CheckProps {
  checked?: boolean;
  disabled?: boolean;
}

export const Check = styled.div<CheckProps>`
  position: absolute;
  top: -${props => props.theme.spacer}px;
  left: -${props => props.theme.spacer}px;

  display: flex;
  border-radius: 50%;
  padding: ${props => props.theme.spacer}px;
  cursor: pointer;

  ${props => props.checked && `color: ${props.theme.primary};`}
  ${props =>
    props.disabled &&
    `opacity: 0.5;
    cursor: default;`}

  ${Label}:hover &,
  ${Label}:focus &,
  ${Input}:hover + &,
  ${Input}:focus + & {
    ${props =>
      !props.disabled &&
      `background: ${transparentize(0.95, props.theme.vdgrey)};
      box-shadow: 0 0 0 3px ${transparentize(0.95, props.theme.vdgrey)};`}
  }
`;

export const Text = styled(BodyText)`
  margin-left: ${props => props.theme.spacer}px;
`;
