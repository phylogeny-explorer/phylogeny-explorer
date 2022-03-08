import React from 'react';
import Icon from 'components/Icon';

import { Wrapper, Content, Text, Loader } from './Button.styled';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text?: string;
  small?: boolean;
  loading?: boolean;
  disabled?: boolean;
  squishy?: boolean;
  dark?: boolean;
  light?: boolean;
  secondary?: boolean;
  icon?: string;
  iconFirst?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({
  text,
  small,
  loading,
  dark,
  light,
  disabled,
  icon,
  iconFirst,
  type = 'submit',
  ...props
}: ButtonProps) => {
  return (
    <Wrapper
      small={small}
      dark={dark}
      light={light}
      type={type}
      disabled={disabled || loading}
      visuallyDisabled={disabled}
      iconOnly={!text}
      {...props}
    >
      {text && (
        <Content
          iconLast={!!icon && !iconFirst}
          iconFirst={!!icon && iconFirst}
          small={small}
        >
          {loading && (
            <Loader>
              <Icon name="loading" spin size={small ? 0.75 : 1} />
            </Loader>
          )}

          <Text isLoading={loading} small={small}>
            {text}
          </Text>
        </Content>
      )}
      {icon ? <Icon name={icon} size={small ? 0.75 : 0.9} /> : null}
    </Wrapper>
  );
};

export default Button;
