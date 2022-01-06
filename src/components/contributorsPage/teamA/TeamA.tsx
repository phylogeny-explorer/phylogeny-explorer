import React from 'react';

import { HeadingXLarge, LargeText, SmallText } from 'components/Typography';
import Section from '../Section';
import { Info } from './TeamA.styled';

const TeamA = () => (
  <Section background="dprimary" isRow id="team">
    <Info>
      <HeadingXLarge>Team Principals</HeadingXLarge>
      <LargeText>Name</LargeText>
      <SmallText>Brief intro of person and image?</SmallText>
      <LargeText>Name</LargeText>
      <SmallText>Brief intro of person and image?</SmallText>
      <LargeText>Name</LargeText>
      <SmallText>Brief intro of person and image?</SmallText>
      <LargeText>Name</LargeText>
      <SmallText>Brief intro of person and image?</SmallText>
    </Info>
  </Section>
);

export default TeamA;
