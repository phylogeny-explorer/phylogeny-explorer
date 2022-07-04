import React, { InputHTMLAttributes } from 'react';
import { StyledInput } from './Input.styled';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = (props: InputProps) => <StyledInput {...props} />;

export default Input;
