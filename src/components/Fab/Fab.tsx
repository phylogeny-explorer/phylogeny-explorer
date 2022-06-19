import React from 'react';
import Icon from 'components/Icon';
import { HeadingLabel } from 'components/Typography';

import { Wrapper, Main } from './Fab.styled';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text?: string;
  disabled?: boolean;
  icon: string;
}

const Button = ({ text, disabled, icon, ...props }: ButtonProps) => {
  return (
    <Wrapper>
      <Main disabled={disabled} {...props}>
        <Icon name={icon} />
      </Main>
      {text && <HeadingLabel>{text}</HeadingLabel>}
    </Wrapper>
  );
};

export default Button;
