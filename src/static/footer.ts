import { SOCIAL } from 'consts';
import { SocialIconProps } from 'components/SocialIcon';

export const iconsContent: SocialIconProps[] = [
  {
    platform: SOCIAL.FACEBOOK,
    url: 'https://www.facebook.com/groups/phylogenyexplorerdevelopment/',
  },
  {
    platform: SOCIAL.TWITTER,
    url: 'https://twitter.com/phylogenyexplo3',
  },
  {
    platform: SOCIAL.LINKEDIN,
    url: 'https://www.linkedin.com/company/phylogeny-explorer-project/',
  },
  {
    platform: SOCIAL.YOUTUBE,
    url: 'https://www.youtube.com/playlist?list=PLXJ4dsU0oGMLnubJLPuw0dzD0AvAHAotW',
  },
];

export const footerContent = {
  copyright: '© Phylogeny Explorer Project 2024',
  icons: iconsContent,
};
