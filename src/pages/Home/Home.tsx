import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Page from 'components/Page';
import NavBar from 'components/NavBar';
import Cladogram from 'components/Cladogram';

const Content = styled.div`
  display: flex;
  flex: 1;
`;

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.largeSpacer}px;
  background: ${props => props.theme.offBlack};
  color: ${props => props.theme.white};
`;

const Home = () => {
  const [sideBarId, setSideId] = useState('');

  const { nodeId } = useParams<{ nodeId: string }>();

  const onClickNode = (id: string) => {
    setSideId(id);
  };

  return (
    <Page>
      <NavBar />
      <Content>
        {sideBarId && <SideBar>{`Id: ${sideBarId}`}</SideBar>}
        <Cladogram key={nodeId} nodeId={nodeId} onClickNode={onClickNode} />
      </Content>
    </Page>
  );
};

export default Home;
