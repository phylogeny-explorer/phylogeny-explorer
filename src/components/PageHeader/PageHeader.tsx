import React from 'react';
import { useRouter } from 'next/router';

import Logo from 'components/Logo';
import Button from 'components/Button';

import { Wrapper } from './PageHeader.styled';

const PageHeader = () => {
  const { pathname, ...router } = useRouter();
  const isLoginPage = pathname === '/login';
  return (
    <Wrapper>
      <Logo full />
      <Button
        dark
        squishy
        text={isLoginPage ? 'sign up' : 'log in'}
        onClick={() => router.push(isLoginPage ? '/signup' : '/login')}
      />
    </Wrapper>
  );
};

export default PageHeader;
