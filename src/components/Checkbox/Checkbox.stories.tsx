import React from 'react';
import { Meta } from '@storybook/react';

import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
  args: { checked: false, text: '' },
  argTypes: {
    onChange: { action: 'onChange' },
  },
} as Meta;

export const Simple = args => <Checkbox {...args} />;
Simple.storyName = 'default';
