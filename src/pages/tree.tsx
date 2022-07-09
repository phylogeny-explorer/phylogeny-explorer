import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import useUser from 'lib/hooks/useUser';
import Page from 'components/layout/Page';
import SideBar from 'components/layout/SideBar';
import CladeInfo from 'components/CladeInfo';
import Cladogram from 'components/Cladogram';
import CladogramInfo from 'components/CladogramInfo';

const Content = styled.div`
  position: relative;
  display: grid;
`;

const Tree = () => {
  const [selectedCladeId, setSelectedCladeId] = useState('');
  const { isLoggedIn, isLoadingUser } = useUser({ redirectTo: '/' });

  const router = useRouter();
  const nodeId = (router.query.nodeId as string) || 'ott93302';

  const hasSeenKey =
    typeof window !== 'undefined' ? localStorage.getItem('hasSeenKey') : null;
  console.log(hasSeenKey);
  const [isKeyOpen, setIsKeyOpen] = useState(hasSeenKey !== 'true');

  const onClickNode = (id: string) => {
    setIsKeyOpen(false);
    setSelectedCladeId(id);
  };

  useEffect(() => {
    setSelectedCladeId('');
  }, [nodeId]);

  const toggleIsOpen = () => {
    if (!hasSeenKey) {
      localStorage.setItem('hasSeenKey', 'true');
    }
    setIsKeyOpen(!selectedCladeId && !isKeyOpen);
    setSelectedCladeId('');
  };

  if (isLoadingUser || !isLoggedIn) return null;

  return (
    <Page>
      <Content>
        <Cladogram
          key={nodeId}
          nodeId={nodeId}
          onClickNode={onClickNode}
          selectedNodeId={selectedCladeId}
        />

        <SideBar
          title={selectedCladeId ? 'Clade Info' : 'Cladogram Info'}
          isOpen={!!selectedCladeId || isKeyOpen}
          toggleIsOpen={toggleIsOpen}
        >
          {isKeyOpen && <CladogramInfo />}
          {selectedCladeId && <CladeInfo cladeId={selectedCladeId} />}
        </SideBar>
      </Content>
    </Page>
  );
};

export default Tree;
