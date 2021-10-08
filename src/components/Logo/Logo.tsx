import React from 'react';
import { useRouter } from 'next/router';
import PEPLogo from './PEPLogo';
import PEPLogoFull from './PEPLogoFull';
import { Wrapper } from './Logo.styled';

export interface LogoProps {
  size?: number;
  full?: boolean;
}

const Logo = ({ size = 40, full = false }: LogoProps) => {
  const router = useRouter();
  return (
    <Wrapper size={size} full={full} onClick={() => router.push('/')}>
      {full ? <PEPLogoFull /> : <PEPLogo />}
    </Wrapper>
  );
};

export default Logo;
