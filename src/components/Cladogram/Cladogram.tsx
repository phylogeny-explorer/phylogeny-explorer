import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';

import { Node } from 'lib/types';
// import mergeTree from 'lib/helpers/mergeTree';
import { HeadingLarge } from 'components/Typography';
import Tree from 'components/TreeV2';
import Loader from 'components/Loader';

import GET_TREE from './graphql/getTree';

const Wrapper = styled.div`
  padding: ${props => props.theme.largeSpacer}px;
  position: relative;
  display: grid;
  justify-items: center;
  align-items: center;
`;

const Heading = styled(HeadingLarge)`
  position: absolute;
`;

interface Props {
  nodeId: string;
  selectedNodeId?: string;
  onClickNode: (id: string) => void;
}

const Cladogram = ({
  nodeId = 'ott93302',
  onClickNode,
  selectedNodeId,
}: Props) => {
  const { loading, error, data } = useQuery<{ tree: Node }>(GET_TREE, {
    fetchPolicy: 'no-cache',
    variables: { id: nodeId },
  });

  // const appendNode = (id: string) => refetch({ id });

  // const appendNode = (id: string) => {
  //   fetchMore({
  //     variables: { id },
  //     updateQuery: (previousResult, { fetchMoreResult }) => {
  //       if (!fetchMoreResult) return previousResult;
  //       console.log(previousResult, fetchMoreResult);
  //       const res = mergeTree(previousResult.tree, [
  //         {
  //           lineage: fetchMoreResult.tree.attributes?.lineage.reverse() || [],
  //           target: fetchMoreResult.tree,
  //         },
  //       ]);
  //       console.log(res);
  //       return { tree: res };
  //     },
  //   });
  // };

  console.log(data);

  return (
    <Wrapper>
      {loading && <Loader message="Loading Cladogram" />}
      {error && <Heading>Error :(</Heading>}
      {data && (
        <Tree
          data={data.tree}
          // appendNode={appendNode}
          onClickNode={onClickNode}
          // loading={loading}
          // handleLoadMore={handleLoadMore}
          selectedNodeId={selectedNodeId}
        />
      )}
    </Wrapper>
  );
};

export default Cladogram;
