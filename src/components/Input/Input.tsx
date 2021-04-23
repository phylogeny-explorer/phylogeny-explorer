import React, { InputHTMLAttributes } from 'react';
import { Wrapper, Label, StyledInput, ErrorMessage } from './Input.styled';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

const Input = ({ label, name, errorMessage, ...props }: InputProps) => (
  <Wrapper>
    {label && (
      <Label as="label" htmlFor={name}>
        {label}
      </Label>
    )}
    <StyledInput {...props} name={name} />
    {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
  </Wrapper>
);

export default Input;
