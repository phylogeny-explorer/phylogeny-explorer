import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import reset from 'styled-reset';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import theme from './theme';

import Home from './pages/Home';
import DevSandbox from './pages/DevSandbox';
import ErrorPage from './pages/Error';

const env = process.env.REACT_APP_API_BASE || 'dev';

export const APOLLO_LINK = {
  local: 'http://localhost:4000/',
  dev: 'https://api.phylogenyexplorerproject.co.uk/',
  prod: 'https://api.phylogenyexplorerproject.co.uk/',
}[env];

const client = new ApolloClient({uri: APOLLO_LINK, cache: new InMemoryCache()});

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
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path="/dev" component={DevSandbox} />
            <Route path="/:nodeId?" component={Home} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
