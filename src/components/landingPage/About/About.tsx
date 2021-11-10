import React from 'react';

import { HeadingXLarge, Heading } from 'components/Typography';
import { Wrapper } from './About.styled';

const About = () => {
  return (
    <Wrapper>
      <HeadingXLarge>What is the Phylogeny Explorer?</HeadingXLarge>
      <Heading>
        The Phylogeny Explorer is a navigable, online encyclopedia of the entire
        evolutionary tree of life. Navigate the cladogram, from root to tips,
        and see ancestral lineages branching like a tree. Search for specific
        clades or species, and interact with the nodes at each branch to find
        out more information, including pictures, parent or child clades, and
        reference material.
      </Heading>
    </Wrapper>
  );
};

export default About;
