import React from 'react';
import Icon from '../Icon';
import SocialIcon from '../SocialIcon';

import { Wrapper, Content, Text, LoaderWrapper } from './SocialButton.styled';

export interface SocialButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  platform: string;
  text: string;
  light?: boolean;
  small?: boolean;
  loading?: boolean;
  disabled?: boolean;
  allCaps?: boolean;
  squishy?: boolean;
  noIcon?: boolean;
  official?: boolean;
}

const SocialButton = ({
  platform,
  text,
  light,
  small,
  loading,
  allCaps,
  disabled,
  noIcon,
  squishy,
  official,
  ...props
}: SocialButtonProps) => (
  <Wrapper
    small={small}
    squishy={squishy}
    disabled={disabled || loading}
    visuallyDisabled={disabled}
    platform={platform}
    light={light}
    official={official}
    {...props}
  >
    {!noIcon && (
      <SocialIcon
        platform={platform}
        size={small ? 14 : 22}
        variant={light ? 'colour' : 'outline'}
      />
    )}
    <Content small={small} allCaps={allCaps} official={official}>
      {loading && (
        <LoaderWrapper>
          <Icon name="loading" spin size={small ? 0.75 : 1} />
        </LoaderWrapper>
      )}
      <Text hidden={loading}>
        {text}
      </Text>
    </Content>
  </Wrapper>
);

export default SocialButton;
