import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

import { HeadingLarge } from '../Typography';
import Tree from '../Tree';

import GET_TREE from './graphql/getTree';

const Wrapper = styled.div`
  height: calc(100% - ${(props) => props.theme.topbarHeight}px);
  padding: ${(props) => props.theme.largeSpacer}px;
`;

const Clades = () => {
  const { loading, error, data, refetch } = useQuery(GET_TREE, {
    variables: { id: 'ott93302' },
  });

  const handleLoadMore = (id: string) => refetch({ id });
  return (
    <Wrapper>
      {loading && <HeadingLarge>Loading...</HeadingLarge>}
      {error && <HeadingLarge>Error :(</HeadingLarge>}
      {data && <Tree data={data.tree} handleLoadMore={handleLoadMore} />}
    </Wrapper>
  );
};

export default Clades;
