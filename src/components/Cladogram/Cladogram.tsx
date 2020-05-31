import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

import { HeadingLarge } from '../Typography';
import Tree from '../Tree';

import GET_TREE from './graphql/getTree';

const Wrapper = styled.div`
  height: calc(100% - ${(props) => props.theme.topbarHeight}px);
  padding: ${(props) => props.theme.largeSpacer}px;
  position: relative;
`;

const Heading = styled(HeadingLarge)`
  position: absolute;
`;

const Clades = ({ nodeId = 'ott93302' }) => {
  const { loading, error, data, refetch } = useQuery(GET_TREE, {
    variables: { id: nodeId },
  });

  const handleLoadMore = (id: string) => refetch({ id });
  return (
    <Wrapper>
      {loading && <Heading>Loading...</Heading>}
      {error && <Heading>Error :(</Heading>}
      {data && (
        <Tree
          data={data.tree}
          loading={loading}
          handleLoadMore={handleLoadMore}
        />
      )}
    </Wrapper>
  );
};

export default Clades;
