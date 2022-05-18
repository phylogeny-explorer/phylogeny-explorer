import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';

import { Clade } from 'lib/types';
import mergeTree from 'lib/helpers/mergeTree';
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
  const { loading, error, data, fetchMore } = useQuery<{ tree: Clade }>(
    GET_TREE,
    {
      fetchPolicy: 'no-cache',
      variables: { id: nodeId },
    }
  );

  const appendNode = (id: string) => {
    fetchMore({
      variables: { id },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return previousResult;
        console.log(previousResult, fetchMoreResult);
        const res = mergeTree(previousResult.tree, [
          {
            lineage: fetchMoreResult.tree.attributes?.lineage.reverse() || [],
            target: fetchMoreResult.tree,
          },
        ]);
        console.log(res);
        return { tree: res };
      },
    });
  };

  console.log(data);

  return (
    <Wrapper>
      {loading && <Heading>Loading...</Heading>}
      {error && <Heading>Error :(</Heading>}
      {data && (
        <Tree
          data={data.tree}
          appendNode={appendNode}
          onClickNode={onClickNode}
          // loading={loading}
          // handleLoadMore={handleLoadMore}
        />
      )}
    </Wrapper>
  );
};

export default Clades;
