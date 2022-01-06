import React, { useState } from 'react';
import { send } from 'emailjs-com';
import { toast } from 'react-toastify';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';

import { HeadingXLarge, LargeText } from 'components/Typography';
import Section from '../Section';
import Button from 'components/Button';
import { Form, Field, ButtonWrapper, ErrorMessage } from 'components/Form';
import { Content, Info } from './Contact.styled';

const SERVICE_ID = 'service_096y1mn';
const TEMPLATE_ID = 'template_v1ctwus';
const USER_ID = 'user_lBkWUG1XdnTeZWL2QnHi6';

const Contact = () => {
  const [error, setError] = useState('');

  const validationSchema = Yup.object({
    name: Yup.string().required('Please enter your name'),
    email: Yup.string().email('Invalid email address').required('Required'),
    message: Yup.string().required('Please enter your comments'),
  });

  return (
    <Section background="white">
      <HeadingXLarge>Contact Us</HeadingXLarge>

      <Content>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          onSubmit={(values, { resetForm }) => {
            send(SERVICE_ID, TEMPLATE_ID, values, USER_ID)
              .then(() => {
                toast.success('Email sent.');
                resetForm();
              })
              .catch(error => setError(error.text));
          }}
          validationSchema={validationSchema}
        >
          <Form>
            <Field placeholder="Name" name="name" />
            <Field placeholder="Email" name="email" />
            <Field type="textarea" placeholder="Comments..." name="message" />
            <ButtonWrapper>
              <Button type="submit" text="send" />
              {error && <ErrorMessage>{error}</ErrorMessage>}
            </ButtonWrapper>
          </Form>
        </Formik>
        <Info>
          <LargeText>
            If you would like more information about the Phylogeny Explorer
            Project, please contact one of our admins, or apply to become a
            member in our Facebook group,{' '}
            <a
              href="https://www.facebook.com/groups/phylogenyexplorerdevelopment/"
              target="_blank"
              rel="noreferrer"
            >
              Phylogeny Explorer Development
            </a>
            .
          </LargeText>
          <LargeText>
            <Link href="contributors">Meet the team behind the project</Link>.
          </LargeText>
        </Info>
      </Content>
    </Section>
  );
};

export default Contact;
