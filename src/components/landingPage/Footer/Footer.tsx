import React from 'react';

import SocialIcon from 'components/SocialIcon';
import { Wrapper, Copyright, Icons } from './Footer.styled';

export interface Props {
  copyright: string;
  icons: { id: number; platform: string; url: string }[];
}

const Footer = ({ copyright, icons }: Props) => (
  <Wrapper>
    <Copyright>{copyright}</Copyright>

    <Icons>
      {icons.map(icon => (
        <SocialIcon
          key={icon.id}
          platform={icon.platform}
          onClick={() => window.open(icon.url, '_blank')}
          size={40}
        />
      ))}
    </Icons>
  </Wrapper>
);

export default Footer;
