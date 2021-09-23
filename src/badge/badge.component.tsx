import React from 'react';

export interface BadgeProps {
  image?: string;
  badgeShadow?: boolean;
  width?: number;
  height?: number;
  badgeRadius?: number;
}

export const Badge: React.FC<BadgeProps> = ({
  image,
  badgeShadow = true,
  width = 10,
  height = 10,
  badgeRadius = 50,
}) => {
  return (
    <div>
      <img
        src={image}
        alt="profile"
        style={{
          width: width ? width + 'rem' : '10rem',
          height: height ? height + 'rem' : '10rem',
          borderRadius: badgeRadius ? badgeRadius + 'rem' : '50%',
          objectFit: 'cover',
          boxShadow: badgeShadow
            ? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
            : '',
        }}
      />
    </div>
  );
};
