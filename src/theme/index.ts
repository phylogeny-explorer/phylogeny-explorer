import { DefaultTheme } from 'styled-components';
import { COLOURS } from 'consts';

const theme: DefaultTheme = {
  // Spacers
  spacer: 8,
  smallSpacer: 4,
  largeSpacer: 16,
  xLargeSpacer: 32,
  xxLargeSpacer: 64,

  spacers: {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 32,
    xxl: 64,
  },

  // Radius
  borderRadius: 4,

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
  error: COLOURS.error,
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

  // Shadows
  shadow: `1px 2px 4px rgba(0, 0, 0, 0.12)`,
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
