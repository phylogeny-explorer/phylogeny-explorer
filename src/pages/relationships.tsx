import React from 'react';
// import { useRouter } from 'next/router';
// import { useQuery } from '@apollo/client';
import styled from 'styled-components';

// import MRCA from 'lib/graphql/mrca';
import useUser from 'lib/hooks/useUser';
import Page from 'components/layout/Page';
// import Search from 'components/Search';
// import Button from 'components/Button';
import Card from 'components/Card';
import { HeadingLarge } from 'components/Typography';
import backgroundImage from '../../public/images/feature_relationships.png';

interface Props {
  backgroundImage?: string;
}

const Wrapper = styled.div<Props>`
  display: grid;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  grid-gap: ${props => props.theme.xLargeSpacer}px;
  padding: ${props => props.theme.xLargeSpacer}px;
  justify-content: center;
  align-items: start;
`;

const Relationships = () => {
  const { isLoggedIn, isLoadingUser } = useUser({ redirectTo: '/' });
  // const { nodeId } = useRouter().query;

  // const [clade1, setClade1] = useState(nodeId);
  // const [clade2, setClade2] = useState('');
  // const [skip, setSkip] = useState(true);

  // const { loading, data } = useQuery(MRCA, {
  //   skip,
  //   variables: { clade1, clade2 },
  // });

  if (isLoadingUser || !isLoggedIn) return null;

  return (
    <Page>
      <Wrapper backgroundImage={backgroundImage.src}>
        <Card>
          <HeadingLarge>Under Construction</HeadingLarge>
        </Card>
        {/* <Search value={clade1} handleSelect={id => setClade1(id)} isContained />
        <Search value={clade2} handleSelect={id => setClade2(id)} isContained />
        <Button
          text="search for common ancestor"
          loading={loading}
          disabled={!(clade1 && clade2)}
          onClick={() => setSkip(false)}
        />
        {data && <HeadingLarge>{data.mrca.name}</HeadingLarge>} */}
      </Wrapper>
    </Page>
  );
};

export default Relationships;
