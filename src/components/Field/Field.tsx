import React from 'react';
import { useField, FieldConfig } from 'formik';
import { Spacers } from 'lib/types';
import Input, { InputProps } from 'components/Input';
import TextArea, { TextAreaProps } from 'components/TextArea';
import { HeadingLabel } from 'components/Typography';
import { Wrapper, InputWrapper, ErrorMessage } from './Field.styled';

interface Props extends FieldConfig {
  label?: string;
  px?: Spacers;
}

const Field = ({
  label,
  px,
  children,
  ...props
}: Props & (InputProps | TextAreaProps)) => {
  const [field, meta] = useField(props);
  const errorMessage = meta.touched && meta.error ? meta.error : '';
  return (
    <Wrapper px={px}>
      {label && (
        <HeadingLabel as="label" htmlFor={props.name}>
          {label}
        </HeadingLabel>
      )}
      {props.type === 'textarea' && (
        <TextArea {...field} {...(props as TextAreaProps)} />
      )}
      {props.type !== 'textarea' && (
        <InputWrapper>
          <Input {...field} {...(props as InputProps)} />
          {children}
        </InputWrapper>
      )}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Wrapper>
  );
};

export default Field;
