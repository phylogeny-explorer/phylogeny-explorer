import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Page from 'components/Page';
import Logo from 'components/Logo';
import { HeadingLarge } from 'components/Typography';

const Content = styled.div`
  height: 100%;
  background: ${props => props.theme.foreground};
  color: ${props => props.theme.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4 {
    margin: ${props => props.theme.xlargeSpacer}px;
  }
`;

const Code = styled.code`
  font-family: monospace;
  color: ${props => props.theme.primary};
`;

const ErrorPage = () => {
  const router = useRouter();
  return (
    <Page>
      <Content>
        <Logo />
        <HeadingLarge>
          {`No match for `}
          <Code>{router.pathname}</Code>
        </HeadingLarge>
      </Content>
    </Page>
  );
};

export default ErrorPage;
