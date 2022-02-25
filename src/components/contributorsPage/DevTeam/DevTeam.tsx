import React from 'react';

import { HeadingXLarge, LargeText } from 'components/Typography';
import Section from 'components/landingPage/Section';
import Profile, { ProfileProps } from '../Profile';
import { Info, Profiles } from './DevTeam.styled';

export interface Props {
  title: string;
  text: string;
  profiles: ProfileProps[];
}

const DevTeam = ({ title, text, profiles }: Props) => (
  <Section background="dsecondary" isRow isFullWidth>
    <Info>
      <HeadingXLarge>{title}</HeadingXLarge>
      <LargeText>{text}</LargeText>
    </Info>
    <Profiles>
      {profiles.map(profile => (
        <Profile key={profile.id} {...profile} />
      ))}
    </Profiles>
  </Section>
);

export default DevTeam;
