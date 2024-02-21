import React from 'react';
import styled from 'styled-components';

import { getLandingPage } from 'lib/api/strapi';
import Page from 'components/layout/Page';
import Hero, { HeroProps } from 'components/landingPage/Hero';
import Phylogeny, { PhylogenyProps } from 'components/landingPage/Phylogeny';
import About, { AboutProps } from 'components/landingPage/About';
import Contact, { ContactProps } from 'components/landingPage/Contact';
import Footer, { FooterProps } from 'components/landingPage/Footer';
import featureTreeInfo from '../../public/images/feature_tree_info.png'
import featureWiki from '../../public/images/feature_wiki.png'
import ReactMarkdown from 'react-markdown';
import { Markdown } from 'components/Markdown';
import { indexContent } from 'static';

const Sections = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

interface Props {
  content: {
    hero: HeroProps;
    phylogeny: PhylogenyProps;
    about: AboutProps;
    contact: ContactProps;
    footer: FooterProps;
  };
}

const Home = ({content}: Props) => (
  <Page isDark >
    <Sections>
      <Hero {...content.hero} />
      <Phylogeny {...content.phylogeny} />
      <About {...content.about} />
      <Contact {...content.contact} />
      <Footer {...content.footer} />
    </Sections>
  </Page>
);

export default Home;

export async function getStaticProps() {

  return { props: { ...indexContent } };
}
