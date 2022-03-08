import React from 'react';
import { useField, FieldConfig } from 'formik';
import Input, { InputProps } from 'components/Input';
import TextArea, { TextAreaProps } from 'components/TextArea';

export const Field = (props: FieldConfig & (InputProps | TextAreaProps)) => {
  const [field, meta] = useField(props);
  return props.type === 'textarea' ? (
    <TextArea
      {...field}
      {...(props as TextAreaProps)}
      errorMessage={meta.touched && meta.error ? meta.error : ''}
    />
  ) : (
    <Input
      {...field}
      {...(props as InputProps)}
      errorMessage={meta.touched && meta.error ? meta.error : ''}
    />
  );
};
