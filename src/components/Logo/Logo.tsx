import React from 'react';
import { useHistory } from 'react-router-dom';
import PEPLogo from './PEPLogo';
import PEPLogoFull from './PEPLogoFull';
import { Wrapper } from './Logo.styled';

export interface LogoProps {
  size?: number;
  full?: boolean;
}

const Logo = ({ size = 40, full = false }: LogoProps) => {
  const history = useHistory();
  return (
    <Wrapper size={size} full={full} onClick={() => history.push('/ott93302')}>
      {full ? <PEPLogoFull /> : <PEPLogo />}
    </Wrapper>
  );
};

export default Logo;
