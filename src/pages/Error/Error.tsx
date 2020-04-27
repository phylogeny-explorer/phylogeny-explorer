import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Page from '../../components/Page';
import Logo from '../../components/Logo';
import { HeadingLarge } from '../../components/Typography';

const Content = styled.div`
  height: 100%;
  background: ${(props) => props.theme.foreground};
  color: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4 {
    margin: ${(props) => props.theme.xlargeSpacer}px;
  }
`;

const Code = styled.code`
  font-family: monospace;
  color: ${(props) => props.theme.primary};
`;

const ErrorPage = () => {
  const location = useLocation();
  return (
    <Page>
      <Content>
        <Logo />
        <HeadingLarge>
          {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
          {`No match for `}
          <Code>{location.pathname}</Code>
        </HeadingLarge>
      </Content>
    </Page>
  );
};

export default ErrorPage;
