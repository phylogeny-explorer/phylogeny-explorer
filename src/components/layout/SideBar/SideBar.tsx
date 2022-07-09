import React, { ReactNode } from 'react';

import Icon from 'components/Icon';
import { SubtitleSmall } from 'components/Typography';
import { Wrapper, Header, HeaderIcon } from './SideBar.styled';

interface Props {
  title: string;
  icon?: string;
  isOpen?: boolean;
  toggleIsOpen: () => void;
  children: ReactNode;
}

const SideBar = ({ isOpen, title, icon, toggleIsOpen, children }: Props) => (
  <Wrapper isOpen={isOpen}>
    <Header>
      {isOpen && (
        <>
          <HeaderIcon name={icon || 'info-circle'} size={0.75} />
          <SubtitleSmall>{title}</SubtitleSmall>
        </>
      )}
      <Icon name={isOpen ? 'left' : 'right'} onClick={toggleIsOpen} />
    </Header>

    {isOpen && children}
  </Wrapper>
);

export default SideBar;
