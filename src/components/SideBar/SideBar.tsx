import React from 'react';
import { useQuery } from '@apollo/client';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Icon from 'components/Icon';
import { SubtitleSmall, Heading, BodyText } from 'components/Typography';
import Fab from 'components/Fab';
import GET_CLADE from './graphql/get-clade';
import {
  Wrapper,
  Header,
  HeaderIcon,
  Content,
  Section,
  Authority,
  Buttons,
} from './SideBar.styled';

interface Clade {
  id: string;
  name: string;
  parentId: string;
  imageUrl?: string;
  characteristics?: { name: string; value: string }[];
}

interface Props {
  cladeId?: string;
  close: () => void;
}

const SideBar = ({ cladeId, close }: Props) => {
  const router = useRouter();
  console.log({ cladeId });

  const { data, loading } = useQuery(GET_CLADE, {
    variables: { id: cladeId?.slice(3) },
    skip: !cladeId,
  });

  console.log(data);
  const clade: Clade = data?.clade2;

  return (
    <Wrapper isOpen={!!cladeId}>
      <Header>
        <HeaderIcon name="info-circle" size={0.75} />
        <SubtitleSmall>Clade Info</SubtitleSmall>
        <Icon name="left" onClick={close} />
      </Header>
      {loading && 'Loading...'}

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
              onClick={() => router.push(`/clade/edit?cladeId=${clade.id}`)}
            />
            <Fab icon="plus" text="Add" />
            <Fab icon="dots-h" text="More" />
          </Buttons>

          <BodyText>{`ID: ${clade.id}`}</BodyText>
          <BodyText>{`Parent ID: ${clade.parentId}`}</BodyText>
          {clade.characteristics?.map(characteristic => (
            <BodyText
              key={characteristic.name}
            >{`${characteristic.name}: ${characteristic.value}`}</BodyText>
          ))}
        </Content>
      )}
    </Wrapper>
  );
};

export default SideBar;
