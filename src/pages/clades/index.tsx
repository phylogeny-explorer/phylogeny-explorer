import React from 'react';
import styled from 'styled-components';

import useUser from 'lib/hooks/useUser';
import Page from 'components/layout/Page';
import Search from 'components/Search';

const Content = styled.div`
  display: flex;
  flex: 1;
`;

const Clades = () => {
  const { isLoggedIn, isLoadingUser } = useUser({ redirectTo: '/' });

  if (isLoadingUser || !isLoggedIn) return null;

  return (
    <Page>
      <Content>
        <Search />
      </Content>
    </Page>
  );
};

export default Clades;
