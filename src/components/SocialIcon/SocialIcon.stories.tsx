import React from 'react';

import { SOCIAL } from 'consts';
import { StoryRow } from './SocialIcon.styled';
import SocialIcon from './SocialIcon';

export default {
  title: 'SocialIcon',
  component: SocialIcon,
  args: {
    platform: SOCIAL.FACEBOOK,
    size: 32,
  },
  argTypes: {
    platform: { control: { type: 'select', options: Object.values(SOCIAL) } },
    variant: {
      control: {
        type: 'inline-radio',
        options: ['circle', 'square', 'colour', 'outline'],
      },
    },
    size: { control: { type: 'range', min: 24, max: 90, step: 1 } },
    color: { control: { type: 'color' } },
  },
};

export const Simple = args => <SocialIcon {...args} />;
Simple.storyName = 'default';

export const Platform = args => (
  <StoryRow>
    {Object.values(SOCIAL).map(social => (
      <SocialIcon key={social} {...args} platform={social} />
    ))}
  </StoryRow>
);
Platform.argTypes = { platform: { control: { disable: true } } };

export const Variant = args => (
  <StoryRow>
    <SocialIcon {...args} />
    <SocialIcon {...args} variant="colour" />
    <SocialIcon {...args} variant="square" />
    <SocialIcon {...args} variant="circle" />
  </StoryRow>
);
Variant.argTypes = { variant: { control: { disable: true } } };

export const AllTogether = args => (
  <>
    <StoryRow>
      {Object.values(SOCIAL).map(social => (
        <SocialIcon key={social} {...args} platform={social} variant="colour" />
      ))}
    </StoryRow>
    <StoryRow>
      {Object.values(SOCIAL).map(social => (
        <SocialIcon key={social} {...args} platform={social} />
      ))}
    </StoryRow>
    <StoryRow>
      {Object.values(SOCIAL).map(social => (
        <SocialIcon key={social} {...args} platform={social} variant="square" />
      ))}
    </StoryRow>
    <StoryRow>
      {Object.values(SOCIAL).map(social => (
        <SocialIcon key={social} {...args} platform={social} variant="circle" />
      ))}
    </StoryRow>
  </>
);
AllTogether.argTypes = {
  platform: { control: { disable: true } },
  variant: { control: { disable: true } },
};
