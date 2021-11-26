import React from 'react';
import Image from 'next/image';

import { HeadingXLarge, LargeText } from 'components/Typography';
import { Wrapper, Images } from './About.styled';

const About = () => {
  return (
    <Wrapper>
      <HeadingXLarge>What is the Phylogeny Explorer?</HeadingXLarge>
      <LargeText>
        The Phylogeny Explorer is a navigable, online encyclopedia of the entire
        evolutionary tree of life. Navigate the cladogram, from root to tips,
        and see ancestral lineages branching like a tree. Search for specific
        clades or species, and interact with the nodes at each branch to find
        out more information, including pictures, parent or child clades, and
        reference material.
      </LargeText>
      <Images>
        <Image
          src="/images/feature_tree_info.png"
          alt=""
          width={1440}
          height={914}
        />
        <Image
          src="/images/feature_wiki.png"
          alt=""
          width={1440}
          height={914}
        />
      </Images>
    </Wrapper>
  );
};

export default About;
