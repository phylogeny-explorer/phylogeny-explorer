import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  color: ${props => props.theme.white};
  display: grid;
  grid-gap: ${props => props.theme.spacer}px;
  justify-content: center;
  text-align: center;
`;

interface Props {
  disabled?: boolean;
}

export const Main = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background: none;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.black};
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  ${props =>
    props.disabled &&
    `background: ${props.theme.lgrey};
    color: ${props.theme.vlgrey};
  `}

  &[disabled] {
    pointer-events: none;
  }

  &:hover,
  &:focus {
    outline: none;
    background: ${props => darken(0.1, props.theme.primary)};
    transition: background 300ms;
  }
`;
