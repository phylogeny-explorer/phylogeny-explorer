import React from 'react';
import { useRouter } from 'next/router';

import useUser from 'lib/hooks/useUser';
import { Wrapper, Title, Subtitle, LargeButton } from './Hero.styled';

const Hero = () => {
  const router = useRouter();
  const { isLoggedIn } = useUser();
  return (
    <Wrapper>
      <Title>Phylogeny Explorer</Title>
      <Title>Explore The Beauty of Evolution</Title>
      <Subtitle>
        A navigable, online encyclopedia, of the entire evolutionary tree of
        life
      </Subtitle>

      <LargeButton
        onClick={() => router.push(isLoggedIn ? 'tree' : '/signup')}
        text="Get started!"
      ></LargeButton>
    </Wrapper>
  );
};

export default Hero;
