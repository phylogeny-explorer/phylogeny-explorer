import React, { ReactNode } from 'react';

import { Wrapper } from './ButtonSet.styled';

export interface ButtonSetProps {
  children: ReactNode;
  isHorizontal?: boolean;
}

const ButtonSet = ({ children, ...props }: ButtonSetProps) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export default ButtonSet;
