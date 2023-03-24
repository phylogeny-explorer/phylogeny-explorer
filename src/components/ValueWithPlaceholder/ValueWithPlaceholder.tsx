import React from 'react';
import Link from 'next/link';
import { Colors } from 'lib/types';
import { SmallText } from 'components/Typography';
import { StyledLink } from './ValueWithPlaceholder.styled';

interface Props {
  name: string;
  children?: string;
  editLocation: string;
  isShort?: boolean;
  colorName?: Colors;
  as?: React.ElementType;
}

const ValueWithPlaceholder = ({
  name,
  children,
  editLocation,
  isShort,
  colorName,
  as,
}: Props) => {
  return (
    <SmallText colorName={colorName} as={as}>
      {children}
      {!children && isShort && (
        <Link href={editLocation} passHref>
          <StyledLink>{`Set ${name}`}</StyledLink>
        </Link>
      )}
      {!children && !isShort && (
        <span>
          {`No ${name} set. `}
          <Link href={editLocation} passHref>
            <StyledLink href={editLocation}>Set it!</StyledLink>
          </Link>
        </span>
      )}
    </SmallText>
  );
};

export default ValueWithPlaceholder;
