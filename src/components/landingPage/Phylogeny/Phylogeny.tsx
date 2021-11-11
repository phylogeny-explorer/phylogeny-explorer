import React from 'react';
import Image from 'next/image';

import { HeadingXLarge, Heading } from 'components/Typography';
import { Wrapper, Info } from './Phylogeny.styled';

const Phylogeny = () => {
  return (
    <Wrapper>
      <Info>
        <HeadingXLarge>What is Phylogeny?</HeadingXLarge>
        <Heading>
          Phylogeny concerns the evolutionary history and development of
          organisms, how they diverge and evolve from each other, and the
          relationships between them.
        </Heading>
      </Info>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/1/19/Phylogenetic_Tree_of_Life.png"
        alt=""
        width={1024}
        height={585}
      />
    </Wrapper>
  );
};

export default Phylogeny;
