import React from 'react';
import { useRouter } from 'next/router';

import Logo from 'components/Logo';

import { Wrapper, AuthButton } from './PageHeader.styled';

const PageHeader = () => {
  const { pathname, ...router } = useRouter();
  return (
    <Wrapper>
      <Logo full />
      <AuthButton dark text="Donate" onClick={() => router.push('#donate')} />
      {pathname !== '/signup' && (
        <AuthButton
          dark
          text="sign up"
          icon="account"
          onClick={() => router.push('/signup')}
        />
      )}
      {pathname !== '/login' && (
        <AuthButton
          dark={pathname === '/signup'}
          light={pathname !== '/signup'}
          text="log in"
          icon="login"
          onClick={() => router.push('/login')}
        />
      )}
    </Wrapper>
  );
};

export default PageHeader;
