import React from 'react';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

import useUser from 'lib/hooks/useUser';
import Page from 'components/layout/Page';
import PageContent from 'components/layout/PageContent';
import VerticalNav from 'components/layout/VerticalNav';
import GET_CLADE from 'components/CladeInfo/graphql/get-clade';
import Loader from 'components/Loader';
import { BodyText, Heading } from 'components/Typography';
import EditBasicDetails from 'components/clades/EditBasicDetails';

const CladeEdit = () => {
  const { isLoggedIn, isLoadingUser } = useUser({ redirectTo: '/' });

  const router = useRouter();
  const cladeId = router.query.id;
  console.log(cladeId);

  const { data, loading } = useQuery(GET_CLADE, {
    variables: { id: cladeId },
    skip: !cladeId,
  });

  console.log(data);

  if (isLoadingUser || !isLoggedIn) return null;

  return (
    <Page>
      <PageContent>
        {loading && <Loader message="Loading" />}

        {data && (
          <VerticalNav
            heading={data.clade2.name}
            subheading="Edit clade details"
          >
            <VerticalNav.Item
              slug="basic"
              label="Basic"
              info={[
                {
                  heading: 'Basic Details',
                  text: 'Here you can add information about the identity of the clade.',
                },
              ]}
            >
              <EditBasicDetails clade={data.clade2} />
            </VerticalNav.Item>
            <VerticalNav.Item slug="characteristics" label="Characteristics">
              <Heading>Characteristics</Heading>
              <BodyText>Coming soon</BodyText>
            </VerticalNav.Item>
            <VerticalNav.Item slug="relationships" label="Relationships">
              <Heading>Relationships</Heading>
              <BodyText>Coming soon</BodyText>
            </VerticalNav.Item>
          </VerticalNav>
        )}
      </PageContent>
    </Page>
  );
};

export default CladeEdit;
