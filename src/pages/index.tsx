import React from 'react';
import styled from 'styled-components';

import Page from 'components/Page';
import Hero from 'components/landingPage/Hero';
import Phylogeny from 'components/landingPage/Phylogeny';
import About from 'components/landingPage/About';
import Contact from 'components/landingPage/Contact';
import Footer from 'components/landingPage/Footer';

const Sections = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const Home = () => (
  <Page isDark>
    <Sections>
      <Hero />
      <Phylogeny />
      <About />
      <Contact />
      <Footer />
    </Sections>
  </Page>
);

export default Home;
