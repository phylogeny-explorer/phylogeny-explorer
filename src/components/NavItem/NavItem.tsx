import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Icon from 'components/Icon';

import { Wrapper, Title } from './NavItem.styled';

const NavItem = ({ name }) => {
  const { nodeId } = useParams<{ nodeId: string }>();
  const history = useHistory();
  const titles = {
    tree: 'Cladogram',
    relationships: 'Relationships',
    wiki: 'Wiki',
  };
  return (
    <Wrapper
      onClick={() => history.push(`/${name}${nodeId ? `/${nodeId}` : ''}`)}
    >
      <Icon name={name} />
      <Title>{titles[name]}</Title>
    </Wrapper>
  );
};

export default NavItem;
