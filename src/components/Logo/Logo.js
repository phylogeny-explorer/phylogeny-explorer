import React from 'react';
import styled from 'styled-components';
import PEPLogo from './PEPLogo';
import PEPLogoFull from './PEPLogoFull';

export const Wrapper = styled.div`
  height: ${props => props.size}px;
  width: ${props => (props.full ? props.size * 7.2 : props.size)}px;
`;

const Logo = ({ size = 40, full = true }) => (
  <Wrapper size={size} full={full}>
    {full ? <PEPLogoFull /> : <PEPLogo />}
  </Wrapper>
);

export default Logo;
