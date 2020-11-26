import React, { useState } from 'react';
import styled from 'styled-components';
import Page from '../../components/Page';
import {
  BodyText,
  Heading,
  HeadingLabel,
  HeadingLarge,
} from '../../components/Typography';
import Button from '../../components/Button';
import Icon from '../../components/Icon';

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > * {
    margin-bottom: ${props => props.theme.largeSpacer}px;
  }
`;

const DevSandbox = () => {
  const [background, setBackground] = useState('dark');
  return (
    <Page>
      <Content background={background}>
        <Button
          text="toggle background"
          onClick={() =>
            setBackground(background === 'light' ? 'dark' : 'light')
          }
        />
        <Button text="dark button" dark />
        <Button text="light button" light />
        <BodyText>Body Text</BodyText>
        <Heading>Heading</Heading>
        <HeadingLarge>Heading Large</HeadingLarge>
        <HeadingLabel>Heading Label</HeadingLabel>
        <Icon name="edit" />
        <Icon name="cog" />
        <Icon name="user" />
      </Content>
    </Page>
  );
};

export default DevSandbox;
