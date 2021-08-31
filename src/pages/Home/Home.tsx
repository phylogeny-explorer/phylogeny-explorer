import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Page from 'components/Page';
import NavBar from 'components/NavBar';
import SideBar from 'components/SideBar';
import Cladogram from 'components/Cladogram';

const Content = styled.div`
  display: flex;
  flex: 1;
`;

const Home = () => {
  const [selectedCladeId, setSelectedCladeId] = useState('');

  const { nodeId } = useParams<{ nodeId: string }>();

  const onClickNode = (id: string) => {
    setSelectedCladeId(id);
  };

  useEffect(() => {
    setSelectedCladeId('');
  }, [nodeId]);

  return (
    <Page>
      <NavBar />
      <Content>
        {selectedCladeId && (
          <SideBar
            cladeId={selectedCladeId}
            close={() => setSelectedCladeId('')}
          />
        )}
        <Cladogram key={nodeId} nodeId={nodeId} onClickNode={onClickNode} />
      </Content>
    </Page>
  );
};

export default Home;
