import React, { useState, useEffect, createContext, useMemo } from 'react';

import Amplify from 'aws-amplify';

import { AUTH_USER_TOKEN_KEY } from 'consts';
import awsConfig from '../aws-exports';

type LoginContextType = {
  isLoggedIn: boolean;
  isLoadingUser: boolean;
  setSession: (string) => void;
  removeSession: () => void;
};

export const LoginContext = createContext<LoginContextType>({
  isLoggedIn: false,
  isLoadingUser: false,
  setSession: () => {},
  removeSession: () => {},
});

const LoginProvider = ({ children }) => {
  const [session, setSession] = useState('initial');

  useEffect(() => {
    setSession(localStorage.getItem(AUTH_USER_TOKEN_KEY) || 'initial');
    Amplify.configure(awsConfig);
  }, []);

  useEffect(() => {
    if (session === '') localStorage.removeItem(AUTH_USER_TOKEN_KEY);
    else localStorage.setItem(AUTH_USER_TOKEN_KEY, session);
  }, [session]);

  const value = useMemo(
    () => ({
      isLoggedIn: !!session && session !== 'initial',
      isLoadingUser: session === 'initial',
      setSession,
      removeSession: () => setSession(''),
    }),
    [session]
  );

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};

export default LoginProvider;
