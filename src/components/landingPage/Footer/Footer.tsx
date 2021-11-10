import React from 'react';

import { SOCIAL } from 'consts';
import SocialIcon, { SocialIconProps } from 'components/SocialIcon';
import { Wrapper, Copyright, Icons } from './Footer.styled';

const Footer = () => {
  const icons: SocialIconProps[] = [
    {
      platform: SOCIAL.FACEBOOK,
      onClick: () =>
        window.open(
          'https://www.facebook.com/groups/phylogenyexplorerdevelopment/',
          '_blank'
        ),
    },
    {
      platform: SOCIAL.TWITTER,
      onClick: () =>
        window.open('https://twitter.com/phylogenyexplo3', '_blank'),
    },
    {
      platform: SOCIAL.LINKEDIN,
      onClick: () =>
        window.open(
          'https://www.linkedin.com/company/phylogeny-explorer-project/',
          '_blank'
        ),
    },
    {
      platform: SOCIAL.YOUTUBE,
      onClick: () =>
        window.open(
          'https://www.youtube.com/playlist?list=PLXJ4dsU0oGMLnubJLPuw0dzD0AvAHAotW',
          '_blank'
        ),
    },
  ];
  return (
    <Wrapper>
      <Copyright>© Phylogeny Explorer Project 2021</Copyright>

      <Icons>
        {icons.map(icon => (
          <SocialIcon key={icon.platform} size={40} {...icon} />
        ))}
      </Icons>
    </Wrapper>
  );
};

export default Footer;
