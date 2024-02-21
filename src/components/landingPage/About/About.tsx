import React from 'react';
import Image, { StaticImageData } from 'next/image';

import { MediaItems } from 'lib/types';
import { HeadingXLarge, LargeText } from 'components/Typography';
import Section from '../Section';
import { Images } from './About.styled';

export interface Props {
  title: string;
  text: string;
  images: string[];
}

const About = ({ title, text, images }: Props) => (
  <Section background="dsecondary">
    <HeadingXLarge>{title}</HeadingXLarge>
    <LargeText>{text}</LargeText>
    <Images>
      {images.map((image, i) => (
        <Image
          key={i}
          src={image}
          alt=""
          width={1440}
          height={914}
        />
      ))}
    </Images>
  </Section>
);

export default About;
