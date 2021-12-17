import React from 'react';
import { Meta } from '@storybook/react';

import Logo from './Logo';

export default {
  title: 'Logo',
  component: Logo,
  args: {
    size: 56,
  },
  argTypes: {
    size: { control: { type: 'range', min: 24, max: 200, step: 2 } },
  },
} as Meta;

export const Simple = args => <Logo {...args} />;
Simple.storyName = 'default';
