import React from 'react';
import { css } from '@emotion/css';

// @ts-ignore
import { Blue, White } from '../index';

export interface buttonProps {
  children?: React.ReactChild;
  Mx?: number;
  My?: number;
  Px?: number;
  Py?: number;
  customProps?: any;
  btnHover?: boolean;
  btnHoverBgColor?: string;
  btnHoverTxtColor?: string;
  btnRadius?: number;
  btnBorder?: string;
  btnShadow?: boolean;
  btnTxtColor?: string;
  btnBgColor?: string;
  btnFont?: string;
  btnFNSize?: number;
  btnWeight?: number;
  onClick?: any;
}

export const Button: React.FC<buttonProps> = ({
  children,
  Mx = 0,
  My = 0,
  Px = 2,
  Py = 1,
  customProps = null,
  btnRadius = 0.5,
  btnBorder = 'none',
  btnTxtColor = White,
  btnBgColor = Blue['500'],
  btnShadow = true,
  btnFNSize = 1.1,
  btnWeight = 600,
  btnFont = 'inherit',
  onClick,
  btnHover = false,
  btnHoverBgColor,
  btnHoverTxtColor,
}) => {
  return (
    <button
      className={css`
        margin-top: ${My ? My + 'rem' : 0};
        margin-bottom: ${My ? My + 'rem' : 0};
        margin-left: ${Mx ? Mx + 'rem' : 0};
        margin-right: ${Mx ? Mx + 'rem' : 0};
        padding-top: ${Py ? Py + 'rem' : 0};
        padding-bottom: ${Py ? Py + 'rem' : 0};
        padding-left: ${Px ? Px + 'rem' : 0};
        padding-right: ${Px ? Px + 'rem' : 0};
        border-radius: ${btnRadius ? btnRadius + 'rem' : 0};
        border: ${btnBorder !== 'none' ? `1px solid ${btnBorder}` : 'none'};
        color: ${btnTxtColor ? btnTxtColor : White};
        font-size: ${btnFNSize ? btnFNSize + 'rem' : '1rem'};
        font-weight: ${btnWeight ? btnWeight : 400};
        background-color: ${btnBgColor ? btnBgColor : Blue['500']};
        font-family: ${btnFont ? btnFont : 'inherit'};
        cursor: pointer;
        box-shadow: ${btnShadow
          ? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
          : ''};

        &:hover {
          background-color: ${btnHover && btnHoverBgColor
            ? btnHoverBgColor
            : Blue['500']};
          color: ${btnHover && btnHoverTxtColor ? btnHoverTxtColor : White};
        }

        ${customProps}
      `}
      onClick={onClick}
    >
      {children ? children : 'Button'}
    </button>
  );
};

export interface inputProps {
  children?: any;
  type: string;
}

export const Input: React.FC<inputProps> = ({ children, type = 'text' }) => {
  return (
    <input
      type={type}
      className={css`
        padding: 10px;
        width: 200px;
        border-radius: 10px;
      `}
    >
      {children}
    </input>
  );
};
