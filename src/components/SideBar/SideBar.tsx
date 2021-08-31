import React from 'react';
import Icon from 'components/Icon';
import { SubtitleSmall, Heading } from 'components/Typography';
import Fab from 'components/Fab';
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
  return (
    <Wrapper>
      <Header>
        <HeaderIcon name="info-circle" size={0.75} />
        <SubtitleSmall>Clade Info</SubtitleSmall>
        <Icon name="left" onClick={close} />
      </Header>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Bird_Diversity_2013.png/800px-Bird_Diversity_2013.png"
        alt="clade"
      />
      <Content>
        <Section>
          <Heading>Clade name</Heading>
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
