import React from 'react';
import { FieldArray as FormikFieldArray } from 'formik';

import Field from 'components/Field';
import Card from 'components/Card';
import Source from 'components/Source';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Grid from 'components/Grid';
import { HeadingLabel } from 'components/Typography';

interface Props {
  name: string;
  label: string;
  values: string[];
  placeholder?: string;
}

const FieldArray = ({ name, label, values, placeholder }: Props) => {
  return (
    <FormikFieldArray name={name}>
      {({ push, remove }) => (
        <Card ji="start">
          <HeadingLabel>{label}</HeadingLabel>
          {values.map((_, index) => (
            <Field
              key={index}
              name={`${name}.${index}`}
              placeholder={placeholder}
            >
              <Grid
                autoFlow="column"
                ai="center"
                jc={values.length > 1 ? 'space-between' : 'end'}
              >
                {values.length > 1 && (
                  <Button onClick={() => remove(index)} icon="delete" dark />
                )}
                <Source name={label} source="" />
              </Grid>
            </Field>
          ))}
          <Icon onClick={() => push('')} name="plus" />
        </Card>
      )}
    </FormikFieldArray>
  );
};

export default FieldArray;
