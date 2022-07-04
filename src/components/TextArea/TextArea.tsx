import React from 'react';
import { TextareaAutosizeProps } from 'react-textarea-autosize';
import { StyledTextArea } from './TextArea.styled';

export type TextAreaProps = TextareaAutosizeProps;

const TextArea = (props: TextAreaProps) => <StyledTextArea {...props} />;

export default TextArea;
