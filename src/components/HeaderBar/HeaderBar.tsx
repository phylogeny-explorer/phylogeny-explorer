import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import Logo from '../Logo';
import Input from '../Input';
import { HeadingSmall, BodyText } from '../Typography';

import SEARCH from './graphql/search';
import { Wrapper, Results, Result } from './HeaderBar.styled';

const HeaderBar = () => {
  const [value, setValue] = useState('');
  const { loading, error, data, refetch } = useQuery(SEARCH, {
    skip: !value,
    variables: { value },
  });

  const results = (data && data.search) || [];

  const history = useHistory();

  console.log({ loading, error, data, refetch });
  return (
    <Wrapper>
      <Logo />
      <Input
        placeholder="Search for clade"
        value={value}
        handleChange={setValue}
      />
      {loading || results.length ? (
        <Results>
          {loading && (
            <Result>
              <BodyText>Loading...</BodyText>
            </Result>
          )}
          {results.map(result => (
            <Result
              key={result.id}
              onClick={() => {
                setValue('');
                history.push(`/${result.id}`);
              }}
            >
              <HeadingSmall>{result.name}</HeadingSmall>
            </Result>
          ))}
        </Results>
      ) : null}
    </Wrapper>
  );
};

export default HeaderBar;
