import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Auth } from 'aws-amplify';

import backgroundImage from 'images/background-signup.jpg';
import Page from 'components/Page';
import { Wrapper, Text, NativeForm } from 'components/Form';
import { Heading } from 'components/Typography';
import Button from 'components/Button';

import { CodeInput } from './ConfirmEmail.styled';

const ConfirmEmail = () => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { email } = useParams();

  const onSubmit = e => {
    e.preventDefault();
    setLoading(true);

    Auth.confirmSignUp(email, code)
      .then(() => {
        toast.success('Succesfully confirmed!');
        history.push('/login');
      })
      .catch(err => {
        toast.error(err.message);
        setLoading(false);
      });
  };

  return (
    <Page backgroundImage={backgroundImage}>
      <Wrapper>
        <Heading>Confirm Email</Heading>

        <Text>We&apos;ve sent a six­ digit confirmation code</Text>

        <NativeForm onSubmit={onSubmit}>
          <CodeInput
            name="code"
            inputMode="numeric"
            type="number"
            fields={6}
            onChange={setCode}
            value={code}
          />

          <Button loading={loading} type="submit" text="Confirm Email" />
        </NativeForm>
      </Wrapper>
    </Page>
  );
};

export default ConfirmEmail;
