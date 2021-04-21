import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  backgroundImage?: string;
  children: ReactNode;
}

const Main = styled.div<Props>`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.background};
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
`;

const Page = ({ backgroundImage, children }: Props) => {
  return <Main backgroundImage={backgroundImage}>{children}</Main>;
};

export default Page;
