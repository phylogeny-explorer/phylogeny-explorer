import React from 'react';
import { useRouter } from 'next/router';

import { Wrapper, Title, Subtitle, LargeButton } from './Hero.styled';

const Hero = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <Title>Phylogeny Explorer Project Contributors</Title>
      <Subtitle>
        Our dedicated and passionate team of individuals are what make the
        project run.
      </Subtitle>

      <LargeButton
        onClick={() => router.push('#team')}
        text="Meet the team!"
      ></LargeButton>
    </Wrapper>
  );
};

export default Hero;
