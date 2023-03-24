import React from 'react';
import { useQuery } from '@apollo/client';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Scrollbars } from 'rc-scrollbars';

import { Clade } from 'lib/types';
import formatAuthorship from 'lib/helpers/formatAuthorship';
import Loader from 'components/Loader';
import Fab from 'components/Fab';
import Grid from 'components/Grid';
import ValueWithPlaceholder from 'components/ValueWithPlaceholder';
import {
  Heading,
  Subtitle,
  HeadingLabel,
  DescriptionText,
} from 'components/Typography';
import CladeDetails from './CladeDetails';
import GET_CLADE from './graphql/get-clade';
import { Content, Section, Buttons, Line } from './CladeInfo.styled';

interface Props {
  cladeId?: string;
}

const CladeInfo = ({ cladeId }: Props) => {
  const router = useRouter();
  console.log({ cladeId });

  const { data, loading } = useQuery<{ clade: Clade }>(GET_CLADE, {
    variables: { id: cladeId },
    skip: !cladeId,
  });

  console.log(data);
  const clade = data?.clade;

  const editLocation = `/clades/${clade?.id}/edit/basic`;
  const goToEditClade = () => router.push(editLocation);

  if (loading)
    return (
      <Content>
        <Loader color="light" message="loading clade" />
      </Content>
    );

  const lineage = [...(clade?.lineage || [])].reverse();

  return (
    <Grid>
      {clade?.imageUrl && (
        <Image
          src={clade.imageUrl}
          alt="clade"
          width="100%"
          height={300}
          objectFit="cover"
        />
      )}
      {clade && (
        <Content>
          <Section>
            <Heading>{clade?.name || ''}</Heading>
            <ValueWithPlaceholder
              name="Authorship"
              editLocation={`/clades/${clade?.id}/edit/basic`}
              colorName="vlgrey"
            >
              {formatAuthorship(clade?.authorship)}
            </ValueWithPlaceholder>
          </Section>
          <Buttons>
            <Fab
              icon="tree-outline"
              text="Tree"
              onClick={() => router.push(`/tree?nodeId=${clade.id}`)}
            />
            <Fab icon="edit" text="Edit" onClick={goToEditClade} />
            <Fab icon="plus" text="Add" disabled />
            <Fab icon="dots-h" text="More" disabled />
          </Buttons>

          <Line />

          <Scrollbars autoHeight autoHeightMax={clade?.imageUrl ? 390 : 690}>
            <Grid gap="lg">
              <CladeDetails clade={clade} />
              <Grid>
                <Subtitle>Clade Relationships</Subtitle>
                <Grid gap="sm">
                  <HeadingLabel>Lineage</HeadingLabel>
                  <Grid gap="sm" pl="md">
                    {lineage
                      .filter(node => !!node.rank)
                      .map(node => (
                        <DescriptionText key={node.id}>
                          {node.name}
                        </DescriptionText>
                      ))}
                  </Grid>
                </Grid>
                {clade.children && (
                  <Grid gap="sm">
                    <HeadingLabel>Children</HeadingLabel>
                    <Grid gap="sm" pl="md">
                      {clade.children?.map(child => (
                        <DescriptionText key={child.id}>
                          {child.name}
                        </DescriptionText>
                      ))}
                    </Grid>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Scrollbars>
        </Content>
      )}
    </Grid>
  );
};

export default CladeInfo;
