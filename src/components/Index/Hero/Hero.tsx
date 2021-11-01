import React from 'react';
import { useRouter } from 'next/router';

import { InfographicLarge } from 'components/Typography';
import { Wrapper, Title, LargeButton } from './Hero.styled';

const Hero = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <Title>Explore The Beauty of Evolution</Title>
      <InfographicLarge>
        A navigable, online encyclopedia, of the entire evolutionary tree of
        life
      </InfographicLarge>

      <LargeButton
        onClick={() => router.push('/#mainselection')}
        text="Get started!"
      ></LargeButton>
    </Wrapper>
  );
};

export default Hero;
