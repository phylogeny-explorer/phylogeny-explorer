import React from 'react';
import styled from 'styled-components';
import Page from 'components/layout/Page';
import Header from 'components/contributorsPage/Header';
import Management from 'components/contributorsPage/Management';
import DevTeam from 'components/contributorsPage/DevTeam';
import Footer from 'components/landingPage/Footer';
import { content } from 'static/contributors';

const Sections = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const Contributors = () => (
  <Page isDark>
    <Sections>
      <Header {...content.header} />
      <Management {...content.management} />
      <DevTeam {...content.devTeam} />
      <Footer {...content.footer} />
    </Sections>
  </Page>
);

export default Contributors;
