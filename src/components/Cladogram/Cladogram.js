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
  const { loading, error, data } = useQuery(GET_TREE);
  console.log(data);
  return (
    <Wrapper>
      {loading && <HeadingLarge>Loading...</HeadingLarge>}
      {error && <HeadingLarge>Error :(</HeadingLarge>}
      {data && data.tree && <Tree data={data.tree.root} />}
    </Wrapper>
  );
};

export default Clades;
