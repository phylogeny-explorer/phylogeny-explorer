import React, { FC } from 'react';
import { useMediaQuery } from 'react-responsive';

const MOBILE_BREAKPOINT = 600;

interface ShowIfDesktopProps {
  minWidth?: number;
}

export const ShowIfDesktop: FC<ShowIfDesktopProps> = ({
  minWidth,
  children,
}) => {
  const isDesktop = useMediaQuery({ minWidth: minWidth || MOBILE_BREAKPOINT });
  return <>{isDesktop ? children : null}</>;
};

interface ShowIfMobileProps {
  maxWidth?: number;
}

export const ShowIfMobile: FC<ShowIfMobileProps> = ({ maxWidth, children }) => {
  const isMobile = useMediaQuery({ maxWidth: maxWidth || MOBILE_BREAKPOINT });
  return <>{isMobile ? children : null}</>;
};
