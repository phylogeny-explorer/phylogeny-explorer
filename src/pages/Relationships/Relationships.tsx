import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Page from 'components/Page';
import NavBar from 'components/NavBar';
import Search from 'components/Search';
import Button from 'components/Button';
import { HeadingLarge } from 'components/Typography';

import { Wrapper } from './Relationships.styled';
import MRCA from './graphql/mrca';

const Relationships = () => {
  const { nodeId } = useParams<{ nodeId: string }>();

  const [clade1, setClade1] = useState(nodeId);
  const [clade2, setClade2] = useState('');
  const [skip, setSkip] = useState(true);

  const { loading, data } = useQuery(MRCA, {
    skip,
    variables: { clade1, clade2 },
  });

  return (
    <Page>
      <NavBar />
      <Wrapper>
        <HeadingLarge>Most Recent Common Ancestor</HeadingLarge>
        <Search value={clade1} handleSelect={id => setClade1(id)} isContained />
        <Search value={clade2} handleSelect={id => setClade2(id)} isContained />
        <Button
          text="search for common ancestor"
          loading={loading}
          disabled={!(clade1 && clade2)}
          onClick={() => setSkip(false)}
        />
        {data && <HeadingLarge>{data.mrca.name}</HeadingLarge>}
      </Wrapper>
    </Page>
  );
};

export default Relationships;
