import React from 'react';
import Tree from './components/Tree/Tree';
import data from './components/Tree/biota.json';

import { Wrapper } from './App.styled';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const App = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Tree data={data} />
    </Wrapper>
  );
};

export default App;
