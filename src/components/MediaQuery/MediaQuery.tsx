import React, { PropsWithChildren } from 'react';
import { useMediaQuery } from 'react-responsive';

const MOBILE_BREAKPOINT = 600;

interface ShowIfDesktopProps {
  minWidth?: number;
}

export const ShowIfDesktop = ({
  minWidth,
  children,
}: PropsWithChildren<ShowIfDesktopProps>) => {
  const isDesktop = useMediaQuery({ minWidth: minWidth || MOBILE_BREAKPOINT });
  return <>{isDesktop ? children : null}</>;
};

interface ShowIfMobileProps {
  maxWidth?: number;
}

export const ShowIfMobile = ({
  maxWidth,
  children,
}: PropsWithChildren<ShowIfMobileProps>) => {
  const isMobile = useMediaQuery({ maxWidth: maxWidth || MOBILE_BREAKPOINT });
  return <>{isMobile ? children : null}</>;
};
