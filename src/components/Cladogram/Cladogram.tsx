import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';

import { HeadingLarge } from 'components/Typography';
import Tree from 'components/TreeV2';

import GET_TREE from './graphql/getTree';

const Wrapper = styled.div`
  padding: ${props => props.theme.largeSpacer}px;
  position: relative;
  flex: 1;
`;

const Heading = styled(HeadingLarge)`
  position: absolute;
`;

interface Props {
  nodeId: string;
  onClickNode: (id: string) => void;
}

const Clades = ({ nodeId = 'ott93302', onClickNode }: Props) => {
  const { loading, error, data } = useQuery(GET_TREE, {
    variables: { id: nodeId },
  });

  // const handleLoadMore = (id: string) => refetch({ id });

  return (
    <Wrapper>
      {loading && <Heading>Loading...</Heading>}
      {error && <Heading>Error :(</Heading>}
      {data && (
        <Tree
          data={data.tree}
          onClickNode={onClickNode}
          // loading={loading}
          // handleLoadMore={handleLoadMore}
        />
      )}
    </Wrapper>
  );
};

export default Clades;
