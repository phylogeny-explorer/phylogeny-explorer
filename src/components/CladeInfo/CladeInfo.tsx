import React from 'react';
import { useQuery } from '@apollo/client';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Clade } from 'lib/types';
import Loader from 'components/Loader';
import Fab from 'components/Fab';
import { Heading, BodyText } from 'components/Typography';
import GET_CLADE from './graphql/get-clade';
import { Content, Section, Authority, Buttons } from './CladeInfo.styled';

interface Props {
  cladeId?: string;
}

const CladeInfo = ({ cladeId }: Props) => {
  const router = useRouter();
  console.log({ cladeId });

  const { data, loading } = useQuery<{ clade2: Clade }>(GET_CLADE, {
    variables: { id: cladeId?.slice(3) },
    skip: !cladeId,
  });

  console.log(data);
  const clade = data?.clade2;

  if (loading)
    return (
      <Content>
        <Loader color="light" message="loading clade" />
      </Content>
    );

  return (
    <>
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
            <Authority>Name, Year</Authority>
          </Section>
          <Buttons>
            <Fab
              icon="tree-outline"
              text="Tree"
              onClick={() => router.push(`/tree?nodeId=ott${clade.id}`)}
            />
            <Fab
              icon="edit"
              text="Edit"
              onClick={() => router.push(`/clades/${clade.id}/edit/basic`)}
            />
            <Fab icon="plus" text="Add" disabled />
            <Fab icon="dots-h" text="More" disabled />
          </Buttons>

          <BodyText>{`ID: ${clade.id}`}</BodyText>
          <BodyText>{`Parent ID: ${clade.parentId}`}</BodyText>
          {/* {clade.characteristics?.map(characteristic => (
            <BodyText
              key={characteristic.name}
            >{`${characteristic.name}: ${characteristic.value}`}</BodyText>
          ))} */}
          <BodyText>~ Under construction ~</BodyText>
        </Content>
      )}
    </>
  );
};

export default CladeInfo;
