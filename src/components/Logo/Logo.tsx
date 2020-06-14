import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PEPLogo from './PEPLogo';
import PEPLogoFull from './PEPLogoFull';

interface WrapperProps {
  size: number;
  full: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  height: ${(props) => props.size}px;
  width: ${(props) => (props.full ? props.size * 7.2 : props.size)}px;
  cursor: pointer;
`;

interface Props {
  size?: number;
  full?: boolean;
}

const Logo = ({ size = 40, full = false }: Props) => {
  const history = useHistory();
  return (
    <Wrapper size={size} full={full} onClick={() => history.push('/ott93302')}>
      {full ? <PEPLogoFull /> : <PEPLogo />}
    </Wrapper>
  );
};

export default Logo;
