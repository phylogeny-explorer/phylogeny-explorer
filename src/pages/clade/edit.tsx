import React from 'react';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { capitalize } from 'lodash';

import useUser from 'lib/hooks/useUser';
import Page from 'components/Page';
import GET_CLADE from 'components/SideBar/graphql/get-clade';
import Loader from 'components/Loader';
import Input from 'components/Input';
import { Heading, HeadingLarge } from 'components/Typography';

const Content = styled.div`
  display: grid;
  align-content: start;
  flex: 1;
  padding: ${props => props.theme.largeSpacer}px;
`;

const CladeEdit = () => {
  const { isLoggedIn, isLoadingUser } = useUser({ redirectTo: '/' });

  const router = useRouter();
  const cladeId = (router.query.cladeId as string) || '93302';
  console.log(cladeId);

  const { data, loading } = useQuery(GET_CLADE, {
    variables: { id: cladeId },
    skip: !cladeId,
  });

  console.log(data);

  if (isLoadingUser || !isLoggedIn) return null;

  return (
    <Page>
      <Content>
        {loading && <Loader message="Loading" />}

        {data && (
          <>
            <HeadingLarge>{data.clade2.name}</HeadingLarge>
            <Heading>Rank: {capitalize(data.clade2.rank)}</Heading>
            <Input label="name" />
          </>
        )}
      </Content>
    </Page>
  );
};

export default CladeEdit;
