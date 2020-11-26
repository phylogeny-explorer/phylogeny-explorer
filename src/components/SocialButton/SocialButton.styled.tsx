import styled from 'styled-components';
import { darken } from 'polished';
import { COLOURS } from '../../consts';

interface WrapperProps {
  small?: boolean;
  squishy?: boolean;
  visuallyDisabled?: boolean;
  loading?: boolean;
  platform: string;
  light?: boolean;
  official?: boolean;
}

export const Wrapper = styled.button.attrs({
  dataTestId: 'social-button',
})<WrapperProps>`
  max-width: 100%;
  height: ${props =>
    props.small ? props.theme.buttonHeightSmall : props.theme.buttonHeight}px;
  ${props => !props.squishy && `min-width: ${props.theme.buttonMinWidth}px;`}
  ${props =>
    props.small &&
    !props.squishy &&
    `min-width: ${props.theme.buttonMinWidthSmall}px;`}
  cursor: pointer;
  background-color: ${props =>
    props.light ? props.theme.white : COLOURS[props.platform]};
  color: ${props => (props.light ? props.theme.black : props.theme.white)};
  border-radius: ${props => props.theme.borderRadius}px;
  padding: 0 ${props => props.theme[props.small ? 'smallSpacer' : 'spacer']}px;
  border: 0;
  display: flex;
  align-items: center;
  text-align: center;
  ${props => props.official && `padding: 0 18px;`}

  ${props =>
    props.visuallyDisabled &&
    `background: ${props.theme.lgrey};
    color: ${props.theme.vlgrey};
  `}

  &[disabled] {
    pointer-events: none;
  }

  &:hover,
  &:focus {
    outline: none;
    background-color: ${props =>
      darken(
        0.1,
        props.light
          ? props.theme.white
          : COLOURS[props.platform] || props.theme.white
      )};
    transition: background-color 250ms;
  }
`;

interface ContentProps {
  small?: boolean;
  allCaps?: boolean;
  official?: boolean;
}

export const Content = styled.div<ContentProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 ${props => props.theme.spacer}px;
  flex-grow: 1;
  font-size: 15px;
  line-height: 16px;
  ${props => props.small && 'font-size: 12px;'}

  ${props =>
    props.allCaps &&
    `font-weight: 500;
    letter-spacing: 1.25px;
    text-transform: uppercase;`}

  ${props =>
    props.official &&
    `margin: 0;
    margin-left: 24px;`}
`;

interface TextProps {
  hidden?: boolean;
}

export const Text = styled.span<TextProps>`
  ${props => props.hidden && 'opacity: 0;'}
`;

export const LoaderWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
