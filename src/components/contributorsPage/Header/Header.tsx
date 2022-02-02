import React from 'react';
import { getStrapiMedia } from 'lib/api/strapi';
import { MediaItem } from 'lib/types';

import { Wrapper, Title, Subtitle } from './Header.styled';

export interface Props {
  title: string;
  subtitle: string;
  background: MediaItem;
}

const Header = ({ title, subtitle, background }: Props) => (
  <Wrapper backgroundUrl={getStrapiMedia(background.data)}>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </Wrapper>
);

export default Header;
