import React from 'react';
import { useRouter } from 'next/router';

import useUser from 'lib/hooks/useUser';
import Page from 'components/Page';
import Cladogram from 'components/Cladogram';

const Tree = () => {
  const { isLoggedIn, isLoadingUser } = useUser({ redirectTo: '/' });

  const router = useRouter();
  const nodeId = (router.query.nodeId as string) || 'ott93302';

  if (isLoadingUser || !isLoggedIn) return null;

  return (
    <Page>
      <Cladogram key={nodeId} nodeId={nodeId} />
    </Page>
  );
};

export default Tree;
