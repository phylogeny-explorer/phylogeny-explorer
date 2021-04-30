import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import reset from 'styled-reset';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import theme from 'theme';
import LoginProvider, { LoginContext } from 'context/LoginContext';
import Home from 'pages/Home';
import Relationships from 'pages/Relationships';
import DevSandbox from 'pages/DevSandbox';
import ErrorPage from 'pages/Error';
import Login from 'pages/Login';
import Signup from 'pages/Signup';
import Toast from 'components/Toast';

const env = process.env.REACT_APP_API_BASE || 'dev';

export const APOLLO_LINK = {
  local: 'http://localhost:4000/',
  dev: 'https://api.phylogenyexplorerproject.co.uk/',
  prod: 'https://api.phylogenyexplorerproject.co.uk/',
}[env];

const client = new ApolloClient({
  uri: APOLLO_LINK,
  cache: new InMemoryCache(),
});

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
  a {
    color: ${theme.primary};
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
  }
`;

const Routes = () => {
  const { isLoggedIn } = useContext(LoginContext);
  return isLoggedIn ? (
    <Switch>
      <Route exact path="/dev" component={DevSandbox} />
      <Route exact path="/relationships/:nodeId?" component={Relationships} />
      <Route exact path="/tree/:nodeId?" component={Home} />
      <Redirect from="/" to="/tree" />
      <Route path="*" component={ErrorPage} />
    </Switch>
  ) : (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Redirect from="/" to="/login" />
    </Switch>
  );
};

const App = () => {
  return (
    <LoginProvider>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Toast />
          <Router>
            <Routes />
          </Router>
        </ThemeProvider>
      </ApolloProvider>
    </LoginProvider>
  );
};

export default App;
