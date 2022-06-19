import React from 'react';
import styled from 'styled-components';

import Tree from './Tree';

const StoryRow = styled.div`
  height: 400px;
`;

export default {
  title: 'Tree (rdt)',
  Component: Tree,
  args: {
    data: {
      name: 'Aves',
      attributes: {
        id: '1',
        hasChildren: true,
      },
      children: [
        {
          name: 'Neognathae',
          attributes: { id: '2', hasChildren: true },
          children: [{ id: '4', name: 'Galloanserae' }],
        },
        { name: 'Palaeognathae', attributes: { id: '3' } },
        { name: 'Palaeognathae', attributes: { id: '4' } },
      ],
    },
  },
};

export const Simple = args => (
  <StoryRow>
    <Tree {...args} />
  </StoryRow>
);
