import React from 'react';

import { GitHub, Linkedin, Plus } from 'react-feather';

export enum IconType {
  GITHUB = 'github',
  LINKEDIN = 'linkedin',
  PLUS = 'plus',
}

export interface IconProps {
  type: 'github' | 'linkedin' | 'plus';
}

export const Icon = ({ type }: IconProps) => {
  switch (type) {
    case IconType.LINKEDIN:
      return <Linkedin />;
    case IconType.GITHUB:
      return <GitHub />;
    case IconType.PLUS:
    default:
      return <Plus />;
  }
};
