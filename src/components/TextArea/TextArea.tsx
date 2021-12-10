import React from 'react';
import { TextareaAutosizeProps } from 'react-textarea-autosize';
import { Wrapper, Label, ErrorMessage } from '../Input/Input.styled';
import { StyledTextArea } from './TextArea.styled';

export interface TextAreaProps extends TextareaAutosizeProps {
  label?: string;
  errorMessage?: string;
}

const TextArea = ({ label, name, errorMessage, ...props }: TextAreaProps) => (
  <Wrapper>
    {label && (
      <Label as="label" htmlFor={name}>
        {label}
      </Label>
    )}
    <StyledTextArea {...props} name={name} />
    {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
  </Wrapper>
);

export default TextArea;
