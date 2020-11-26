import React from 'react';
import styled from 'styled-components';

import Tree from './Tree';

const StoryRow = styled.div`
  height: 400px;
`;

export default {
  title: 'Tree',
  Component: Tree,
  args: {
    data: {
      id: '1',
      name: 'Isaac',
      hasChildren: true,
      children: [
        {
          id: '2',
          name: 'Jacob',
          hasChildren: true,
          children: [{ id: '4', name: 'Rueben' }],
        },
        { id: '3', name: 'Esau' },
      ],
    },
  },
};

export const Simple = args => (
  <StoryRow>
    <Tree {...args} />
  </StoryRow>
);
