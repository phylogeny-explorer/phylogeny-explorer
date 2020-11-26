import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Main = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.background};
`;

interface Props {
  children: ReactNode;
}

const Page = ({ children }: Props) => {
  return <Main>{children}</Main>;
};

export default Page;
