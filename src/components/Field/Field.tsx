import React, { ReactNode } from 'react';
import { useField } from 'formik';
import { Spacers } from 'lib/types';
import Checkbox, { CheckboxProps } from 'components/Checkbox';
import Input, { InputProps } from 'components/Input';
import TextArea, { TextAreaProps } from 'components/TextArea';
import { HeadingLabel } from 'components/Typography';
import { Wrapper, InputWrapper, ErrorMessage } from './Field.styled';

interface Props {
  name: string;
  type?: string;
  label?: string;
  px?: Spacers;
  children?: ReactNode;
}

const Field = ({
  label,
  px,
  children,
  ...props
}: Props & (InputProps | TextAreaProps | Omit<CheckboxProps, 'onChange'>)) => {
  const [field, meta, helpers] = useField(props);
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
      {props.type === 'checkbox' && (
        <Checkbox
          {...field}
          {...(props as CheckboxProps)}
          onChange={checked => helpers.setValue(checked)}
        />
      )}
      {props.type !== 'textarea' && props.type !== 'checkbox' && (
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
