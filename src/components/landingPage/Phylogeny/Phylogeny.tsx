import React from 'react';

import { HeadingXLarge, Heading } from 'components/Typography';
import { Wrapper } from './Phylogeny.styled';

const Phylogeny = () => {
  return (
    <Wrapper>
      <HeadingXLarge>What is Phylogeny?</HeadingXLarge>
      <Heading>
        Phylogeny concerns the evolutionary history and development of
        organisms, how they diverge and evolve from each other, and the
        relationships between them.
      </Heading>
    </Wrapper>
  );
};

export default Phylogeny;
