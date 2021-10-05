import React from 'react';
import { useQuery } from '@apollo/client';
import Icon from 'components/Icon';
import { SubtitleSmall, Heading } from 'components/Typography';
import Fab from 'components/Fab';
import GET_CLADE from './graphql/get-clade';
import {
  Wrapper,
  Header,
  HeaderIcon,
  Image,
  Content,
  Section,
  Authority,
  Buttons,
} from './SideBar.styled';

interface Props {
  cladeId: string;
  close: () => void;
}

const SideBar = ({ cladeId, close }: Props) => {
  console.log({ cladeId });

  const { data } = useQuery(GET_CLADE, {
    variables: { id: cladeId.substr(3) },
  });

  console.log(data);
  const clade = data?.clade;

  return (
    <Wrapper>
      <Header>
        <HeaderIcon name="info-circle" size={0.75} />
        <SubtitleSmall>Clade Info</SubtitleSmall>
        <Icon name="left" onClick={close} />
      </Header>
      {clade?.imageUrl && <Image src={clade.imageUrl} alt="clade" />}
      <Content>
        <Section>
          <Heading>{clade?.name || ''}</Heading>
          <Authority>Name, Year</Authority>
        </Section>
        <Buttons>
          <Fab icon="tree-outline" text="Tree" />
          <Fab icon="edit" text="Edit" />
          <Fab icon="plus" text="Add" />
          <Fab icon="dots-h" text="More" />
        </Buttons>
        {`Id: ${cladeId}`}
      </Content>
    </Wrapper>
  );
};

export default SideBar;
