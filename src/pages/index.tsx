import React from 'react';
import styled from 'styled-components';

import { getLandingPage } from 'lib/api/strapi';
import Page from 'components/layout/Page';
import Hero, { HeroProps } from 'components/landingPage/Hero';
import Phylogeny, { PhylogenyProps } from 'components/landingPage/Phylogeny';
import About, { AboutProps } from 'components/landingPage/About';
import Donate, { DonateProps } from 'components/landingPage/Donate';
import Contact, { ContactProps } from 'components/landingPage/Contact';
import Footer, { FooterProps } from 'components/landingPage/Footer';
import DotNav from 'components/DotNav';

const Sections = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
  }
`;

interface Props {
  content: {
    hero: HeroProps;
    phylogeny: PhylogenyProps;
    about: AboutProps;
    donate: DonateProps;
    contact: ContactProps;
    footer: FooterProps;
  };
}

const Home = ({ content }: Props) => (
  <Page isDark>
    <DotNav sections={['hero', 'phylogeny', 'about', 'donate', 'contact']} />
    <Sections>
      <Hero {...content.hero} />
      <Phylogeny {...content.phylogeny} />
      <About {...content.about} />
      <Donate {...content.donate} />
      <Contact {...content.contact} />
      <Footer {...content.footer} />
    </Sections>
  </Page>
);

export default Home;

export async function getStaticProps() {
  const content = await getLandingPage();

  return { props: { content } };
}
