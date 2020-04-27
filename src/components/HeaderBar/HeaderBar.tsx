import React from 'react';
import styled from 'styled-components';

import Logo from '../Logo';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: ${(props) => props.theme.topbarHeight}px;
  padding: ${(props) => props.theme.largeSpacer}px;
  background: ${(props) => props.theme.foreground};
  box-sizing: border-box;
`;

const HeaderBar = () => (
  <Wrapper>
    <Logo />
  </Wrapper>
);

export default HeaderBar;
