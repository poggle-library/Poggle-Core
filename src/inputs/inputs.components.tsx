import React, { useState } from 'react';
import { css } from '@emotion/css';

// @ts-ignore
import { Blue, White, Black, Grey, Flex } from '../index';

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
  textHover?: boolean;
  textHoverBgColor?: string;
  textHoverTxtColor?: string;
  textRadius?: number;
  textBorder?: string;
  textShadow?: boolean;
  textTxtColor?: string;
  textBgColor?: string;
  textFont?: string;
  textFNSize?: number;
  textWeight?: number;
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
  textRadius = 0.5,
  textBorder = 'none',
  textTxtColor = Black,
  textBgColor = White,
  textShadow = true,
  textFNSize = 1.1,
  textWeight = 600,
  textFont = 'inherit',
  textHover = false,
  textHoverBgColor,
  textHoverTxtColor,
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
        border-radius: ${textRadius ? textRadius + 'rem' : 0};
        border: ${textBorder !== 'none' ? `1px solid ${textBorder}` : 'none'};
        color: ${textTxtColor ? textTxtColor : Black};
        font-size: ${textFNSize ? textFNSize + 'rem' : '1rem'};
        font-weight: ${textWeight ? textWeight : 400};
        background-color: ${textBgColor ? textBgColor : White};
        font-family: ${textFont ? textFont : 'inherit'};
        cursor: pointer;
        box-shadow: ${textShadow
          ? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
          : ''};

        &:hover {
          background-color: ${textHover && textHoverBgColor
            ? textHoverBgColor
            : White};
          color: ${textHover && textHoverTxtColor ? textHoverTxtColor : Black};
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
  radioHover?: boolean;
  radioHoverBgColor?: string;
  radioHoverTxtColor?: string;
  radioRadius?: number;
  radioBorder?: string;
  radioShadow?: boolean;
  radioTxtColor?: string;
  radioBgColor?: string;
  radioFont?: string;
  radioFNSize?: number;
  radioWeight?: number;
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
  radioRadius = 0.5,
  radioBorder = 'none',
  radioTxtColor = Grey['700'],
  radioBgColor = White,
  radioShadow = false,
  radioFNSize = 1.1,
  radioWeight = 400,
  radioFont = 'inherit',
  radioHover = false,
  radioHoverBgColor,
  radioHoverTxtColor,
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
        border-radius: ${radioRadius ? radioRadius + 'rem' : 0};
        border: ${radioBorder !== 'none' ? `1px solid ${radioBorder}` : 'none'};
        background-color: ${radioBgColor ? radioBgColor : White};
        cursor: pointer;
        box-shadow: ${radioShadow
          ? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
          : 'none'};

        &:hover {
          background-color: ${radioHover && radioHoverBgColor
            ? radioHoverBgColor
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
          color: ${radioTxtColor ? radioTxtColor : Black};
          font-size: ${radioFNSize ? radioFNSize + 'rem' : '1rem'};
          font-weight: ${radioWeight ? radioWeight : 400};
          font-family: ${radioFont ? radioFont : 'inherit'};

          &:hover {
            color: ${radioHover && radioHoverTxtColor
              ? radioHoverTxtColor
              : Black};
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
  textAreaHover?: boolean;
  textAreaHoverBgColor?: string;
  textAreaHoverTxtColor?: string;
  textAreaRadius?: number;
  textAreaBorder?: string;
  textAreaShadow?: boolean;
  textAreaTxtColor?: string;
  textAreaBgColor?: string;
  textAreaFont?: string;
  textAreaFNSize?: number;
  textAreaWeight?: number;
  width?: number;
  height?: number;
  rows?: number;
  cols?: number;
  placeholder?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  Mx = 0,
  My = 0,
  Px = 2,
  Py = 1,
  customProps = null,
  textAreaRadius = 0.5,
  textAreaBorder = 'none',
  textAreaTxtColor = Black,
  textAreaBgColor = White,
  textAreaShadow = true,
  textAreaFNSize = 1.1,
  textAreaWeight = 600,
  textAreaFont = 'inherit',
  textAreaHover = false,
  textAreaHoverBgColor,
  textAreaHoverTxtColor,
  width,
  height,
  rows = 4,
  cols = 10,
  placeholder,
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
        border-radius: ${textAreaRadius ? textAreaRadius + 'rem' : 0};
        border: ${textAreaBorder !== 'none'
          ? `1px solid ${textAreaBorder}`
          : 'none'};
        color: ${textAreaTxtColor ? textAreaTxtColor : Black};
        font-size: ${textAreaFNSize ? textAreaFNSize + 'rem' : '1rem'};
        font-weight: ${textAreaWeight ? textAreaWeight : 400};
        background-color: ${textAreaBgColor ? textAreaBgColor : White};
        font-family: ${textAreaFont ? textAreaFont : 'inherit'};
        cursor: pointer;
        box-shadow: ${textAreaShadow
          ? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
          : ''};

        &:hover {
          background-color: ${textAreaHover && textAreaHoverBgColor
            ? textAreaHoverBgColor
            : White};
          color: ${textAreaHover && textAreaHoverTxtColor
            ? textAreaHoverTxtColor
            : Black};
        }
        ${customProps}
      `}
      placeholder={placeholder}
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
  checkHover?: boolean;
  checkHoverBgColor?: string;
  checkHoverTxtColor?: string;
  checkRadius?: number;
  checkBorder?: string;
  checkShadow?: boolean;
  checkTxtColor?: string;
  checkBgColor?: string;
  checkFont?: string;
  checkFNSize?: number;
  checkWeight?: number;
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
  checkRadius = 0.5,
  checkBorder = 'none',
  checkTxtColor = Grey['700'],
  checkBgColor = White,
  checkShadow = false,
  checkFNSize = 1.1,
  checkWeight = 400,
  checkFont = 'inherit',
  checkHover = false,
  checkHoverBgColor,
  checkHoverTxtColor,
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
        border-radius: ${checkRadius ? checkRadius + 'rem' : 0};
        border: ${checkBorder !== 'none' ? `1px solid ${checkBorder}` : 'none'};
        background-color: ${checkBgColor ? checkBgColor : White};
        cursor: pointer;
        box-shadow: ${checkShadow
          ? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
          : 'none'};

        &:hover {
          background-color: ${checkHover && checkHoverBgColor
            ? checkHoverBgColor
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
          color: ${checkTxtColor ? checkTxtColor : Black};
          font-size: ${checkFNSize ? checkFNSize + 'rem' : '1rem'};
          font-weight: ${checkWeight ? checkWeight : 400};
          font-family: ${checkFont ? checkFont : 'inherit'};

          &:hover {
            color: ${checkHover && checkHoverTxtColor
              ? checkHoverTxtColor
              : Black};
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
  width?: number;
  height?: number;
  selectShadow?: boolean;
  Mx?: number;
  My?: number;
  Px?: number;
  Py?: number;
  labelSize?: number;
  labelColor?: string;
  labelWeight?: number;
  itemsGap?: number;
  itemsAlign?: 'start' | 'center' | 'end' | 'between';
  itemsJustify?: 'start' | 'center' | 'end' | 'between';
  optionSize?: number;
  optionWeight?: number;
}

export const Select: React.FC<SelectProps> = ({
  title,
  data,
  width = 10,
  height = 'auto',
  selectShadow = true,
  Mx = 0,
  My = 0,
  Px = 1,
  Py = 0.5,
  itemsGap = 0.8,
  labelSize = 1.2,
  labelColor = Black,
  labelWeight = 500,
  itemsAlign = 'center',
  itemsJustify = 'start',
  optionSize = 1,
  optionWeight = 400,
}) => {
  return (
    <Flex spacing={itemsGap} align={itemsAlign} justify={itemsJustify}>
      <label
        htmlFor={title}
        className={css`
          color: ${labelColor ? labelColor : Black};
          font-size: ${labelSize ? labelSize + 'rem' : '2rem'};
          font-weight: ${labelWeight ? labelWeight : 400};
          text-transform: capitalize;
        `}
      >
        {title}
      </label>
      <select
        name={title}
        id={title}
        className={css`
          width: ${width ? width + 'rem' : 5};
          height: ${height ? height + 'rem' : 'auto'};
          margin-top: ${My ? My + 'rem' : 0};
          margin-bottom: ${My ? My + 'rem' : 0};
          margin-left: ${Mx ? Mx + 'rem' : 0};
          margin-right: ${Mx ? Mx + 'rem' : 0};
          padding-top: ${Py ? Py + 'rem' : 0};
          padding-bottom: ${Py ? Py + 'rem' : 0};
          padding-left: ${Px ? Px + 'rem' : 0};
          padding-right: ${Px ? Px + 'rem' : 0};
          box-shadow: ${selectShadow
            ? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
            : ''};
          border: none;

          font-size: ${optionSize ? optionSize + 'rem' : 1};
          font-weight: ${optionWeight ? optionWeight : 400};
          text-transform: capitalize;
        `}
      >
        {data.map((option, index) => {
          return (
            <option value={option} key={index}>
              {option}
            </option>
          );
        })}
      </select>
    </Flex>
  );
};
