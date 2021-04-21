import React from 'react';
import { useLocation } from 'react-router-dom';

import Logo from 'components/Logo';
import NavItem from 'components/NavItem';
import Search from 'components/Search';

import { Wrapper } from './NavBar.styled';

const NavBar = () => {
  const { pathname } = useLocation();
  return (
    <Wrapper>
      <Logo />
      <Search />
      {!pathname.includes('tree') && <NavItem name="tree" />}
      {!pathname.includes('relationships') && <NavItem name="relationships" />}
    </Wrapper>
  );
};

export default NavBar;
