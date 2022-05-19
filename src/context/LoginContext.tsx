import React, { useState, useEffect, createContext, useMemo } from 'react';

import { Amplify } from 'aws-amplify';

import { AUTH_USER_TOKEN_KEY } from 'consts';
import awsConfig from '../aws-exports';

type LoginContextType = {
	isLoggedIn: boolean;
	isLoadingUser: boolean;
	token: string;
	setSession: (session: string) => void;
	removeSession: () => void;
};

export const LoginContext = createContext({} as LoginContextType);

const LoginProvider = ({ children }) => {
	const [session, setSession] = useState<string>(null as any);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const item = localStorage.getItem(AUTH_USER_TOKEN_KEY);
		if (item) setSession(item);
		setLoading(false);
		Amplify.configure(awsConfig);
	}, []);

	useEffect(() => {
		if (!session) localStorage.removeItem(AUTH_USER_TOKEN_KEY);
		else localStorage.setItem(AUTH_USER_TOKEN_KEY, session);
	}, [session]);

	const value = useMemo(
		() => ({
			isLoggedIn: !!session && !loading,
			isLoadingUser: loading,
			token: session,
			setSession,
			removeSession: () => setSession(null as any),
		}),
		[session, loading]
	);

	return (
		<LoginContext.Provider value={value}>{children}</LoginContext.Provider>
	);
};

export default LoginProvider;
