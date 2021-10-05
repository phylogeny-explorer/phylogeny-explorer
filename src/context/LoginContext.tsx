import React, { useState, useEffect, createContext, useMemo } from 'react';

import Amplify from 'aws-amplify';

import { AUTH_USER_TOKEN_KEY } from 'consts';
import awsConfig from '../aws-exports';

type LoginContextType = {
  isLoggedIn: boolean;
  setItem: (string) => void;
  removeItem: () => void;
};

export const LoginContext = createContext<LoginContextType>({
  isLoggedIn: false,
  setItem: () => {},
  removeItem: () => {},
});

const LoginProvider = ({ children }) => {
  const [item, setItem] = useState('initial');

  useEffect(() => {
    setItem(localStorage.getItem(AUTH_USER_TOKEN_KEY) || '');
    Amplify.configure(awsConfig);
  }, []);

  useEffect(() => {
    if (item === '') localStorage.removeItem(AUTH_USER_TOKEN_KEY);
    else localStorage.setItem(AUTH_USER_TOKEN_KEY, item);
  }, [item]);

  const value = useMemo(
    () => ({ isLoggedIn: !!item, setItem, removeItem: () => setItem('') }),
    [item]
  );

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};

export default LoginProvider;
