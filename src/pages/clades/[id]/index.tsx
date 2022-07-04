import React from 'react';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import useUser from 'lib/hooks/useUser';
import Page from 'components/layout/Page';
import GET_CLADE from 'components/SideBar/graphql/get-clade';
import Loader from 'components/Loader';

const Content = styled.div`
  display: flex;
  flex: 1;
`;

const Clade = () => {
  const { isLoggedIn, isLoadingUser } = useUser({ redirectTo: '/' });

  const router = useRouter();
  const cladeId = (router.query.id as string) || '93302';

  const { data, loading } = useQuery(GET_CLADE, {
    variables: { id: cladeId },
    skip: !cladeId,
  });

  if (isLoadingUser || !isLoggedIn) return null;

  return (
    <Page>
      <Content>
        {loading && <Loader message="Loading" />}
        {data && data.clade2.name}
      </Content>
    </Page>
  );
};

export default Clade;
