import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

import { HeadingLarge } from '../../components/Typography';
import Tree from '../../components/Tree';

import GET_TREE from './graphql/getTree';

const Wrapper = styled.div`
  height: calc(100% - ${props => props.theme.topbarHeight}px);
  padding: ${props => props.theme.largeSpacer}px;
`;

const Clades = () => {
  const { loading, error, data, refetch } = useQuery(GET_TREE, {
    variables: { id: 'ott93302' }
  });

  const handleLoadMore = id => refetch({ variables: { id } });
  return (
    <Wrapper>
      {loading && <HeadingLarge>Loading...</HeadingLarge>}
      {error && <HeadingLarge>Error :(</HeadingLarge>}
      {data && <Tree data={data.tree} handleLoadMore={handleLoadMore} />}
    </Wrapper>
  );
};

export default Clades;
