import React from 'react';

import { HeadingXLarge, Heading } from 'components/Typography';
import { Wrapper } from './Contact.styled';

const Contact = () => {
  return (
    <Wrapper>
      <HeadingXLarge>Contact Us</HeadingXLarge>
      <Heading>
        If you would like more information about the Phylogeny Explorer Project,
        please contact one of our admins, or apply to become a member in our
        Facebook group, Phylogeny Explorer Development.
      </Heading>
    </Wrapper>
  );
};

export default Contact;
