import React from 'react';
import { css } from '@emotion/css';

export interface BadgeProps {
  profileShadow?: boolean;
  width?: number;
  height?: number;
  image?: string;
  imgAlt?: string;
  children?: React.ReactChild;
  profileRadius?: number;
  profileBGColor?: string;
  profileTxTColor?: string;
  profileHover?: boolean;
  profileCursor?: boolean;
}

export const Profile: React.FC<BadgeProps> = ({
  image = null,
  profileShadow = true,
  width = 10,
  height = 10,
  profileRadius = 50,
  profileBGColor = 'black',
  profileTxTColor = 'white',
  children,
  imgAlt = 'profile',
  profileHover = false,
  profileCursor = false,
}) => {
  const handleBorderRadius = (radius: number) => {
    if (radius > 0) {
      return radius + 'rem';
    } else {
      return '0rem';
    }
  };

  return (
    <div
      className={css`
        font-family: inherit;
      `}
    >
      {image && (
        <img
          src={image}
          alt={imgAlt ? imgAlt : 'profile'}
          className={css`
            width: ${width ? width + 'rem' : '10rem'};
            height: ${height ? height + 'rem' : '10rem'};
            border-radius: ${profileRadius ? profileRadius + 'rem' : '50%'};
            object-fit: cover;
            color: ${profileBGColor ? profileBGColor : 'black'};
            box-shadow: ${profileShadow
              ? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
              : ''};
            cursor: ${profileCursor ? 'pointer' : 'default'};

            &:hover {
              box-shadow: ${profileHover
                ? '2px 0px 9px 5px rgba(0,0,0,0.35)'
                : ''};
            }
          `}
        />
      )}
      {children && !image && (
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: ${width ? width + 'rem' : '10rem'};
            height: ${height ? height + 'rem' : '10rem'};
            border-radius: ${profileRadius
              ? handleBorderRadius(profileRadius)
              : '0px'};
            object-fit: cover;
            background-color: ${profileBGColor ? profileBGColor : 'white'};
            box-shadow: ${profileShadow
              ? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
              : ''};
            text-transform: uppercase;
            color: ${profileTxTColor ? profileTxTColor : 'black'};

            &:hover {
              background-color: ${profileHover && profileTxTColor
                ? profileTxTColor
                : profileBGColor};
              color: ${profileHover && profileBGColor
                ? profileBGColor
                : profileTxTColor};
            }
          `}
        >
          <h1>
            {children.toString().length > 2
              ? children.toString().slice(0, 2)
              : children}
          </h1>
        </div>
      )}
    </div>
  );
};
