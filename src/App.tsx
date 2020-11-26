import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import reset from 'styled-reset';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import theme from './theme';

import Home from './pages/Home';
import ErrorPage from './pages/Error';

const env = process.env.REACT_APP_API_BASE || 'dev';

export const APOLLO_LINK_CONFIG = {
  local: {
    uri: 'http://localhost:4000/',
  },
  dev: {
    uri: 'https://api.phylogenyexplorerproject.co.uk/',
  },
  prod: {
    uri: 'https://api.phylogenyexplorerproject.co.uk/',
  },
}[env];

const client = new ApolloClient(APOLLO_LINK_CONFIG);

const GlobalStyle = createGlobalStyle`
  ${reset}
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
    <ApolloProvider client={client}>
      <h1>{uuidv4()}</h1>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path="/:nodeId?" component={Home} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
