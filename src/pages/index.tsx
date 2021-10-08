import React from 'react';

import useUser from 'lib/hooks/useUser';
import Page from 'components/Page';
import NavBar from 'components/NavBar';
import PageHeader from 'components/PageHeader';
import { HeadingXLarge } from 'components/Typography';

const Home = () => {
  const { isLoggedIn } = useUser();
  return (
    <Page>
      {isLoggedIn ? <NavBar /> : <PageHeader />}
      <HeadingXLarge>Home</HeadingXLarge>
    </Page>
  );
};

export default Home;
