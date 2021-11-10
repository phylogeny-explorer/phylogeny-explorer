import React from 'react';
import { useRouter } from 'next/router';

import Icon from 'components/Icon';

import { Wrapper, Title } from './NavItem.styled';

const NavItem = ({ name }) => {
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
      <Title>{titles[name]}</Title>
    </Wrapper>
  );
};

export default NavItem;
