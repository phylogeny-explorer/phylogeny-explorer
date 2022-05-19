import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import reset from 'styled-reset';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import theme from 'theme';
import LoginProvider from 'context/LoginContext';
import Toast from 'components/Toast';
import { AUTH_USER_TOKEN_KEY } from 'consts';

const env = process.env.NEXT_PUBLIC_API_BASE || 'dev';

export const APOLLO_LINK = {
	local: 'http://localhost:4000/',
	dev: 'https://api.phylogenyexplorerproject.co.uk/',
	prod: 'https://api.phylogenyexplorerproject.co.uk/',
}[env];

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: setContext((_, { headers }) => {
		//TODO: would be better to read the token from useUser();
		const token = localStorage.getItem(AUTH_USER_TOKEN_KEY);
		return {
			headers: {
				...headers,
				authorization: token ? `Bearer ${token}` : '',
			}
		};
	})
		.concat(new HttpLink({ uri: APOLLO_LINK }))
});

const GlobalStyle = createGlobalStyle`
	${reset}
	html {
		@media screen and (max-width: 320px) {
			font-size: 14px;
		}
	}
	body {
		margin: 0;
		font-family: 'Roboto', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	a {
		color: ${theme.primary};
		text-decoration-color: transparent;
		transition: text-decoration 500ms;
		&:hover {
			text-decoration-color: ${theme.primary};
		}
	}
`;

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<LoginProvider>
			<ApolloProvider client={client}>
				<GlobalStyle />
				<ThemeProvider theme={theme}>
					<Toast />
					<Head>
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1"
						/>
					</Head>
					<Component {...pageProps} />
				</ThemeProvider>
			</ApolloProvider>
		</LoginProvider>
	);
};

export default App;
