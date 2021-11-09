import React from 'react';

import { Section, SectionTitle } from '../../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 124643, text: 'Open Source Sponsourships' },
  { number: 71, text: 'Students' },
  { number: 36542, text: 'Github Followers' },
  { number: 756, text: 'Global Users' },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Sponsor the Phylogeny Explorer Project</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
