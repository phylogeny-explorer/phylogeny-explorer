import { COLOURS, SOCIAL } from 'consts';

const theme = {
  // Spacers
  spacer: 8,
  smallSpacer: 4,
  largeSpacer: 16,
  xLargeSpacer: 32,

  // Radius
  borderRadius: 3,

  // Colors
  background: COLOURS.white,
  foreground: COLOURS.black,
  primary: COLOURS.primary,
  dprimary: COLOURS.dprimary,
  lprimary: COLOURS.lprimary,
  secondary: COLOURS.secondary,
  dsecondary: COLOURS.dsecondary,
  lsecondary: COLOURS.lsecondary,
  warning: COLOURS.warning,
  success: COLOURS.success,
  white: COLOURS.white,
  offWhite: COLOURS.offWhite,
  vvlgrey: COLOURS.vvlgrey,
  vlgrey: COLOURS.vlgrey,
  lgrey: COLOURS.lgrey,
  grey: COLOURS.grey,
  dgrey: COLOURS.dgrey,
  vdgrey: COLOURS.vdgrey,
  vvdgrey: COLOURS.vvdgrey,
  offBlack: COLOURS.offBlack,
  black: COLOURS.black,
  facebookBlue: COLOURS[SOCIAL.FACEBOOK],
  twitterBlue: COLOURS[SOCIAL.TWITTER],
  instagramPink: COLOURS[SOCIAL.INSTAGRAM],

  // Shadows
  shadows: `1px 2px 4px rgba(0, 0, 0, 0.12)`,
  darkShadow: `0px 0px ${16}px rgba(0, 0, 0, 0.6)`,

  // Sizes
  iconSize: 24,
  topBarHeight: 60,
  buttonHeight: 36,
  buttonHeightSmall: 24,
  buttonMinWidth: 160,
  buttonMinWidthSmall: 90,
  sidebarWidth: 416,
};

export default theme;
