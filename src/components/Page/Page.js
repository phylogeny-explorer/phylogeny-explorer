import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.background};
`;

const Page = props => {
  return <Main>{props.children}</Main>;
};

export default Page;
