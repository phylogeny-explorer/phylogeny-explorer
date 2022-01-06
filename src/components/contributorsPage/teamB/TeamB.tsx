import React from 'react';
import Image from 'next/image';

import { HeadingXLarge, LargeText, SmallText } from 'components/Typography';
import Section from '../Section';
import { Images, Info } from './TeamB.styled';

const TeamB = () => (
  <Section background="dsecondary">
    <Info id="teamb"></Info>
    <HeadingXLarge>The Developers, Artists & Primary Contributors/Sponsors?</HeadingXLarge>
    <LargeText>
      We have a global team collaborating on the project, each person fulfilling one or multiple roles...
    </LargeText>
    <SmallText>
      Bio
    </SmallText>
    <SmallText>
      Bio
    </SmallText>
    <SmallText>
      Bio
    </SmallText>
    <SmallText>
      Bio
    </SmallText>
    <SmallText>
      Bio
    </SmallText>
    {/* <Images>
      <Image
        src="/images/feature_tree_info.png"
        alt=""
        width={1440}
        height={914}
      />
      <Image src="/images/feature_wiki.png" alt="" width={1440} height={914} />
    </Images> */}
  </Section>
);

export default TeamB;
