import React from 'react';
import styled from 'styled-components';

import { getContributorsPage } from 'lib/api/strapi';
import Page from 'components/layout/Page';
import Header, { HeaderProps } from 'components/contributorsPage/Header';
import Management, {
  ManagementProps,
} from 'components/contributorsPage/Management';
import DevTeam, { DevTeamProps } from 'components/contributorsPage/DevTeam';
import Footer, { FooterProps } from 'components/landingPage/Footer';

const Sections = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

interface Props {
  content: {
    header: HeaderProps;
    footer: FooterProps;
    management: ManagementProps;
    devTeam: DevTeamProps;
  };
}

const Contributors = ({ content }: Props) => (
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

export async function getStaticProps() {
  const content = await getContributorsPage();
  console.log(content);

  return { props: { content } };
}
