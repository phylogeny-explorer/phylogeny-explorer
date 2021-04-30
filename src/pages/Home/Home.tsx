import React from 'react';
import { useParams } from 'react-router-dom';

import Page from 'components/Page';
import NavBar from 'components/NavBar';
import Cladogram from 'components/Cladogram';

const Home = () => {
  const { nodeId } = useParams<{ nodeId: string }>();

  return (
    <Page>
      <NavBar />
      <Cladogram key={nodeId} nodeId={nodeId} />
    </Page>
  );
};

export default Home;
