import React from 'react';

import { HeadingXLarge, LargeText } from 'components/Typography';
import { Wrapper } from './Contact.styled';

const Contact = () => {
  return (
    <Wrapper>
      <HeadingXLarge>Contact Us</HeadingXLarge>
      <LargeText>
        If you would like more information about the Phylogeny Explorer Project,
        please contact one of our admins, or apply to become a member in our
        Facebook group,{' '}
        <a
          href="https://www.facebook.com/groups/phylogenyexplorerdevelopment/"
          target="_blank"
          rel="noreferrer"
        >
          Phylogeny Explorer Development
        </a>
        .
      </LargeText>
    </Wrapper>
  );
};

export default Contact;
