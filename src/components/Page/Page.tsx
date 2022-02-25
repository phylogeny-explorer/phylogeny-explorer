import React, { ReactNode } from 'react';
import styled from 'styled-components';
import useUser from 'lib/hooks/useUser';
import NavBar from 'components/NavBar';
import PageHeader from 'components/PageHeader';

interface Props {
  backgroundImage?: string;
  isDark?: boolean;
  children: ReactNode;
}

const Main = styled.div<Props>`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: ${props =>
    props.isDark ? props.theme.foreground : props.theme.background};
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
`;

const Page = ({ backgroundImage, isDark, children }: Props) => {
  const { isLoggedIn } = useUser();
  return (
    <Main backgroundImage={backgroundImage} isDark={isDark}>
      {isLoggedIn ? <NavBar /> : <PageHeader />}
      {children}
    </Main>
  );
};

export default Page;
