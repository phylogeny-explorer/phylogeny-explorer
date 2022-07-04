import React from 'react';
import {
  useField,
  FieldConfig,
  FieldInputProps,
  FieldHelperProps,
} from 'formik';
import Source from 'components/Source';
import { HeadingLabel } from 'components/Typography';
import {
  Wrapper,
  InputWithSource,
  InputWrapper,
  ErrorMessage,
} from './FieldGroup.styled';

interface Props extends Omit<FieldConfig, 'children'> {
  label: string;
  errorMessage?: string;
  source?: string;
  children: (
    props: FieldInputProps<any> & FieldHelperProps<any>
  ) => React.ReactNode;
}

const FieldGroup = ({ children, source, ...props }: Props) => {
  const [field, meta, helpers] = useField(props);
  const errorMessage = meta.touched && meta.error ? meta.error : '';
  return (
    <Wrapper>
      <HeadingLabel as="label" htmlFor={props.name}>
        {props.label}
      </HeadingLabel>
      <InputWithSource>
        <InputWrapper>{children({ ...field, ...helpers })}</InputWrapper>
        <Source name={props.label} source={source} />
      </InputWithSource>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Wrapper>
  );
};

export default FieldGroup;
