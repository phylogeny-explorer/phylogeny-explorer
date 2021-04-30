import React from 'react';

import { SOCIAL } from 'consts';
import SocialButton from './SocialButton';

export default {
  title: 'SocialButton',
  component: SocialButton,
  args: {
    platform: SOCIAL.FACEBOOK,
    text: 'Click Me',
    light: false,
    small: false,
    allCaps: false,
    disabled: false,
    squishy: false,
    loading: false,
    noIcon: false,
    official: false,
  },
  argTypes: {
    platform: { control: { type: 'select', options: Object.values(SOCIAL) } },
  },
};

export const Simple = args => <SocialButton {...args} />;
Simple.storyName = 'default';
