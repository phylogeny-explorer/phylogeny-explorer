import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { Auth } from 'aws-amplify';
import { toast } from 'react-toastify';

import { LoginContext } from 'context/LoginContext';
import Logo from 'components/Logo';
import NavItem from 'components/NavItem';
import Search from 'components/Search';
import Button from 'components/Button';

import { Wrapper } from './NavBar.styled';

const NavBar = () => {
  const { pathname, ...router } = useRouter();
  const { removeItem } = useContext(LoginContext);

  const handleLogout = async e => {
    e.preventDefault();
    try {
      await Auth.signOut({ global: true }).then(() => {
        removeItem();
        router.push('/');
      });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <Wrapper>
      <Logo />
      <Search />
      {!pathname.includes('tree') && <NavItem name="tree" />}
      {!pathname.includes('relationships') && <NavItem name="relationships" />}
      <Button dark squishy text="sign out" onClick={handleLogout} />
    </Wrapper>
  );
};

export default NavBar;
