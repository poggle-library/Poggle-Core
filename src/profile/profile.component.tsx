import React from 'react';
import { css } from '@emotion/css';

export interface BadgeProps {
  image?: string;
  profileShadow?: boolean;
  width?: number;
  height?: number;
  profileRadius?: number;
  letters?: string;
  lettersBGColor?: string;
  lettersTxTColor?: string;
}

export const Profile: React.FC<BadgeProps> = ({
  image,
  profileShadow = true,
  width = 10,
  height = 10,
  profileRadius = 50,
  letters,
  lettersBGColor,
  lettersTxTColor,
}) => {
  return (
    <div>
      {image && (
        <img
          src={image}
          alt="profile"
          className={css`
            width: ${width ? width + 'rem' : '10rem'};
            height: ${height ? height + 'rem' : '10rem'};
            border-radius: ${profileRadius ? profileRadius + 'rem' : '50%'};
            object-fit: cover;
            color: ${lettersBGColor ? lettersBGColor : 'black'};
            box-shadow: ${profileShadow
              ? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
              : ''};
          `}
        />
      )}
      {letters && !image && (
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: ${width ? width + 'rem' : '10rem'};
            height: ${height ? height + 'rem' : '10rem'};
            border-radius: ${profileRadius ? profileRadius + 'rem' : '50%'};
            object-fit: cover;
            background-color: ${lettersBGColor ? lettersBGColor : 'white'};
            box-shadow: ${profileShadow
              ? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
              : ''};
          `}
        >
          <h1
            className={css`
              color: ${lettersTxTColor ? lettersTxTColor : 'black'};
            `}
          >
            {letters.length > 2 ? letters.slice(0, 2) : letters}
          </h1>
        </div>
      )}
    </div>
  );
};
