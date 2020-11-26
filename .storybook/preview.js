
import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import theme from '../src/theme';

const CSSReset = createGlobalStyle`
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

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    {story()}
  </ThemeProvider>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#fff',
      },
      {
        name: 'dark',
        value: '#000',
      },
    ],
  },
}