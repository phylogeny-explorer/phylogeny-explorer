import React from 'react';
import { useRouter } from 'next/router';

import { getStrapiMedia } from 'lib/api/strapi';
import { MediaItem } from 'lib/types';
import useUser from 'lib/hooks/useUser';
import { Wrapper, Title, Subtitle, LargeButton } from './Hero.styled';

export interface Props {
  title: string;
  subtitle: string;
  cta: string;
  background: MediaItem;
}

const Hero = ({ title, subtitle, cta, background }: Props) => {
  const router = useRouter();
  const { isLoggedIn } = useUser();
  return (
    <Wrapper backgroundUrl={getStrapiMedia(background.data)}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <LargeButton
        onClick={() => router.push(isLoggedIn ? 'tree' : '/signup')}
        text={cta}
      ></LargeButton>
    </Wrapper>
  );
};

export default Hero;
