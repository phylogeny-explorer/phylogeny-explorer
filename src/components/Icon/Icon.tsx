import React from 'react';
import MdiIcon from '@mdi/react';
import { IconProps as MdiIconProps } from '@mdi/react/dist/IconProps';
import {
  mdiAccount,
  mdiBookOpenBlankVariant,
  mdiCheck,
  mdiChevronDown,
  mdiChevronLeft,
  mdiChevronRight,
  mdiChevronUp,
  mdiCog,
  mdiCrosshairsGps,
  mdiDelete,
  mdiDotsHorizontal,
  mdiDotsVertical,
  mdiLoading,
  mdiEyeOff,
  mdiEye,
  mdiGraph,
  mdiGraphOutline,
  mdiHelp,
  mdiHistory,
  mdiLogin,
  mdiLogout,
  mdiImage,
  mdiPencil,
  mdiOpenInNew,
  mdiSquareEditOutline,
  mdiSourceRepository,
  mdiUndo,
  mdiContentCopy,
  mdiInformation,
  mdiInformationVariant,
  mdiPlus,
  mdiMinus,
  mdiClose,
  mdiCloseCircle,
  mdiLink,
  mdiLinkOff,
  mdiMagnify,
  mdiUpload,
  mdiCheckboxBlankOutline,
  mdiCheckboxIntermediate,
  mdiCheckboxMarked,
  mdiMenu,
} from '@mdi/js';

import { ClickWrapper } from './Icon.styled';

export interface IconProps extends Omit<MdiIconProps, 'path'> {
  name: string;
  onClick?: () => void;
}

const Icon = ({ name, onClick, size = 1, rotate, ...props }: IconProps) => {
  const paths = {
    account: mdiAccount,
    check: mdiCheck,
    checkbox: mdiCheckboxBlankOutline,
    'checkbox-indeterminate': mdiCheckboxIntermediate,
    'checkbox-marked': mdiCheckboxMarked,
    copy: mdiContentCopy,
    cog: mdiCog,
    crosshairs: mdiCrosshairsGps,
    delete: mdiDelete,
    'dots-h': mdiDotsHorizontal,
    'dots-v': mdiDotsVertical,
    loading: mdiLoading,
    down: mdiChevronDown,
    left: mdiChevronLeft,
    right: mdiChevronRight,
    up: mdiChevronUp,
    eye: mdiEye,
    'eye-off': mdiEyeOff,
    help: mdiHelp,
    history: mdiHistory,
    login: mdiLogin,
    logout: mdiLogout,
    image: mdiImage,
    edit: mdiPencil,
    undo: mdiUndo,
    'external-link': mdiOpenInNew,
    'edit-alt': mdiSquareEditOutline,
    info: mdiInformationVariant,
    'info-circle': mdiInformation,
    plus: mdiPlus,
    minus: mdiMinus,
    close: mdiClose,
    'close-circle': mdiCloseCircle,
    link: mdiLink,
    'link-off': mdiLinkOff,
    search: mdiMagnify,
    upload: mdiUpload,
    menu: mdiMenu,
    // features
    tree: mdiGraph,
    'tree-outline': mdiGraphOutline,
    relationships: mdiSourceRepository,
    wiki: mdiBookOpenBlankVariant,
  };

  const rotations = {
    tree: 270,
    'tree-outline': 270,
    relationships: 90,
  };

  if (onClick)
    return (
      <ClickWrapper onClick={onClick}>
        <MdiIcon
          path={paths[name] || mdiHelp}
          rotate={rotations[name] || rotate}
          size={size}
          {...props}
        />
      </ClickWrapper>
    );

  return (
    <MdiIcon
      path={paths[name] || mdiHelp}
      rotate={rotations[name] || rotate}
      size={size}
      {...props}
    />
  );
};

export default Icon;
