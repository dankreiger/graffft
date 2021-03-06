import React, { SFC } from 'react';
import styled from '@emotion/styled';

import { ReactNode } from 'react';

export type ButtonKind = 'primary' | 'secondary' | 'cancel' | 'dark' | 'gray';
export type ButtonKinds = Record<ButtonKind, string>;

export interface ButtonProps {
  scale: 'small' | 'normal' | 'big';
  kind: 'primary' | 'secondary' | 'cancel' | 'dark' | 'gray';
  outline: boolean;
  children: ReactNode;
}

const scales = {
  small: `
    padding: 5px 10px;
    font-size: 14px;
  `,
  normal: `
    padding: 10px 20px;
    font-size: 16px;
  `,
  big: `
    padding: 20px 30px;
    font-size: 18px;
  `,
};

const kind = (outline: boolean) => (bg: string, color: string) => {
  const boxShadowColor = outline ? bg : 'transparent';
  const backgroundColor = outline ? 'transparent' : bg;

  return `
    background: ${backgroundColor};
    box-shadow: inset 0 0 0 1px ${boxShadowColor};
    color: ${outline ? bg : color};
    transition: all .3s;

    &:hover {
      box-shadow: inset 0 0 0 1000px ${boxShadowColor};
      color: ${color};
    }
  `;
};

const kinds = (outline: boolean): ButtonKinds => {
  const get = kind(outline);

  return {
    primary: get('#1FB6FF', 'white'),
    secondary: get('#5352EF', 'white'),
    cancel: get('#FF4949', 'white'),
    dark: get('#273444', 'white'),
    gray: get('#8492A6', 'white'),
  };
};

const getScale = ({ scale = 'normal' }: ButtonProps) => scales[scale];
const getKind = ({ kind = 'primary', outline = false }: ButtonProps) =>
  kinds(outline)[kind];

const ButtonStyled = styled('button')<ButtonProps>`
  ${getKind};
  ${getScale};
  cursor: pointer;
  margin: 3px 5px;
  border: none;
  border-radius: 0px;
`;

export const Button: SFC<ButtonProps> = ({ children, ...props }) => (
  <ButtonStyled {...props}>{children}</ButtonStyled>
);
