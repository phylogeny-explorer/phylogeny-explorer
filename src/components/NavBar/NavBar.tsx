import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Auth } from 'aws-amplify';
import { toast } from 'react-toastify';

import useUser from 'lib/hooks/useUser';
import Logo from 'components/Logo';
import NavItem from 'components/NavItem';
import Search from 'components/Search';
import Button from 'components/Button';
import Icon from 'components/Icon';
import { ShowIfDesktop, ShowIfMobile } from 'components/MediaQuery';

import { Wrapper, NavItems, MenuWrapper, MenuItem } from './NavBar.styled';
import { Heading } from 'components/Typography';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname, ...router } = useRouter();
  const { removeSession } = useUser();

  const handleLogout = async e => {
    e.preventDefault();
    try {
      await Auth.signOut({ global: true }).then(() => {
        removeSession();
        router.push('/');
      });
    } catch (err) {
      toast.error(err as string);
    }
  };

  return (
    <Wrapper>
      <Logo />
      <ShowIfDesktop minWidth={650}>
        <Search />
        <NavItems>
          {!pathname.includes('tree') && <NavItem name="tree" />}
          {!pathname.includes('relationships') && (
            <NavItem name="relationships" />
          )}
        </NavItems>
        <Button dark squishy text="sign out" onClick={handleLogout} />
      </ShowIfDesktop>
      <ShowIfMobile maxWidth={650}>
        <Icon
          name="menu"
          onClick={() => setIsOpen(!isOpen)}
          rotate={isOpen ? 90 : 0}
          size={1.5}
          style={{ transition: 'transform 300ms' }}
        />

        <MenuWrapper isOpen={isOpen}>
          {!pathname.includes('tree') && <NavItem name="tree" isMobile />}
          {!pathname.includes('relationships') && (
            <NavItem name="relationships" isMobile />
          )}
          <MenuItem onClick={handleLogout}>
            <Icon name="logout" />
            <Heading>Sign Out</Heading>
          </MenuItem>
        </MenuWrapper>
      </ShowIfMobile>
    </Wrapper>
  );
};

export default NavBar;
