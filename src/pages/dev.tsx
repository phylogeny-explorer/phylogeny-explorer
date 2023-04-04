import React, { useState } from 'react';
import styled from 'styled-components';

import useUser from 'lib/hooks/useUser';
import Page from 'components/layout/Page';
import {
  BodyText,
  Heading,
  HeadingLabel,
  HeadingLarge,
} from 'components/Typography';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Checkbox from 'components/Checkbox';
import ButtonSet from 'components/ButtonSet';

interface ContentProps {
  background: string;
}

const Content = styled.div<ContentProps>`
  height: 100%;
  background: ${props =>
    props.background === 'dark'
      ? props.theme.foreground
      : props.theme.background};
  color: ${props =>
    props.background === 'dark'
      ? props.theme.background
      : props.theme.foreground};
  display: grid;
  justify-items: center;
  align-content: center;
  grid-gap: ${props => props.theme.largeSpacer}px;
`;

const Row = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${props => props.theme.spacer}px;
`;

const DevSandbox = () => {
  const { isLoggedIn, isLoadingUser } = useUser({ redirectTo: '/' });
  const [background, setBackground] = useState('dark');

  const handleClick = () =>
    setBackground(background === 'light' ? 'dark' : 'light');

  if (isLoadingUser || !isLoggedIn) return null;

  return (
    <Page>
      <Content background={background}>
        <Button text="toggle background" onClick={handleClick} />
        <Button text="dark button" dark />
        <Button text="light button" light />
        <ButtonSet>
          <Button icon="plus" light />
          <Button icon="minus" light />
        </ButtonSet>
        <BodyText>Body Text</BodyText>
        <Heading>Heading</Heading>
        <HeadingLarge>Heading Large</HeadingLarge>
        <HeadingLabel>Heading Label</HeadingLabel>
        <Row>
          <Icon name="edit" />
          <Icon name="cog" onClick={handleClick} />
          <Icon name="account" />
        </Row>
        <Row>
          <Checkbox
            name="light"
            onChange={checked => setBackground(checked ? 'light' : 'dark')}
            checked={background === 'light'}
          />
          <Checkbox
            name="dark"
            onChange={checked => setBackground(checked ? 'dark' : 'light')}
            checked={background === 'dark'}
          />
          <Checkbox
            name="indeterminate"
            onChange={checked => setBackground(checked ? 'dark' : 'light')}
            checked={background === 'dark'}
            indeterminate
          />
        </Row>
        <Checkbox
          name="text"
          onChange={checked => setBackground(checked ? 'dark' : 'light')}
          checked={background === 'dark'}
          text="with text"
        />
      </Content>
    </Page>
  );
};

export default DevSandbox;
