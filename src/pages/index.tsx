import React from 'react';
import { useRouter } from 'next/router';

import Page from 'components/Page';
import NavBar from 'components/NavBar';
import Cladogram from 'components/Cladogram';

const Home = () => {
  const router = useRouter();
  const nodeId = router.query.nodeId as string;

  return (
    <Page>
      <NavBar />
      <Cladogram key={nodeId} nodeId={nodeId} />
    </Page>
  );
};

export default Home;
