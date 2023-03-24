import React from 'react';

import { Clade } from 'lib/types';
import Grid from 'components/Grid';
import ValueWithPlaceholder from 'components/ValueWithPlaceholder';
import { Subtitle, HeadingLabel, SmallText } from 'components/Typography';
import { capitalize } from 'lodash';

interface DetailProps {
  name: string;
  value?: string;
  cladeId: string;
}

const Detail = ({ name, value, cladeId }: DetailProps) => (
  <>
    <HeadingLabel as="dt">{name}</HeadingLabel>
    <ValueWithPlaceholder
      as="dd"
      name={name}
      editLocation={`/clades/${cladeId}/edit/basic`}
      isShort
    >
      {value}
    </ValueWithPlaceholder>
  </>
);

interface Props {
  clade: Clade;
}

const CladeDetails = ({ clade }: Props) => {
  return (
    <Grid>
      <Subtitle>Clade Details</Subtitle>
      <Grid
        as="dl"
        gap="sm"
        colGap="lg"
        templateCols="max-content 1fr"
        ai="center"
      >
        <HeadingLabel as="dt">ID</HeadingLabel>
        <SmallText as="dd">{clade.id}</SmallText>

        <HeadingLabel as="dt">Parent ID</HeadingLabel>
        <SmallText as="dd">{clade.parentId}</SmallText>

        <Detail
          name="Common Name"
          value={clade.commonNames?.[0]}
          cladeId={clade.id}
        />

        <Detail name="Rank" value={capitalize(clade.rank)} cladeId={clade.id} />

        <HeadingLabel as="dt">Status</HeadingLabel>
        <SmallText as="dd">{clade.extant ? 'Extant' : 'Extinct'}</SmallText>
      </Grid>
    </Grid>
  );
};

export default CladeDetails;
