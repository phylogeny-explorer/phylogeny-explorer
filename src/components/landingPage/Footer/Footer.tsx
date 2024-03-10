import React from 'react';
import SocialIcon, { SocialIconProps } from 'components/SocialIcon';
import { Wrapper, Copyright, Icons } from './Footer.styled';

export interface Props {
  copyright: string;
  icons: SocialIconProps[];
}

const Footer = ({ copyright, icons }: Props) => (
  <Wrapper>
    <Copyright>{copyright}</Copyright>

    <Icons>
      {icons.map(icon => (
        <SocialIcon key={icon.platform} size={40} {...icon} />
      ))}
    </Icons>
  </Wrapper>
);

export default Footer;
