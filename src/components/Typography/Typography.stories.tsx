import React from 'react';
import styled from 'styled-components';

import * as Typography from './index';

const StoryRow = styled.div`
  margin-bottom: ${props => props.theme.spacer}px;
`;

export default {
  title: 'Typography',
};

export const All = () => (
  <>
    {Object.entries(Typography).map(([key, Component]) => (
      <StoryRow>
        <Component>{key}</Component>
      </StoryRow>
    ))}
  </>
);
All.parameters = {
  controls: { hideNoControlsWarning: true },
};
