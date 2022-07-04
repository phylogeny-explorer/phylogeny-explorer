import React from 'react';
import { Formik } from 'formik';

import { Clade } from 'lib/types';
import ranks from 'lib/config/ranks.json';
import { Form } from 'components/Form';
import Field from 'components/Field';
import Source from 'components/Source';
import FieldArray from 'components/FieldArray';
import Card from 'components/Card';
import FieldGroup from 'components/FieldGroup';
import Select from 'components/Select';
import Checkbox from 'components/Checkbox';
import Grid from 'components/Grid';
import { HeadingSmall } from 'components/Typography';

interface Props {
  clade: Clade;
}

const EditBasicDetails = ({ clade }: Props) => {
  return (
    <Formik
      initialValues={{
        scientificName: clade.name,
        synonyms: clade.synonyms || [''],
        commonNames: clade.commonNames || [''],
        rank: clade.rank,
        status: clade.extant ? 'extant' : 'extinct',
      }}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ values }) => (
        <Form>
          <Field
            name="scientificName"
            label="scientific name"
            placeholder="Scientific name"
            px="lg"
          >
            <Source name="scientific name" source="" />
          </Field>
          <FieldArray
            name="synonyms"
            label="synonyms"
            values={values.synonyms}
            placeholder="Add synonym"
          />
          <FieldArray
            name="commonNames"
            label="common names"
            values={values.commonNames}
            placeholder="Add common name"
          />

          <FieldGroup name="rank" label="rank">
            {({ value, setValue }) => (
              <Select
                options={ranks}
                value={ranks.find(option => option.value === value)}
                onChange={option => setValue(option?.value)}
              />
            )}
          </FieldGroup>
          <FieldGroup name="status" label="status">
            {({ value, setValue }) => (
              <>
                <Checkbox
                  type="radio"
                  name="status"
                  text="Extant"
                  checked={value === 'extant'}
                  onChange={value => setValue(value ? 'extant' : 'extinct')}
                />
                <Checkbox
                  type="radio"
                  name="status"
                  text="Extinct"
                  checked={value === 'extinct'}
                  onChange={value => setValue(value ? 'extinct' : 'extant')}
                />
              </>
            )}
          </FieldGroup>
          <Card gap="lg">
            <Grid autoFlow="column" ai="center">
              <HeadingSmall>First Described</HeadingSmall>
              <Source name="citation" source="" />
            </Grid>
            <Field
              name="attribution.date"
              label="date"
              placeholder="Paper publish date"
            />
            <Field
              name="attribution.name"
              label="by"
              placeholder="First name on paper"
            />
          </Card>
        </Form>
      )}
    </Formik>
  );
};

export default EditBasicDetails;
