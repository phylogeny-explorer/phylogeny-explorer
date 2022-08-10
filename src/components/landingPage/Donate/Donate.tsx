import React from 'react';
import Script from 'next/script';

import Grid from 'components/Grid';
import { HeadingXLarge, LargeText } from 'components/Typography';
import Section from '../Section';

interface IframeAPRProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  allowpaymentrequest?: string;
}

const IframeAPR = (props: IframeAPRProps) => <iframe {...props} />;

export interface Props {
  title: string;
  text: string;
}

const Donate = ({ title, text }: Props) => (
  <Section background="secondary" isRow id="donate">
    <Script src="https://donorbox.org/widget.js" />
    <Grid ac="start">
      <HeadingXLarge>{title}</HeadingXLarge>
      <LargeText>{text}</LargeText>
    </Grid>
    <IframeAPR
      src="https://donorbox.org/embed/phylogeny-explorer-project-3"
      name="donorbox"
      allowpaymentrequest="true"
      seamless
      frameBorder="0"
      scrolling="no"
      height="576px"
      width="100%"
      style={{ maxWidth: 500, minWidth: 400, maxHeight: 'none!important' }}
    ></IframeAPR>
  </Section>
);

export default Donate;
