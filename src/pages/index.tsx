import React from 'react';
import styled from 'styled-components';
import Page from 'components/layout/Page';
import Hero from 'components/landingPage/Hero';
import Phylogeny from 'components/landingPage/Phylogeny';
import About from 'components/landingPage/About';
import Contact from 'components/landingPage/Contact';
import Footer from 'components/landingPage/Footer';
import { content } from 'static';

const Sections = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const Home = () => (
  <Page isDark>
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
