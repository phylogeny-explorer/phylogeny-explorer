import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import useUser from 'lib/hooks/useUser';
import Page from 'components/Page';
import SideBar from 'components/SideBar';
import Cladogram from 'components/Cladogram';

const Content = styled.div`
  display: flex;
  flex: 1;
`;

const Tree = () => {
  const [selectedCladeId, setSelectedCladeId] = useState('');
  const { isLoggedIn, isLoadingUser } = useUser({ redirectTo: '/' });

  const router = useRouter();
  const nodeId = (router.query.nodeId as string) || 'ott93302';

  const onClickNode = (id: string) => {
    setSelectedCladeId(id);
  };

  useEffect(() => {
    setSelectedCladeId('');
  }, [nodeId]);

  if (isLoadingUser || !isLoggedIn) return null;

  return (
    <Page>
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

export default Tree;
