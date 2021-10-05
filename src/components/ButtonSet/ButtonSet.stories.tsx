import React from 'react';
import { Meta } from '@storybook/react';

import Button from 'components/Button';
import ButtonSet from './ButtonSet';

export default {
  title: 'ButtonSet',
  component: ButtonSet,
} as Meta;

export const Simple = args => (
  <ButtonSet {...args}>
    <Button icon="plus" dark />
    <Button icon="minus" dark />
  </ButtonSet>
);
Simple.storyName = 'default';

export const Three = args => (
  <ButtonSet {...args}>
    <Button icon="plus" light />
    <Button icon="minus" light />
    <Button icon="dots-h" light />
  </ButtonSet>
);
