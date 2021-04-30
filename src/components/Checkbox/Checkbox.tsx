import React from 'react';
import Icon from 'components/Icon';

import { Label, Input, Check, Text } from './Checkbox.styled';

export interface CheckboxProps {
  name: string;
  checked: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  text?: string;
  onChange: (name: string, checked: boolean) => void;
}

const Checkbox = ({
  name,
  checked,
  disabled,
  indeterminate,
  onChange,
  text,
  ...props
}: CheckboxProps) => {
  return (
    <Label {...props}>
      <Input
        name={name}
        defaultChecked={checked}
        onChange={e => onChange(e.target.name, e.target.checked)}
        disabled={disabled}
      />
      <Check checked={checked} disabled={disabled}>
        <Icon
          name={
            checked
              ? `checkbox-${indeterminate ? 'indeterminate' : 'marked'}`
              : 'checkbox'
          }
        />
      </Check>
      {text && <Text>{text}</Text>}
    </Label>
  );
};

export default Checkbox;
