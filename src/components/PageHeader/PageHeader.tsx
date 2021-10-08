import React from 'react';
import { useRouter } from 'next/router';

import Logo from 'components/Logo';
import Button from 'components/Button';

import { Wrapper } from './PageHeader.styled';

const PageHeader = () => {
  const { pathname, ...router } = useRouter();
  return (
    <Wrapper>
      <Logo full />
      {pathname !== '/signup' && (
        <Button
          dark
          squishy
          text="sign up"
          icon="account"
          iconFirst
          onClick={() => router.push('/signup')}
        />
      )}
      {pathname !== '/login' && (
        <Button
          dark={pathname === '/signup'}
          squishy
          text="log in"
          icon="login"
          iconFirst
          onClick={() => router.push('/login')}
        />
      )}
    </Wrapper>
  );
};

export default PageHeader;
