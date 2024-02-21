import React from 'react';
import { useRouter } from 'next/router';

import { MediaItem } from 'lib/types';
import useUser from 'lib/hooks/useUser';
import { Wrapper, Title, Subtitle, LargeButton } from './Hero.styled';

export interface Props {
  title: string;
  subtitle: string;
  cta: string;
  background: string;
}

const Hero = ({ title, subtitle, cta, background }: Props) => {
  const router = useRouter();
  const { isLoggedIn } = useUser();
  return (
    <Wrapper backgroundUrl={background}>
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
