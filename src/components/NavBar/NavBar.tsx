import React from 'react';
import { useRouter } from 'next/router';
import { Auth } from 'aws-amplify';
import { toast } from 'react-toastify';

import useUser from 'lib/hooks/useUser';
import Logo from 'components/Logo';
import NavItem from 'components/NavItem';
import Search from 'components/Search';
import Button from 'components/Button';

import { useMediaQuery } from 'react-responsive';
import { MobileNavLinks } from './mobileNavLinks.jsx';

import { Wrapper, NavItems } from './NavBar.styled';

const DeviceSize = {
  mobile: 784,
  tablet: 992,
  laptop: 1324,
  desktop: 2024,
}

const NavBar = () => {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })
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
      <Search />
      {!isMobile && <NavItems>
        {!pathname.includes('tree') && <NavItem name="tree" />}
        {!pathname.includes('relationships') && (
          <NavItem name="relationships" />
        )}
      </NavItems>}
      {!isMobile && <Button dark squishy text="sign out" onClick={handleLogout} />}
      {isMobile && <MobileNavLinks />}
    </Wrapper>
  );
};

export default NavBar;
