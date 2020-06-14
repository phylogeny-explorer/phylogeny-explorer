import React from 'react';
import { withRouter } from 'react-router-dom';

import Page from '../../components/Page';
import HeaderBar from '../../components/HeaderBar';
import Cladogram from '../../components/Cladogram';

const Clades = ({ match }) => {
  const { nodeId } = match.params;

  return (
    <Page>
      <HeaderBar />
      <Cladogram key={nodeId} nodeId={nodeId} />
    </Page>
  );
};
export default withRouter(Clades);
