import React from 'react';
import { Formik } from 'formik';
import { isEqual, isEmpty } from 'lodash';

import { Clade } from 'lib/types';
import ranks from 'lib/config/ranks.json';
import formatAuthorship from 'lib/helpers/formatAuthorship';
import { Form } from 'components/Form';
import Field from 'components/Field';
import Source from 'components/Source';
import FieldArray from 'components/FieldArray';
import Card from 'components/Card';
import FieldGroup from 'components/FieldGroup';
import Select from 'components/Select';
import Checkbox from 'components/Checkbox';
import Grid from 'components/Grid';
import { BodyText, HeadingSmall } from 'components/Typography';
import Button from 'components/Button';

const getChangedValues = (values, initialValues) => {
  return Object.entries(values).reduce((acc, [key, value]) => {
    if (!isEqual(initialValues[key], value)) {
      acc[key] = value;
    }
    return acc;
  }, {});
};

interface Props {
  clade: Clade;
  onSubmit: (values: Partial<Clade>) => void;
}

const EditBasicDetails = ({ clade, onSubmit }: Props) => {
  const status = clade.extant === false ? 'extinct' : undefined;
  const initialValues = {
    scientificName: clade.name || '',
    synonyms: clade.synonyms || [''],
    commonNames: clade.commonNames || [''],
    rank: clade.rank || '',
    status: clade.extant ? 'extant' : status,
    authorship: {
      name: clade.authorship?.name || '',
      year: clade.authorship?.year || '',
      isOriginalAuthor: clade.authorship?.isOriginalAuthor || false,
      source: clade.authorship?.sources?.[0] || '',
    },
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        const changedValues = getChangedValues(values, initialValues);
        onSubmit({
          ...changedValues,
          name: values.scientificName,
          extant:
            values.status === undefined
              ? undefined
              : values.status === 'extant',
        });
      }}
    >
      {({ values, handleReset }) => (
        <Form $justifyEnd>
          <Grid w="100%">
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
                <HeadingSmall>Authorship</HeadingSmall>
                <Source name="citation" source="" />
              </Grid>
              <Grid autoFlow="column">
                <Field
                  name="authorship.name"
                  label="name"
                  placeholder="First name on paper"
                />
                <Field
                  name="authorship.year"
                  label="year"
                  placeholder="Paper publish year"
                  type="number"
                  min={1753}
                  max={new Date().getFullYear()}
                />
              </Grid>
              {(!values.rank || values.rank === 'species') && (
                <Field
                  name="authorship.isOriginalAuthor"
                  label="Include original author in parentheses"
                  type="checkbox"
                />
              )}
              <BodyText>
                <strong>Will display as: </strong>
                <em>{`${values.scientificName} `}</em>
                {formatAuthorship(values.authorship)}
              </BodyText>
            </Card>
          </Grid>
          <Grid autoFlow="column">
            <Button
              onClick={handleReset}
              text="Reset"
              squishy
              dark
              disabled={isEmpty(getChangedValues(values, initialValues))}
            />
            <Button
              type="submit"
              text="Save"
              squishy
              disabled={isEmpty(getChangedValues(values, initialValues))}
            />
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default EditBasicDetails;
