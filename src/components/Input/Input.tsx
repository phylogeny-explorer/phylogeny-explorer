import React, { InputHTMLAttributes } from 'react';
import { Wrapper, Label, StyledInput } from './Input.styled';

export interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string;
  onChange: (val: string) => void;
}

const Input = ({ label, onChange, name, ...props }: Props) => (
  <Wrapper>
    {label && (
      <Label as="label" htmlFor={name}>
        {label}
      </Label>
    )}
    <StyledInput {...props} onChange={e => onChange(e.target.value)} />
  </Wrapper>
);

export default Input;
