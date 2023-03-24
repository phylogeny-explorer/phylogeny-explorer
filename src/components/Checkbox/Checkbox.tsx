import React from 'react';
import Icon from 'components/Icon';

import { Label, Input, Check, Text } from './Checkbox.styled';

export interface CheckboxProps {
  name: string;
  checked: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  text?: string;
  type?: 'checkbox' | 'radio';
  onChange: (checked: boolean) => void;
}

const Checkbox = ({
  name,
  checked,
  disabled,
  indeterminate,
  onChange,
  text,
  type = 'checkbox',
  ...props
}: CheckboxProps) => {
  return (
    <Label {...props}>
      <Input
        name={name}
        defaultChecked={checked}
        onChange={e => onChange(e.target.checked)}
        disabled={disabled}
      />
      <Check checked={checked} disabled={disabled}>
        <Icon
          name={
            checked
              ? `${type}-${indeterminate ? 'indeterminate' : 'marked'}`
              : type
          }
        />
      </Check>
      {text && <Text>{text}</Text>}
    </Label>
  );
};

export default Checkbox;
