import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import Logo from 'components/Logo';
import Button from 'components/Button';

import { Wrapper } from './PageHeader.styled';

const PageHeader = () => {
  const { pathname } = useLocation();
  const isLoginPage = pathname === '/login';
  const history = useHistory();
  return (
    <Wrapper>
      <Logo full />
      <Button
        dark
        squishy
        text={isLoginPage ? 'sign up' : 'log in'}
        onClick={() => history.push(isLoginPage ? '/signup' : '/login')}
      />
    </Wrapper>
  );
};

export default PageHeader;
