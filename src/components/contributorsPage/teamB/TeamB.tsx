import React from 'react';

import { HeadingXLarge, LargeText, SmallText } from 'components/Typography';
import Section from '../Section';
import { Info } from './TeamB.styled';

const TeamB = () => (
  <Section background="dsecondary">
    <Info id="teamb"></Info>
    <HeadingXLarge>
      The Developers, Artists & Primary Contributors/Sponsors?
    </HeadingXLarge>
    <LargeText>
      We have a global team collaborating on the project, each person fulfilling
      one or multiple roles...
    </LargeText>
    <SmallText>Bio</SmallText>
    <SmallText>Bio</SmallText>
    <SmallText>Bio</SmallText>
    <SmallText>Bio</SmallText>
    <SmallText>Bio</SmallText>
  </Section>
);

export default TeamB;
