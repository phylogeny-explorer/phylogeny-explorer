import React from 'react';
import { useParams } from 'react-router-dom';

import Page from '../../components/Page';
import HeaderBar from '../../components/HeaderBar';
import Cladogram from '../../components/Cladogram';

const Home = () => {
  const { nodeId } = useParams<{ nodeId: string }>();

  return (
    <Page>
      <HeaderBar />
      <Cladogram key={nodeId} nodeId={nodeId} />
    </Page>
  );
};

export default Home;
