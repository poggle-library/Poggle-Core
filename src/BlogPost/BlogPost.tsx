import React from 'react';

export interface BlogProps {
  width?: number;
  height?: number;
  image: string;
  title: string;
  description: string;
  desLength: number;
  button?: string;
  location?: string;
  btnColor: string;
  btnText: string;
  btnPx?: number;
  btnPy?: number;
  btnLength?: number;
  fnSize?: number;
  cardRadius?: number;
  cardShadow?: boolean;
  cardColor?: string;
}

export const BlogPost: React.FC<BlogProps> = ({
  cardRadius,
  width,
  height,
  image,
  title,
  description,
  desLength,
  button,
  location,
  btnColor,
  btnText,
  btnPx,
  btnPy,
  fnSize,
  btnLength,
  cardShadow,
  cardColor,
}) => {
  const textTrimmer = (text: string, charLength: number) => {
    return text.slice(0, charLength).concat('...');
  };

  return (
    <div
      style={{
        backgroundColor: cardColor ? cardColor : 'white',
        width: `${width ? width : 25}rem`,
        height: `${height ? height : 35}rem`,
        borderRadius: `${cardRadius ? cardRadius + 'rem' : '1rem'}`,
        boxShadow: cardShadow
          ? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
          : '',
      }}
    >
      <img
        src={image}
        alt="blog-post"
        style={{
          width: '100%',
          height: '15rem',
          objectFit: 'cover',
          borderRadius: `${
            cardRadius
              ? `${cardRadius}rem ${cardRadius}rem 0 0`
              : '1rem 1rem 0 0 '
          }`,
        }}
      />
      <div
        style={{
          padding: '0 1rem',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h1>{title}</h1>
        <p style={{ fontSize: `${fnSize ? fnSize + 'rem' : '1rem'}` }}>
          {description.length > desLength
            ? textTrimmer(description, desLength)
            : description}
        </p>
        {button && (
          <button
            style={{
              padding: `${btnPy}rem ${btnPx}rem`,
              backgroundColor: btnColor,
              borderRadius: '10px',
              color: btnText,
              width: btnLength ? `${btnLength}rem` : '100%',
            }}
            onClick={() => console.log(location)}
          >
            {button}
          </button>
        )}
      </div>
    </div>
  );
};
