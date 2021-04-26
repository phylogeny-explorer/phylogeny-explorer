import React, { useState, useEffect, createContext } from 'react';

import Amplify from 'aws-amplify';

import { AUTH_USER_TOKEN_KEY } from 'consts';
import awsconfig from '../aws-exports';

type LoginContextType = {
  isLoggedIn: string;
  setItem: (string) => void;
  removeItem: () => void;
};

export const LoginContext = createContext<LoginContextType>({
  isLoggedIn: '',
  setItem: () => {},
  removeItem: () => {},
});

const LoginProvider = ({ children }) => {
  useEffect(() => {
    Amplify.configure(awsconfig);
  }, []);

  const [item, setItem] = useState(
    localStorage.getItem(AUTH_USER_TOKEN_KEY) || ''
  );

  useEffect(() => {
    if (item === '') localStorage.removeItem(AUTH_USER_TOKEN_KEY);
    else localStorage.setItem(AUTH_USER_TOKEN_KEY, item);
  }, [item]);

  return (
    <LoginContext.Provider
      value={{ isLoggedIn: item, setItem, removeItem: () => setItem('') }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
