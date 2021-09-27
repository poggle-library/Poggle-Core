import React from 'react';
import { css } from '@emotion/css';

export interface TextProps {
  children: React.ReactChild;
  variant: any;
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: number;
  textColor?: string;
  textHover?: boolean;
  textHoverColor?: string;
  Mx?: number;
  My?: number;
  Px?: number;
  Py?: number;
  customProps?: any;
  to?: string;
}

export const Text: React.FC<TextProps> = ({
  children,
  variant = 'p',
  fontFamily = 'inherit',
  fontSize,
  fontWeight,
  textColor,
  textHover = false,
  textHoverColor = textColor,
  Mx = 0,
  My = 0,
  Px = 0,
  Py = 0,
  customProps = null,
  to = null,
}) => {
  const handleVariant = (type: string) => {
    if (type === 'h1') {
      return (
        <h1
          className={css`
            font-family: ${fontFamily ? fontFamily : 'inherit'};
            font-size: ${fontSize ? fontSize : '3.5rem'};
            font-weight: ${fontWeight ? fontWeight : 700};
            color: ${textColor ? textColor : 'inherit'};
            margin-top: ${My ? My + 'rem' : 0};
            margin-bottom: ${My ? My + 'rem' : 0};
            margin-left: ${Mx ? Mx + 'rem' : 0};
            margin-right: ${Mx ? Mx + 'rem' : 0};
            padding-top: ${Py ? Py + 'rem' : 0};
            padding-bottom: ${Py ? Py + 'rem' : 0};
            padding-left: ${Px ? Px + 'rem' : 0};
            padding-right: ${Px ? Px + 'rem' : 0};
            cursor: inherit;
            ${customProps && customProps}

            &:hover {
              color: ${textHover && textHoverColor
                ? textHoverColor
                : textColor};
              cursor: ${textHover ? 'pointer' : 'default'};
            }
          `}
        >
          {children}
        </h1>
      );
    } else if (type === 'h2') {
      return (
        <h2
          className={css`
            font-family: ${fontFamily ? fontFamily : 'inherit'};
            font-size: ${fontSize ? fontSize : '3rem'};
            font-weight: ${fontWeight ? fontWeight : 700};
            color: ${textColor ? textColor : 'inherit'};
            margin-top: ${My ? My + 'rem' : 0};
            margin-bottom: ${My ? My + 'rem' : 0};
            margin-left: ${Mx ? Mx + 'rem' : 0};
            margin-right: ${Mx ? Mx + 'rem' : 0};
            padding-top: ${Py ? Py + 'rem' : 0};
            padding-bottom: ${Py ? Py + 'rem' : 0};
            padding-left: ${Px ? Px + 'rem' : 0};
            padding-right: ${Px ? Px + 'rem' : 0};
            cursor: inherit;
            ${customProps && customProps}

            &:hover {
              color: ${textHover && textHoverColor
                ? textHoverColor
                : textColor};
              cursor: ${textHover ? 'pointer' : 'default'};
            }
          `}
        >
          {children}
        </h2>
      );
    } else if (type === 'h3') {
      return (
        <h3
          className={css`
            font-family: ${fontFamily ? fontFamily : 'inherit'};
            font-size: ${fontSize ? fontSize : '2.5rem'};
            font-weight: ${fontWeight ? fontWeight : 700};
            color: ${textColor ? textColor : 'inherit'};
            margin-top: ${My ? My + 'rem' : 0};
            margin-bottom: ${My ? My + 'rem' : 0};
            margin-left: ${Mx ? Mx + 'rem' : 0};
            margin-right: ${Mx ? Mx + 'rem' : 0};
            padding-top: ${Py ? Py + 'rem' : 0};
            padding-bottom: ${Py ? Py + 'rem' : 0};
            padding-left: ${Px ? Px + 'rem' : 0};
            padding-right: ${Px ? Px + 'rem' : 0};
            cursor: inherit;
            ${customProps && customProps}

            &:hover {
              color: ${textHover && textHoverColor
                ? textHoverColor
                : textColor};
              cursor: ${textHover ? 'pointer' : 'default'};
            }
          `}
        >
          {children}
        </h3>
      );
    } else if (type === 'h4') {
      return (
        <h4
          className={css`
            font-family: ${fontFamily ? fontFamily : 'inherit'};
            font-size: ${fontSize ? fontSize : '2rem'};
            font-weight: ${fontWeight ? fontWeight : 600};
            color: ${textColor ? textColor : 'inherit'};
            margin-top: ${My ? My + 'rem' : 0};
            margin-bottom: ${My ? My + 'rem' : 0};
            margin-left: ${Mx ? Mx + 'rem' : 0};
            margin-right: ${Mx ? Mx + 'rem' : 0};
            padding-top: ${Py ? Py + 'rem' : 0};
            padding-bottom: ${Py ? Py + 'rem' : 0};
            padding-left: ${Px ? Px + 'rem' : 0};
            padding-right: ${Px ? Px + 'rem' : 0};
            cursor: inherit;
            ${customProps && customProps}

            &:hover {
              color: ${textHover && textHoverColor
                ? textHoverColor
                : textColor};
              cursor: ${textHover ? 'pointer' : 'default'};
            }
          `}
        >
          {children}
        </h4>
      );
    } else if (type === 'h5') {
      return (
        <h5
          className={css`
            font-family: ${fontFamily ? fontFamily : 'inherit'};
            font-size: ${fontSize ? fontSize : '1.5rem'};
            font-weight: ${fontWeight ? fontWeight : 500};
            color: ${textColor ? textColor : 'inherit'};
            margin-top: ${My ? My + 'rem' : 0};
            margin-bottom: ${My ? My + 'rem' : 0};
            margin-left: ${Mx ? Mx + 'rem' : 0};
            margin-right: ${Mx ? Mx + 'rem' : 0};
            padding-top: ${Py ? Py + 'rem' : 0};
            padding-bottom: ${Py ? Py + 'rem' : 0};
            padding-left: ${Px ? Px + 'rem' : 0};
            padding-right: ${Px ? Px + 'rem' : 0};
            cursor: inherit;
            ${customProps && customProps}

            &:hover {
              color: ${textHover && textHoverColor
                ? textHoverColor
                : textColor};
              cursor: ${textHover ? 'pointer' : 'default'};
            }
          `}
        >
          {children}
        </h5>
      );
    } else if (type === 'h6') {
      return (
        <h6
          className={css`
            font-family: ${fontFamily ? fontFamily : 'inherit'};
            font-size: ${fontSize ? fontSize : '1rem'};
            font-weight: ${fontWeight ? fontWeight : 500};
            color: ${textColor ? textColor : 'inherit'};
            margin-top: ${My ? My + 'rem' : 0};
            margin-bottom: ${My ? My + 'rem' : 0};
            margin-left: ${Mx ? Mx + 'rem' : 0};
            margin-right: ${Mx ? Mx + 'rem' : 0};
            padding-top: ${Py ? Py + 'rem' : 0};
            padding-bottom: ${Py ? Py + 'rem' : 0};
            padding-left: ${Px ? Px + 'rem' : 0};
            padding-right: ${Px ? Px + 'rem' : 0};
            cursor: inherit;
            ${customProps && customProps}

            &:hover {
              color: ${textHover && textHoverColor
                ? textHoverColor
                : textColor};
              cursor: ${textHover ? 'pointer' : 'default'};
            }
          `}
        >
          {children}
        </h6>
      );
    } else if (type === 'p') {
      return (
        <p
          className={css`
            font-family: ${fontFamily ? fontFamily : 'inherit'};
            font-size: ${fontSize ? fontSize : '1rem'};
            font-weight: ${fontWeight ? fontWeight : 400};
            color: ${textColor ? textColor : 'inherit'};
            margin-top: ${My ? My + 'rem' : 0};
            margin-bottom: ${My ? My + 'rem' : 0};
            margin-left: ${Mx ? Mx + 'rem' : 0};
            margin-right: ${Mx ? Mx + 'rem' : 0};
            padding-top: ${Py ? Py + 'rem' : 0};
            padding-bottom: ${Py ? Py + 'rem' : 0};
            padding-left: ${Px ? Px + 'rem' : 0};
            padding-right: ${Px ? Px + 'rem' : 0};
            cursor: inherit;
            ${customProps && customProps}

            &:hover {
              color: ${textHover && textHoverColor
                ? textHoverColor
                : textColor};
              cursor: ${textHover ? 'pointer' : 'default'};
            }
          `}
        >
          {children}
        </p>
      );
    } else if (type === 'span') {
      return (
        <span
          className={css`
            font-family: ${fontFamily ? fontFamily : 'inherit'};
            font-size: ${fontSize ? fontSize : '1rem'};
            font-weight: ${fontWeight ? fontWeight : 400};
            color: ${textColor ? textColor : 'inherit'};
            margin-top: ${My ? My + 'rem' : 0};
            margin-bottom: ${My ? My + 'rem' : 0};
            margin-left: ${Mx ? Mx + 'rem' : 0};
            margin-right: ${Mx ? Mx + 'rem' : 0};
            padding-top: ${Py ? Py + 'rem' : 0};
            padding-bottom: ${Py ? Py + 'rem' : 0};
            padding-left: ${Px ? Px + 'rem' : 0};
            padding-right: ${Px ? Px + 'rem' : 0};
            cursor: inherit;
            ${customProps && customProps}

            &:hover {
              color: ${textHover && textHoverColor
                ? textHoverColor
                : textColor};
              cursor: ${textHover ? 'pointer' : 'default'};
            }
          `}
        >
          {children}
        </span>
      );
    } else if (type === 'a') {
      return (
        <a
          className={css`
            font-family: ${fontFamily ? fontFamily : 'inherit'};
            font-size: ${fontSize ? fontSize : '1rem'};
            font-weight: ${fontWeight ? fontWeight : 400};
            color: ${textColor ? textColor : 'inherit'};
            margin-top: ${My ? My + 'rem' : 0};
            margin-bottom: ${My ? My + 'rem' : 0};
            margin-left: ${Mx ? Mx + 'rem' : 0};
            margin-right: ${Mx ? Mx + 'rem' : 0};
            padding-top: ${Py ? Py + 'rem' : 0};
            padding-bottom: ${Py ? Py + 'rem' : 0};
            padding-left: ${Px ? Px + 'rem' : 0};
            padding-right: ${Px ? Px + 'rem' : 0};
            text-decoration: none;
            cursor: pointer;
            ${customProps && customProps}

            &:hover {
              color: ${textHover && textHoverColor
                ? textHoverColor
                : textColor};
            }
          `}
          href={to ? to : ''}
        >
          {children}
        </a>
      );
    } else {
      return (
        <p
          className={css`
            font-family: ${fontFamily ? fontFamily : 'inherit'};
            font-size: ${fontSize ? fontSize : '0.5rem'};
            font-weight: ${fontWeight ? fontWeight : 400};
            color: ${textColor ? textColor : 'inherit'};
            margin-top: ${My ? My + 'rem' : 0};
            margin-bottom: ${My ? My + 'rem' : 0};
            margin-left: ${Mx ? Mx + 'rem' : 0};
            margin-right: ${Mx ? Mx + 'rem' : 0};
            padding-top: ${Py ? Py + 'rem' : 0};
            padding-bottom: ${Py ? Py + 'rem' : 0};
            padding-left: ${Px ? Px + 'rem' : 0};
            padding-right: ${Px ? Px + 'rem' : 0};
            ${customProps && customProps}

            &:hover {
              color: ${textHover && textHoverColor
                ? textHoverColor
                : textColor};
              cursor: ${textHover || to ? 'pointer' : 'default'};
            }
          `}
        >
          {children}
        </p>
      );
    }
  };
  return <div>{handleVariant(variant)}</div>;
};
