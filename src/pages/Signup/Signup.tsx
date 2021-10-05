import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Auth } from 'aws-amplify';
import { toast } from 'react-toastify';

import backgroundImage from 'images/background-signup.jpg';
import Page from 'components/Page';
import PageHeader from 'components/PageHeader';
import Button from 'components/Button';
// import SocialButton from 'components/SocialButton';
import { Heading } from 'components/Typography';
import {
  Wrapper,
  Form,
  Header,
  Text,
  Field,
  ButtonWrapper,
  ErrorMessage,
} from 'components/Form';

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const onSubmit = ({ email, password }) => {
    setLoading(true);

    Auth.signUp({
      username: email,
      password,
      attributes: {
        email,
      },
    })
      .then(() => {
        toast.success('Check your email for confirmation link.');
        router.push({
          pathname: '/login',
          query: { email, password },
        });
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .required('Please enter your password')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
        'Password must contain at least 8 characters, one uppercase and one number'
      ),
    confirmPassword: Yup.string()
      .required('Please confirm your password')
      .when('password', {
        is: password => !!(password && password.length > 0),
        then: Yup.string().oneOf(
          [Yup.ref('password')],
          "Password doesn't match"
        ),
      }),
  });

  return (
    <Page backgroundImage={backgroundImage.src}>
      <PageHeader />
      <Wrapper>
        <Header>
          <Heading>Sign up</Heading>
          <Text>
            {'or '}
            <Link href="/login">log in in to your account</Link>
          </Text>
        </Header>

        {/* <SocialButton platform="facebook" text="Sign up with Facebook" />
        <SocialButton platform="google" text="Sign up with Google" />

        <Text>or</Text> */}

        <Formik
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
          }}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {() => (
            <Form>
              <Field
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email"
              />
              <Field
                name="password"
                type="password"
                autoComplete="new-password"
                placeholder="Password"
              />
              <Field
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                placeholder="Confirm Password"
              />

              <ButtonWrapper>
                <Button type="submit" loading={loading} text="Sign up" />
                {error && <ErrorMessage>{error}</ErrorMessage>}
              </ButtonWrapper>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </Page>
  );
};

export default Signup;
