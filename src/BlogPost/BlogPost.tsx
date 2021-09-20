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
  cardTags?: Array<string>;
  tagWeight?: number;
  tagsPos?: string;
  imgHeight?: number;
  titleLength?: number;
  btnFSize?: number;
  btnWeight?: number;
  cardFont?: string;
}

export const BlogPost: React.FC<BlogProps> = ({
  cardRadius,
  width,
  height,
  image,
  title,
  titleLength,
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
  cardTags,
  tagWeight,
  tagsPos,
  imgHeight,
  btnFSize,
  btnWeight,
  cardFont,
}) => {
  const textTrimmer = (text: string, charLength: number) => {
    return text.slice(0, charLength).concat('...');
  };

  if (tagsPos === undefined) {
    tagsPos = 'bottom';
  }

  if (cardTags === undefined) {
    cardTags = [''];
  }

  const renderTags = (tags: Array<string>) => {
    if (tags !== undefined) {
      return (
        <>
          {tags.slice(0, 4).map((tag, index) => {
            return (
              <div
                key={index}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <h1
                  style={{
                    padding: '0.2rem 1rem',
                    backgroundColor: 'lightgray',
                    width: '100%',
                    borderRadius: '0.5rem',
                    color: 'black',
                    textTransform: 'capitalize',
                    fontSize: '1rem',
                    fontWeight: tagWeight ? tagWeight : 'normal',
                    fontFamily: cardFont ? cardFont : 'Arial',
                  }}
                >
                  {tag}
                </h1>
              </div>
            );
          })}
        </>
      );
    } else {
      return null;
    }
  };

  // @ts-ignore
  // @ts-ignore
  return (
    <div
      style={{
        backgroundColor: cardColor ? cardColor : 'white',
        width: width ? width + 'rem' : '25rem',
        height: height ? height + 'rem' : 'auto',
        borderRadius: `${cardRadius ? cardRadius + 'rem' : '1rem'}`,
        boxShadow: cardShadow
          ? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
          : '',
        cursor: 'pointer',
      }}
    >
      <img
        src={image}
        alt="blog-post"
        style={{
          width: '100%',
          height: imgHeight ? imgHeight + 'rem' : '15rem',
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
        {/*card tags option*/}
        {tagsPos === 'top' && (
          <div
            style={{
              display: 'flex',
              gap: '0.4rem',
              margin: '1rem 0',
            }}
          >
            {renderTags(cardTags)}
          </div>
        )}
        {/*card title*/}
        <h1
          style={{
            display: 'flex',
            marginTop: '1rem',
            fontFamily: cardFont ? cardFont : 'Arial',
          }}
        >
          {titleLength && title.length > titleLength
            ? textTrimmer(title, titleLength)
            : titleLength}
          {!titleLength && title}
        </h1>
        {/*card tags option*/}
        {tagsPos === 'middle' && (
          <div
            style={{
              display: 'flex',
              gap: '0.4rem',
              margin: '1rem 0',
            }}
          >
            {renderTags(cardTags)}
          </div>
        )}
        {/*card description*/}
        <p
          style={{
            fontSize: fnSize ? fnSize + 'rem' : '1rem',
            marginTop: '-0.8rem',
            padding: '0.5rem 0',
          }}
        >
          {description.length > desLength
            ? textTrimmer(description, desLength)
            : description}
        </p>
        {/*card button option*/}
        {button && (
          <button
            style={{
              padding: `${btnPy}rem ${btnPx}rem`,
              backgroundColor: btnColor,
              borderRadius: '10px',
              color: btnText,
              width: btnLength ? `${btnLength}rem` : '100%',
              cursor: 'pointer',
              fontSize: btnFSize ? btnFSize + 'rem' : '1rem',
              fontWeight: btnWeight ? btnWeight : 'normal',
              fontFamily: cardFont ? cardFont : 'Arial',
            }}
            onClick={() => console.log(location)}
          >
            {button}
          </button>
        )}
        {/*card tags option*/}
        {tagsPos === 'bottom' && (
          <div
            style={{
              display: 'flex',
              gap: '0.4rem',
              margin: '1rem 0',
            }}
          >
            {renderTags(cardTags)}
          </div>
        )}
      </div>
    </div>
  );
};
