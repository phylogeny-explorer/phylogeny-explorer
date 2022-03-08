import 'styled-components';

declare module 'styled-components' {
  declare interface DefaultTheme {
    // Spacers
    spacer: number;
    smallSpacer: number;
    largeSpacer: number;
    xLargeSpacer: number;
    xxLargeSpacer: number;

    // Radius
    borderRadius: number;

    // Colors
    background: string;
    foreground: string;
    primary: string;
    dprimary: string;
    lprimary: string;
    secondary: string;
    dsecondary: string;
    lsecondary: string;
    success: string;
    warning: string;
    white: string;
    offWhite: string;
    vvlgrey: string;
    vlgrey: string;
    lgrey: string;
    grey: string;
    dgrey: string;
    vdgrey: string;
    vvdgrey: string;
    offBlack: string;
    black: string;

    // Shadows
    shadow: string;
    darkShadow: string;

    // Sizes
    iconSize: number;
    topBarHeight: number;
    buttonHeight: number;
    buttonHeightSmall: number;
    buttonMinWidth: number;
    buttonMinWidthSmall: number;
    sidebarWidth: number;
  }
}
