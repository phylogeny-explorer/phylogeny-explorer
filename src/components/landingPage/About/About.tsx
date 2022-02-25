import React from 'react';
import Image from 'next/image';

import { MediaItems } from 'lib/types';
import { HeadingXLarge, LargeText } from 'components/Typography';
import Section from '../Section';
import { Images } from './About.styled';
import { getStrapiMedia } from 'lib/api/strapi';

export interface Props {
  title: string;
  text: string;
  images: MediaItems;
}

const About = ({ title, text, images }: Props) => (
  <Section background="dsecondary">
    <HeadingXLarge>{title}</HeadingXLarge>
    <LargeText>{text}</LargeText>
    <Images>
      {images.data.map(image => (
        <Image
          key={image.id}
          src={getStrapiMedia(image)}
          alt=""
          width={1440}
          height={914}
        />
      ))}
    </Images>
  </Section>
);

export default About;
