import React, { ReactNode } from 'react';

import Icon from './Icon';
import { StoryRow, StoryTitle, StoryItem, StoryItemName } from './Icon.styled';

interface ItemProps {
  name: string;
  children: ReactNode;
}

const Item = ({ name, children }: ItemProps) => (
  <StoryItem>
    {children}
    <StoryItemName>{name}</StoryItemName>
  </StoryItem>
);

const icons = [
  {
    name: 'Feature Icons',
    icons: ['tree', 'tree-outline', 'relationships', 'wiki'],
  },
  {
    name: 'Management Icons',
    icons: ['cog', 'eye-off', 'eye', 'history', 'login', 'logout', 'account'],
  },
  {
    name: 'Button Icons',
    icons: [
      'copy',
      'crosshairs',
      'delete',
      'edit-alt',
      'edit',
      'external-link',
      'help',
      'image',
      'info-circle',
      'info',
      'link',
      'link-off',
      'search',
      'undo',
      'upload',
    ],
  },
  {
    name: 'Directional Icons',
    icons: ['down', 'left', 'right', 'up'],
  },
  {
    name: 'Operators',
    icons: ['plus', 'minus'],
  },
  {
    name: 'Boolean Icons',
    icons: [
      'check',
      'close-circle',
      'close',
      'checkbox',
      'checkbox-indeterminate',
      'checkbox-marked',
    ],
  },
  {
    name: 'More Icons',
    icons: ['dots-h', 'dots-v', 'loading'],
  },
];

export default {
  title: 'Icon',
  component: Icon,
  args: {
    name: 'cog',
    size: 1,
    spin: false,
    rotate: 0,
    horizontal: false,
    vertical: false,
    onClick: undefined,
  },
  argTypes: {
    size: {
      control: {
        type: 'range',
        min: 1,
        max: 10,
      },
    },
    rotate: {
      control: {
        type: 'range',
        min: 0,
        max: 360,
        step: 90,
      },
    },
    color: { control: { type: 'color' } },
  },
};

export const Simple = args => <Icon {...args} />;
Simple.storyName = 'default';

export const Clickable = args => <Icon {...args} />;
Clickable.argTypes = {
  onClick: { action: 'onClick' },
};

export const Name = args => (
  <>
    {icons.map(group => (
      <div key={group.name}>
        <StoryTitle>{group.name}</StoryTitle>
        <StoryRow>
          {group.icons.map(name => (
            <Item key={name} name={name}>
              <Icon {...args} name={name} />
            </Item>
          ))}
        </StoryRow>
      </div>
    ))}
  </>
);
Name.argTypes = { name: { control: { disable: true } } };
