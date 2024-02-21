import React from 'react';
import { MediaItem } from 'lib/types';

import { Wrapper, Title, Subtitle } from './Header.styled';

export interface Props {
  title: string;
  subtitle: string;
  background: string;
}

const Header = ({ title, subtitle, background }: Props) => (
  <Wrapper backgroundUrl={background}>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </Wrapper>
);

export default Header;
