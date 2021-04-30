import React from 'react';
import { StoryRow } from './Button.styled';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Button',
  component: Button,
  args: {
    text: 'Click Me',
    icon: 'right',
    squishy: false,
    loading: false,
  },
  argTypes: {
    onClick: { action: 'onClick' },
    type: { control: { type: 'inline-radio' } },
  },
};

export const Simple = args => <Button {...args} />;
Simple.storyName = 'default';
Simple.args = {
  icon: '',
  iconFirst: false,
  small: false,
  squishy: false,
  dark: false,
  light: false,
  secondary: false,
  disabled: false,
};

export const AllTogether = ({ icon, ...args }: ButtonProps) => (
  <>
    <StoryRow>
      <Button {...args} />
      <Button {...args} icon={icon} />
      <Button {...args} icon={icon} iconFirst />
      <Button {...args} icon={icon} />
    </StoryRow>
    <StoryRow>
      <Button {...args} dark />
      <Button {...args} icon={icon} dark />
      <Button {...args} icon={icon} dark iconFirst />
      <Button {...args} icon={icon} dark />
    </StoryRow>
    <StoryRow>
      <Button {...args} light />
      <Button {...args} icon={icon} light />
      <Button {...args} icon={icon} light iconFirst />
      <Button {...args} icon={icon} light />
    </StoryRow>
    <StoryRow>
      <Button {...args} secondary />
      <Button {...args} icon={icon} secondary />
      <Button {...args} icon={icon} secondary iconFirst />
      <Button {...args} icon={icon} secondary />
    </StoryRow>
    <StoryRow>
      <Button {...args} disabled />
      <Button {...args} icon={icon} disabled />
      <Button {...args} icon={icon} disabled iconFirst />
      <Button {...args} icon={icon} disabled />
    </StoryRow>
    <StoryRow>
      <Button small {...args} />
      <Button small {...args} icon={icon} />
      <Button small {...args} icon={icon} iconFirst />
      <Button small {...args} icon={icon} />
    </StoryRow>
    <StoryRow>
      <Button small {...args} dark />
      <Button small {...args} icon={icon} dark />
      <Button small {...args} icon={icon} iconFirst dark />
      <Button small {...args} icon={icon} dark />
    </StoryRow>
    <StoryRow>
      <Button small {...args} light />
      <Button small {...args} icon={icon} light />
      <Button small {...args} icon={icon} iconFirst light />
      <Button small {...args} icon={icon} light />
    </StoryRow>
    <StoryRow>
      <Button small {...args} secondary />
      <Button small {...args} icon={icon} secondary />
      <Button small {...args} icon={icon} iconFirst secondary />
      <Button small {...args} icon={icon} secondary />
    </StoryRow>
    <StoryRow>
      <Button small {...args} disabled />
      <Button small {...args} icon={icon} disabled />
      <Button small {...args} icon={icon} iconFirst disabled />
      <Button small {...args} icon={icon} disabled />
    </StoryRow>
  </>
);
AllTogether.argTypes = {
  iconFirst: { table: { disable: true } },
  disabled: { table: { disable: true } },
  dark: { table: { disable: true } },
  light: { table: { disable: true } },
  secondary: { table: { disable: true } },
  small: { table: { disable: true } },
};
