import React from 'react';
import styled from 'styled-components';

import Page from 'components/Page';

import Hero from 'components/contributorsPage/Hero';
import TeamA from 'components/contributorsPage/teamA';
import TeamB from 'components/contributorsPage/teamB';
import Footer from 'components/contributorsPage/Footer';

const Sections = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const Contributors = () => (
  <Page isDark>
    <Sections>
      <Hero />
      <TeamA />
      <TeamB />
      <Footer />
    </Sections>
  </Page>
);

export default Contributors;
