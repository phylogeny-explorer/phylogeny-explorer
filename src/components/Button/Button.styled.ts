import styled from 'styled-components';
import { darken, lighten } from 'polished';
import { ButtonText } from '../Typography';

interface WrapperProps {
  small?: boolean;
  squishy?: boolean;
  light?: boolean;
  dark?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  visuallyDisabled?: boolean;
  iconOnly?: boolean;
}

export const Wrapper = styled.button<WrapperProps>`
  height: ${props =>
    props.small ? props.theme.buttonHeightSmall : props.theme.buttonHeight}px;
  ${props => !props.squishy && `min-width: ${props.theme.buttonMinWidth}px;`}
  ${props =>
    props.small &&
    !props.squishy &&
    `min-width: ${props.theme.buttonMinWidthSmall}px;`}

  ${props =>
    props.iconOnly &&
    `min-width: ${
      props.small ? props.theme.buttonHeightSmall : props.theme.buttonHeight
    }px;`}
  border-radius: ${props => props.theme.borderRadius}px;
  padding: 0 ${props => props.theme.largeSpacer}px;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: unset;
  cursor: pointer;
  color: ${props =>
    props.light ? props.theme.foreground : props.theme.background};
  background: ${props => props.theme.primary};
  ${props => props.dark && `background: ${props.theme.foreground};`}
  ${props => props.light && `background: ${props.theme.background};`}
  ${props => props.secondary && `background: ${props.theme.secondary};`}
  ${props => props.small && `padding: 0 ${props.theme.spacer}px;`}
  ${props => props.iconOnly && 'padding: 0;'}
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
    background: ${props => darken(0.1, props.theme.primary)};
    ${props =>
      props.light && `background: ${darken(0.2, props.theme.background)}`};
    ${props =>
      props.dark && `background: ${lighten(0.2, props.theme.foreground)}`};
    ${props =>
      props.secondary && `background: ${darken(0.2, props.theme.secondary)}`};
    transition: background 300ms;
  }
`;

interface ContentProps {
  small?: boolean;
  iconLast?: boolean;
  iconFirst?: boolean;
}

export const Content = styled.div<ContentProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  ${props =>
    props.iconLast &&
    `margin-right: ${
      props.small ? props.theme.spacer : props.theme.largeSpacer
    }px;`}
  ${props =>
    props.iconFirst &&
    `order: 1;
    margin-left: ${
      props.small ? props.theme.spacer : props.theme.largeSpacer
    }px;`}
`;

interface TextProps {
  loading?: boolean;
  small?: boolean;
}

export const Text = styled(ButtonText)<TextProps>`
  ${props => props.loading && 'opacity: 0;'}
  ${props => props.small && 'font-size: 11px;'}
`;

export const Loader = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StoryRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: ${props => props.theme.spacer}px;
  & > *:not(:last-child) {
    margin-right: ${props => props.theme.largeSpacer}px;
  }
`;
