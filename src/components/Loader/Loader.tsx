import React from 'react';
import Icon from 'components/Icon';
import { HeadingLabel } from 'components/Typography';

import { Wrapper } from './Loader.styled';

export interface LoaderProps {
  color?: 'dark' | 'light';
  size?: 'sm' | 'md';
  message?: string;
}

const Loader = ({ color = 'dark', size, message }: LoaderProps) => (
  <Wrapper color={color}>
    <Icon name="loading" spin size={size === 'sm' ? 0.75 : 1} />
    {message && <HeadingLabel>{message}</HeadingLabel>}
  </Wrapper>
);

export default Loader;
