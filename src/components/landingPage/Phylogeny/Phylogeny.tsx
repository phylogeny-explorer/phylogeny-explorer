import React from 'react';

import { HeadingXLarge, LargeText } from 'components/Typography';
import Section from '../Section';
import { Info, Image } from './Phylogeny.styled';

export interface Props {
  title: string;
  text: string;
  image: string;
  imgWidth: number;
  imgHeight: number;
}

const Phylogeny = ({ title, text, image, imgWidth, imgHeight }: Props) => (
  <Section background="dprimary" isRow>
    <Info>
      <HeadingXLarge>{title}</HeadingXLarge>
      <LargeText>{text}</LargeText>
    </Info>
    <Image src={image}
      alt=""
      width={imgWidth}
      height={imgHeight}
    />
  </Section>
);

export default Phylogeny;
