import React, { InputHTMLAttributes } from 'react';
import { Label, Input } from './Input.styled';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  handleChange: (val: string) => void;
}

const TextInput = ({ label, handleChange, ...props }: Props) => (
  <>
    {label && <Label>{label}</Label>}
    <Input {...props} onChange={(e) => handleChange(e.target.value)} />
  </>
);

export default TextInput;
