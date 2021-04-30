import React from 'react';
import { useField, FieldConfig } from 'formik';
import Input, { InputProps } from 'components/Input';

export const Field = (props: FieldConfig & InputProps) => {
  const [field, meta] = useField(props);
  return (
    <Input
      {...field}
      {...props}
      errorMessage={meta.touched && meta.error ? meta.error : ''}
    />
  );
};
