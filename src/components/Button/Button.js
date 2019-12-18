import React from 'react';
import { Wrapper, Text } from './Button.styled';

const Button = ({
  children,
  small,
  squishy,
  dark,
  light,
  disabled,
  accessibilityRole = 'button',
  ...props
}) => {
  return (
    <Wrapper
      accessibilityRole={accessibilityRole}
      small={small}
      dark={dark}
      light={light}
      disabled={disabled}
      squishy={squishy}
      {...props}
    >
      <Text small={small} light={light} disabled={disabled}>
        {children}
      </Text>
    </Wrapper>
  );
};

export default Button;
