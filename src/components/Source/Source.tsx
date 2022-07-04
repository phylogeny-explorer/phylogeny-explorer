import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import Icon from 'components/Icon';
import { SmallText, SubtitleSmall } from 'components/Typography';
import { Wrapper, PopupWrapper, Popup, Triangle } from './Source.styled';

interface Props {
  name: string;
  source?: string;
}

const Source = ({ name, source }: Props) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <Icon
        name={source ? 'file' : 'file-outline'}
        size={0.75}
        color={source ? theme.foreground : theme.vdgrey}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <PopupWrapper>
          <Popup>
            <SubtitleSmall>Sources for {name}</SubtitleSmall>
            <SmallText>
              {source || `no source for ${name}...`}
              {!source && <a> Add source</a>}
            </SmallText>
          </Popup>
          <Triangle />
        </PopupWrapper>
      )}
    </Wrapper>
  );
};

export default Source;
