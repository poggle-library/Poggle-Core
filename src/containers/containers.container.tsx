import React from 'react';
import { css } from '@emotion/css';

export interface FlexProps {
  children?: React.ReactChild | any;
  spacing?: number;
  customProps?: any;
  hasShadow?: boolean;
  hasHover?: boolean;
  justify?: string;
  align?: string;
  width?: number;
  height?: number;
}

export const Flex: React.FC<FlexProps> = ({
  children,
  spacing = 0,
  customProps = null,
  hasShadow = false,
  hasHover = false,
  justify = null,
  align = null,
  width = 'auto',
  height = 'auto',
}) => {
  const handleAlignment = (direction: string) => {
    if (direction === 'start') {
      return 'flex-start';
    } else if (direction === 'center') {
      return 'center';
    } else if (direction === 'end') {
      return 'flex-end';
    } else {
      return null;
    }
  };

  return (
    <div
      className={css`
        display: flex;
        gap: ${spacing ? spacing + 'rem' : '0px'};
        ${customProps ? customProps : ''}
        box-shadow: ${hasShadow
          ? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
          : ''};
        justify-content: ${justify ? handleAlignment(justify) : 'none'};
        align-items: ${align ? handleAlignment(align) : 'none'};
        width: ${width > 0 ? width + 'rem' : 'auto'};
        height: ${height > 0 ? height + 'rem' : 'auto'};
        cursor: inherit;

        &:hover {
          box-shadow: ${hasHover ? '2px 0px 9px 5px rgba(0,0,0,0.35)' : ''};
        }
      `}
    >
      {children}
    </div>
  );
};

export const FlexCol: React.FC<FlexProps> = ({
  children,
  spacing = 0,
  customProps = null,
  hasShadow = false,
  hasHover = false,
  justify = null,
  align = null,
  width = 'auto',
  height = 'auto',
}) => {
  const handleAlignment = (direction: string) => {
    if (direction === 'start') {
      return 'flex-start';
    } else if (direction === 'center') {
      return 'center';
    } else if (direction === 'end') {
      return 'flex-end';
    } else if (direction === 'between') {
      return 'space-between';
    } else {
      return null;
    }
  };
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        gap: ${spacing ? spacing + 'rem' : '0px'};
        ${customProps ? customProps : ''}
        box-shadow: ${hasShadow
          ? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
          : ''};
        justify-content: ${justify ? handleAlignment(justify) : 'none'};
        align-items: ${align ? handleAlignment(align) : 'none'};
        width: ${width > 0 ? width + 'rem' : 'auto'};
        height: ${height > 0 ? height + 'rem' : 'auto'};
        cursor: inherit;

        &:hover {
          box-shadow: ${hasHover ? '2px 0px 9px 5px rgba(0,0,0,0.35)' : ''};
        }
      `}
    >
      {children}
    </div>
  );
};

export interface GridProps {
  children?: React.ReactChild | any;
  spacing?: number;
  customProps?: any;
  gridCol?: number;
  gridRow?: number;
  hasShadow?: boolean;
  hasHover?: boolean;
  justify?: string;
  align?: string;
  width?: number;
  height?: number;
}

export const Grid: React.FC<GridProps> = ({
  children,
  spacing = 0,
  customProps = null,
  gridCol = 2,
  gridRow = 2,
  justify = null,
  align = null,
  width = 'auto',
  height = 'auto',
}) => {
  const handleAlignment = (direction: string) => {
    if (direction === 'start') {
      return 'flex-start';
    } else if (direction === 'center') {
      return 'center';
    } else if (direction === 'end') {
      return 'flex-end';
    } else if (direction === 'between') {
      return 'space-between';
    } else {
      return null;
    }
  };
  return (
    <div
      className={css`
        display: grid;
        grid-template-columns: repeat(${gridCol ? gridCol : 2}, minmax(0, 1fr));
        grid-template-rows: repeat(${gridRow ? gridRow : 2}, minmax(0, 1fr));
        gap: ${spacing ? spacing + 'rem' : '0px'};
        justify-content: ${justify ? handleAlignment(justify) : 'none'};
        align-items: ${align ? handleAlignment(align) : 'none'};
        width: ${width > 0 ? width + 'rem' : 'auto'};
        height: ${height > 0 ? height + 'rem' : 'auto'};
        cursor: inherit;
        ${customProps ? customProps : ''}
      `}
    >
      {children}
    </div>
  );
};
