import React, { useState, useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Auth } from 'aws-amplify';
import jwt from 'jsonwebtoken';

import backgroundImage from 'images/background-login.jpg';
import { LoginContext } from 'context/LoginContext';
import Page from 'components/Page';
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
import PageHeader from 'components/PageHeader';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();
  const query = new URLSearchParams(useLocation().search);

  const { setItem } = useContext(LoginContext);

  const onSubmit = ({ email, password }) => {
    setError('');
    setLoading(true);

    Auth.signIn(email, password)
      .then(user => {
        const token = user.signInUserSession.accessToken.jwtToken;
        const decoded = jwt.decode(token);

        if (decoded['cognito:groups']?.includes('viewers')) {
          setItem(token);
          history.push('/');
        } else {
          throw new Error(
            'User is not approved to view. Contact dev team for beta access.'
          );
        }
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Please enter your password'),
  });

  return (
    <Page backgroundImage={backgroundImage}>
      <PageHeader />
      <Wrapper>
        <Header>
          <Heading>Log in</Heading>
          <Text>
            {'or '}
            <Link to="/signup">sign up for an account</Link>
          </Text>
        </Header>

        {/* <SocialButton platform="facebook" text="Log in with Facebook" />
        <SocialButton platform="google" text="Log in with Google" />

        <Text>or</Text> */}

        <Formik
          initialValues={{
            email: query.get('email') || '',
            password: query.get('password') || '',
          }}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
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
              autoComplete="password"
              placeholder="Password"
            />

            <ButtonWrapper>
              <Button type="submit" loading={loading} text="Log in" />
              {error && <ErrorMessage>{error}</ErrorMessage>}
            </ButtonWrapper>
          </Form>
        </Formik>
        <Text>
          <Link to="/forgot-password">Forgot your password?</Link>
        </Text>
      </Wrapper>
    </Page>
  );
};

export default Login;
