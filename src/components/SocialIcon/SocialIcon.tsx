import React from 'react';
import { SOCIAL, COLOURS } from 'consts';

import {
  IconFacebook,
  IconGithub,
  IconGoogle,
  IconGooglePlay,
  IconInstagram,
  IconItunesStore,
  IconLinkedin,
  IconReddit,
  IconTiktok,
  IconTwitter,
  IconYoutube,
} from './icons';

import { Tile, ClickWrapper } from './SocialIcon.styled';

export interface SocialIconProps {
  platform?: string;
  variant?: 'circle' | 'square' | 'colour' | 'outline';
  size?: number;
  color?: string;
  onClick?: () => void;
  url?: string;
}

const SocialIcon = ({
  platform = 'beatchain',
  variant = 'outline',
  size = 24,
  onClick,
  url,
  ...props
}: SocialIconProps) => {
  const icons = {
    [SOCIAL.FACEBOOK]: IconFacebook,
    [SOCIAL.GITHUB]: IconGithub,
    [SOCIAL.GOOGLE]: IconGoogle,
    [SOCIAL.GOOGLE_PLAY]: IconGooglePlay,
    [SOCIAL.INSTAGRAM]: IconInstagram,
    [SOCIAL.ITUNES_STORE]: IconItunesStore,
    [SOCIAL.LINKEDIN]: IconLinkedin,
    [SOCIAL.REDDIT]: IconReddit,
    [SOCIAL.TIKTOK]: IconTiktok,
    [SOCIAL.TWITTER]: IconTwitter,
    [SOCIAL.YOUTUBE]: IconYoutube,
  };

  const SVG = icons[platform] || icons[SOCIAL.FACEBOOK];

  const tileSize =
    platform === SOCIAL.LINKEDIN ||
    (variant === 'circle' &&
      (platform === SOCIAL.INSTAGRAM || platform === SOCIAL.ITUNES_STORE))
      ? '60%'
      : '66%';

  const Icon =
    variant === 'square' || variant === 'circle' ? (
      <Tile size={size} color={COLOURS[platform]} shape={variant} {...props}>
        <SVG width={tileSize} height={tileSize} tiled="true" color="#fff" />
      </Tile>
    ) : (
      <SVG
        isColour={variant === 'colour'}
        width={size}
        height={size}
        {...props}
      />
    );

  if (url)
    return (
      <ClickWrapper as="a" target="_blank" href={url}>
        {Icon}
      </ClickWrapper>
    );

  return onClick ? <ClickWrapper onClick={onClick}>{Icon}</ClickWrapper> : Icon;
};

export default SocialIcon;
