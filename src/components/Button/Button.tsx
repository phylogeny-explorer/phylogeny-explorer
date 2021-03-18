import React, { ReactNode } from 'react';
import { Wrapper, Text } from './Button.styled';

interface Props {
  children: ReactNode;
  small?: boolean;
  dark?: boolean;
  light?: boolean;
  disabled?: boolean;
}

const Button = ({
  children,
  small,
  dark,
  light,
  disabled,
  ...props
}: Props) => {
  return (
    <Wrapper
      small={small}
      dark={dark}
      light={light}
      disabled={disabled}
      {...props}
    >
      <Text small={small} light={light} disabled={disabled}>
        {children}
      </Text>
    </Wrapper>
  );
};

export default Button;
