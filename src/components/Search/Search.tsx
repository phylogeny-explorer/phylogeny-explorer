import React, { useState, InputHTMLAttributes } from 'react';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

import { HeadingSmall, BodyText } from 'components/Typography';

import SEARCH from './graphql/search';
import { Wrapper, Input, Results, Result } from './Search.styled';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  initialValue?: string;
  isContained?: boolean;
  handleSelect?: (id: string) => void;
}

const Search = ({ initialValue = '', handleSelect, isContained }: Props) => {
  const router = useRouter();
  const [showResults, setShowResults] = useState(false);
  const [value, setValue] = useState(initialValue);
  const { loading, data } = useQuery(SEARCH, {
    skip: !value,
    variables: { value },
  });

  const results = data?.search2 || [];

  return (
    <Wrapper>
      <Input
        placeholder="Search for clade"
        value={value}
        onChange={e => {
          setShowResults(e.target.value.length > 0);
          return setValue(e.target.value);
        }}
        isContained={isContained}
      />
      {loading || showResults ? (
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
                setShowResults(false);
                if (handleSelect) {
                  handleSelect(result.id);
                } else {
                  setValue('');
                  router.push({
                    pathname: '/tree',
                    query: { nodeId: result.id },
                  });
                }
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

export default Search;
