import React from 'react';

import { HeadingXLarge, LargeText, SmallText } from 'components/Typography';
import Section from '../Section';
import { Info, Image } from './TeamA.styled';

const TeamA = () => (
  <Section background="dprimary" isRow>
    <Info id="team">
      <HeadingXLarge>Team Principals</HeadingXLarge>
      <LargeText>
        Name
      </LargeText>
      <SmallText>
        Brief intro of person and image?
      </SmallText>
      <LargeText>
        Name
      </LargeText>
      <SmallText>
        Brief intro of person and image?
      </SmallText>
      <LargeText>
        Name
      </LargeText>
      <SmallText>
        Brief intro of person and image?
      </SmallText>
      <LargeText>
        Name
      </LargeText>
      <SmallText>
        Brief intro of person and image?
      </SmallText>
    </Info>
    {/* <Image
      src="https://upload.wikimedia.org/wikipedia/commons/1/19/Phylogenetic_Tree_of_Life.png"
      alt=""
      width={1024}
      height={512}
    /> */}
  </Section>
);

export default TeamA;
