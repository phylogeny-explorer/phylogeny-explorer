import React from 'react';
import { useRouter } from 'next/router';

import Icon from 'components/Icon';

import { Wrapper, LargeTitle, Title } from './NavItem.styled';

interface Props {
  name: string;
  isMobile?: boolean;
}

const NavItem = ({ name, isMobile }: Props) => {
  const router = useRouter();
  const { nodeId } = router.query;
  const titles = {
    tree: 'Cladogram',
    relationships: 'Relationships',
    wiki: 'Wiki',
  };
  return (
    <Wrapper
      onClick={() =>
        router.push({ pathname: `/${name}`, query: nodeId ? { nodeId } : null })
      }
    >
      <Icon name={name} />
      {isMobile ? (
        <LargeTitle>{titles[name]}</LargeTitle>
      ) : (
        <Title>{titles[name]}</Title>
      )}
    </Wrapper>
  );
};

export default NavItem;
