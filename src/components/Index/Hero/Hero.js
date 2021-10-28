import React from 'react';

import { Containr, Section, SectionText, SectionTitle } from '../../../styles/GlobalComponents';
import Button from '../../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
// import { HeadingXLarge, HeadingLabel } from 'components/Typography';

import { useRouter } from 'next/router'

const Hero = () => {
  const router = useRouter()
  return (
    <Containr>
      <Section row nopadding>
        <LeftSection>

          <SectionTitle main center>


            Welcome to the <br />
            Phylogeny Explorer Project!

          </SectionTitle>

          <SectionText>

            A navigable, online encyclopedia, of the entire evolutionary tree of life

          </SectionText>
          <Button onClick={() => router.push("/#mainselection")}>Get started!</Button>
        </LeftSection>

      </Section>
    </Containr>
  )
};

export default Hero;