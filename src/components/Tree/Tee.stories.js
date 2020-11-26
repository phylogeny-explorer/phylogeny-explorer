import React from 'react';
import styled from 'styled-components';


import Tree from './Tree';

const StoryRow = styled.div`
  height: 400px;
`;

export default {
  title: 'Tree',
  Component: Tree,
  args: {data: {id: '1', name: 'Name', hasChildren: true, children: [{id: '2', name: 'Name'}, {id: '3', name: 'Name'}]}}
};

export const Simple = args => (
  <StoryRow>
    <Tree {...args} />
  </StoryRow>
);
