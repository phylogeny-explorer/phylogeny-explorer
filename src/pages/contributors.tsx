import React from 'react';
import styled from 'styled-components';

import useUser from 'lib/hooks/useUser';
import Page from 'components/Page';
import NavBar from 'components/NavBar';
import PageHeader from 'components/PageHeader';

import Hero from 'components/contributorsPage/Hero';
import TeamA from 'components/contributorsPage/teamA';
import TeamB from 'components/contributorsPage/teamB';
import Contact from 'components/contributorsPage/Contact';
import Footer from 'components/contributorsPage/Footer';

const Sections = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const Contributors = () => {
  const { isLoggedIn } = useUser();
  return (
    <Page isDark>
      {isLoggedIn ? <NavBar /> : <PageHeader />}
      <Sections>
        <Hero />
        <TeamA />
        <TeamB />
        <Contact />
        <Footer />
      </Sections>
    </Page>
  );
};

export default Contributors;
