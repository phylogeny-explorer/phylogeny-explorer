import React from 'react';

import useUser from 'lib/hooks/useUser';
import Page from 'components/Page';
import NavBar from 'components/NavBar';
import PageHeader from 'components/PageHeader';

import Hero from 'components/Index/Hero/Hero';

const Home = () => {
  const { isLoggedIn } = useUser();
  return (
    <Page>
      {isLoggedIn ? <NavBar /> : <PageHeader />}
      <Hero />
    </Page>
  );
};

export default Home;
