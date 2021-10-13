import React, { useState } from 'react';
import { css } from '@emotion/css';

// @ts-ignore
import { Blue, White, Black, Grey } from '../index';

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
  width?: number;
  height?: number;
  onChange?: any;
  autoFocus?: boolean;
  placeholder?: string;
}

export const TextInput: React.FC<inputProps> = ({
  Mx = 0,
  My = 0,
  Px = 2,
  Py = 1,
  customProps = null,
  btnRadius = 0.5,
  btnBorder = 'none',
  btnTxtColor = Black,
  btnBgColor = White,
  btnShadow = true,
  btnFNSize = 1.1,
  btnWeight = 600,
  btnFont = 'inherit',
  btnHover = false,
  btnHoverBgColor,
  btnHoverTxtColor,
  width,
  height,
  onChange,
  autoFocus = false,
  placeholder,
}) => {
  return (
    <input
      type="text"
      className={css`
        width: ${width ? width + 'rem' : '20rem'};
        height: ${height ? height + 'rem' : 'auto'};
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
        color: ${btnTxtColor ? btnTxtColor : Black};
        font-size: ${btnFNSize ? btnFNSize + 'rem' : '1rem'};
        font-weight: ${btnWeight ? btnWeight : 400};
        background-color: ${btnBgColor ? btnBgColor : White};
        font-family: ${btnFont ? btnFont : 'inherit'};
        cursor: pointer;
        box-shadow: ${btnShadow
          ? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
          : ''};

        &:hover {
          background-color: ${btnHover && btnHoverBgColor
            ? btnHoverBgColor
            : White};
          color: ${btnHover && btnHoverTxtColor ? btnHoverTxtColor : Black};
        }

        ${customProps}
      `}
      autoFocus={autoFocus}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export interface RadioProps {
  title: string;
  checked?: boolean;
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
  width?: number;
  height?: number;
  gap?: number;
}

export const Radio: React.FC<RadioProps> = ({
  title,
  checked = false,
  Mx = 0,
  My = 0,
  Px = 0,
  Py = 0.2,
  customProps = null,
  btnRadius = 0.5,
  btnBorder = 'none',
  btnTxtColor = Grey['700'],
  btnBgColor = White,
  btnShadow = false,
  btnFNSize = 1.1,
  btnWeight = 400,
  btnFont = 'inherit',
  btnHover = false,
  btnHoverBgColor,
  btnHoverTxtColor,
  width,
  height,
  gap = 1,
}) => {
  const [newChecked, setNewChecked] = useState(checked);

  return (
    <div
      className={css`
        display: flex;
        gap: ${gap ? gap + 'rem' : '1rem'};
        width: ${width ? width + 'rem' : 'auto'};
        height: ${height ? height + 'rem' : 'auto'};
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
        background-color: ${btnBgColor ? btnBgColor : White};
        cursor: pointer;
        box-shadow: ${btnShadow
          ? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
          : 'none'};

        &:hover {
          background-color: ${btnHover && btnHoverBgColor
            ? btnHoverBgColor
            : White};
        }
      `}
    >
      <input
        type="radio"
        id={title}
        checked={newChecked}
        className={css`
          ${customProps}
        `}
        onClick={() => setNewChecked((old) => !old)}
      />
      <label
        htmlFor={title}
        className={css`
          color: ${btnTxtColor ? btnTxtColor : Black};
          font-size: ${btnFNSize ? btnFNSize + 'rem' : '1rem'};
          font-weight: ${btnWeight ? btnWeight : 400};
          font-family: ${btnFont ? btnFont : 'inherit'};

          &:hover {
            color: ${btnHover && btnHoverTxtColor ? btnHoverTxtColor : Black};
          }
        `}
      >
        {title}
      </label>
    </div>
  );
};

export interface TextAreaProps {
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
  width?: number;
  height?: number;
  rows?: number;
  cols?: number;
}

export const TextArea: React.FC<TextAreaProps> = ({
  Mx = 0,
  My = 0,
  Px = 2,
  Py = 1,
  customProps = null,
  btnRadius = 0.5,
  btnBorder = 'none',
  btnTxtColor = Black,
  btnBgColor = White,
  btnShadow = true,
  btnFNSize = 1.1,
  btnWeight = 600,
  btnFont = 'inherit',
  btnHover = false,
  btnHoverBgColor,
  btnHoverTxtColor,
  width,
  height,
  rows = 4,
  cols = 10,
}) => {
  return (
    <textarea
      rows={rows}
      cols={cols}
      className={css`
        width: ${width ? width + 'rem' : '20rem'};
        height: ${height ? height + 'rem' : 'auto'};
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
        color: ${btnTxtColor ? btnTxtColor : Black};
        font-size: ${btnFNSize ? btnFNSize + 'rem' : '1rem'};
        font-weight: ${btnWeight ? btnWeight : 400};
        background-color: ${btnBgColor ? btnBgColor : White};
        font-family: ${btnFont ? btnFont : 'inherit'};
        cursor: pointer;
        box-shadow: ${btnShadow
          ? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
          : ''};

        &:hover {
          background-color: ${btnHover && btnHoverBgColor
            ? btnHoverBgColor
            : White};
          color: ${btnHover && btnHoverTxtColor ? btnHoverTxtColor : Black};
        }

        ${customProps}
      `}
    />
  );
};

export interface CheckBoxProps {
  title: string;
  checked?: boolean;
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
  width?: number;
  height?: number;
  gap?: number;
}

export const CheckBox: React.FC<CheckBoxProps> = ({
  title,
  checked = false,
  Mx = 0,
  My = 0,
  Px = 0,
  Py = 0.2,
  customProps = null,
  btnRadius = 0.5,
  btnBorder = 'none',
  btnTxtColor = Grey['700'],
  btnBgColor = White,
  btnShadow = false,
  btnFNSize = 1.1,
  btnWeight = 400,
  btnFont = 'inherit',
  btnHover = false,
  btnHoverBgColor,
  btnHoverTxtColor,
  width,
  height,
  gap = 1,
}) => {
  const [newChecked, setNewChecked] = useState(checked);

  return (
    <div
      className={css`
        display: flex;
        gap: ${gap ? gap + 'rem' : '1rem'};
        width: ${width ? width + 'rem' : 'auto'};
        height: ${height ? height + 'rem' : 'auto'};
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
        background-color: ${btnBgColor ? btnBgColor : White};
        cursor: pointer;
        box-shadow: ${btnShadow
          ? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
          : 'none'};

        &:hover {
          background-color: ${btnHover && btnHoverBgColor
            ? btnHoverBgColor
            : White};
        }
      `}
    >
      <input
        type="checkbox"
        id={title}
        checked={newChecked}
        className={css`
          ${customProps}
        `}
        onClick={() => setNewChecked((old) => !old)}
      />
      <label
        htmlFor={title}
        className={css`
          color: ${btnTxtColor ? btnTxtColor : Black};
          font-size: ${btnFNSize ? btnFNSize + 'rem' : '1rem'};
          font-weight: ${btnWeight ? btnWeight : 400};
          font-family: ${btnFont ? btnFont : 'inherit'};

          &:hover {
            color: ${btnHover && btnHoverTxtColor ? btnHoverTxtColor : Black};
          }
        `}
      >
        {title}
      </label>
    </div>
  );
};

export interface SelectProps {
  title?: string;
  data: Array<string>;
}

export const Select: React.FC<SelectProps> = ({ title, data }) => {
  return (
    <div>
      <label htmlFor={title}>{title}</label>
      <select name={title} id={title}>
        {data.map((option, index) => {
          return (
            <option value={option} key={index}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};
