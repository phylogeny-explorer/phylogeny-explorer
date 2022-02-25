import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import DefaultAvatar from './DefaultAvatar';
import { Main } from './Avatar.styled';

export interface AvatarProps {
  size: number;
  source?: string;
  onClick?: () => void;
}

const Avatar = ({ source, size, onClick }: AvatarProps) => {
  const [src, setSrc] = useState(source);
  useEffect(() => {
    setSrc(source);
  }, [source]);

  return (
    <Main size={size} onClick={onClick}>
      {src ? (
        <Image
          src={src}
          alt="profile"
          onError={() => setSrc('')}
          width={size}
          height={size}
        />
      ) : (
        <DefaultAvatar />
      )}
    </Main>
  );
};

export default Avatar;
