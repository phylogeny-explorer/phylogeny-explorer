import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

import { Clade } from 'lib/types';
import useUser from 'lib/hooks/useUser';
import Page from 'components/layout/Page';
import PageContent from 'components/layout/PageContent';
import VerticalNav from 'components/layout/VerticalNav';
import GET_CLADE from 'components/CladeInfo/graphql/get-clade';
import UPDATE_CLADE from 'components/CladeInfo/graphql/update-clade';
import Loader from 'components/Loader';
import { BodyText, Heading } from 'components/Typography';
import EditBasicDetails from 'components/clades/EditBasicDetails';
import EditImages from 'components/clades/EditImages';

const CladeEdit = () => {
  const { isLoggedIn, isLoadingUser } = useUser({ redirectTo: '/' });

  const router = useRouter();
  const cladeId = router.query.id;
  console.log(cladeId);

  const { data, loading } = useQuery<{ clade: Clade }>(GET_CLADE, {
    variables: { id: cladeId },
    skip: !cladeId,
  });

  const [mutateClade] = useMutation(UPDATE_CLADE, {
    onCompleted: res => {
      console.log('onCompleted');
      console.log(res);
    },
    refetchQueries: ['getClade'],
  });

  const onSubmit = (data: Partial<Clade>) => {
    console.log('onSubmit', data);
    mutateClade({ variables: { id: cladeId, data } });
  };

  console.log(data);

  if (isLoadingUser || !isLoggedIn) return null;

  return (
    <Page>
      <PageContent>
        {loading && <Loader message="Loading" />}

        {data && (
          <VerticalNav
            heading={data.clade.name}
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
              <EditBasicDetails clade={data.clade} onSubmit={onSubmit} />
            </VerticalNav.Item>
            <VerticalNav.Item
              slug="images"
              label="Images"
              info={[
                {
                  heading: 'Cover Image',
                  text: 'Here you can choose an image to represent the clade.',
                },
              ]}
            >
              <EditImages clade={data.clade} onSubmit={onSubmit} />
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
