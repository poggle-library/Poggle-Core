import React from 'react';

export interface BlogProps {
  cardRadius?: number;
  cardShadow?: boolean;
  cardColor?: string;
  cardTags?: Array<string>;
  cardFont?: string;
  width?: number;
  height?: number;
  image?: string;
  title: string;
  titleLength?: number;
  titleAlign?: string;
  titleSize?: number;
  titlePx?: number;
  titlePy?: number;
  description: string;
  desAlign?: string;
  desLength?: number;
  desPx?: number;
  desPy?: number;
  button?: string;
  btnColor?: string;
  btnText: string;
  btnPx?: number;
  btnPy?: number;
  btnLength?: number;
  btnFSize?: number;
  btnWeight?: number;
  btnPos?: string;
  location?: string;
  fnSize?: number;
  tagWeight?: number;
  tagsPos?: string;
  tagsPx?: number;
  tagsPy?: number;
  imgHeight?: number;
  contentPx?: number;
  contentPy?: number;
}

export const BlogPost: React.FC<BlogProps> = ({
  cardRadius,
  cardShadow,
  cardColor,
  cardTags,
  cardFont,
  width,
  height,
  image,
  title,
  titleLength,
  titleAlign,
  titleSize,
  description,
  desAlign,
  desLength,
  button,
  btnColor,
  btnText,
  btnPx,
  btnPy,
  btnLength,
  btnFSize,
  btnWeight,
  btnPos,
  location,
  fnSize,
  tagWeight,
  tagsPos,
  imgHeight,
  contentPx,
  contentPy,
  titlePx,
  titlePy,
  tagsPx,
  tagsPy,
  desPx,
  desPy,
}) => {
  const textTrimmer = (text: string, charLength: number) => {
    return text.slice(0, charLength).concat('...');
  };

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
      {image && (
        <img
          src={image}
          alt="blog-post"
          style={{
            width: '100%',
            height: `${imgHeight ? imgHeight + 'rem' : '15rem'}`,
            objectFit: 'cover',
            borderRadius: `${
              cardRadius
                ? `${cardRadius}rem ${cardRadius}rem 0 0`
                : '1rem 1rem 0 0 '
            }`,
          }}
        />
      )}
      <div
        style={{
          paddingLeft: contentPx ? contentPx + 'rem' : '0px',
          paddingRight: contentPx ? contentPx + 'rem' : '0px',
          paddingTop: contentPy ? contentPy + 'rem' : '0px',
          paddingBottom: contentPy ? contentPy + 'rem' : '0px',
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
              marginTop: tagsPy ? tagsPy + 'rem' : '0px',
              marginBottom: tagsPy ? tagsPy + 'rem' : '0px',
              marginLeft: tagsPx ? tagsPx + 'rem' : '0px',
              marginRight: tagsPx ? tagsPx + 'rem' : '0px',
            }}
          >
            {renderTags(cardTags)}
          </div>
        )}
        {/*card title*/}
        <h1
          style={{
            display: 'flex',
            marginTop: titlePx ? titlePx + 'rem' : '0px',
            marginBottom: titlePx ? titlePx + 'rem' : '0px',
            marginLeft: titlePy ? titlePy + 'rem' : '0px',
            marginRight: titlePy ? titlePy + 'rem' : '0px',
            fontFamily: cardFont ? cardFont : 'Arial',
            //@ts-ignore
            textAlign: titleAlign ? titleAlign : 'left',
            fontSize: titleSize ? titleSize : '2rem',
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
              marginTop: tagsPy ? tagsPy + 'rem' : '0px',
              marginBottom: tagsPy ? tagsPy + 'rem' : '0px',
              marginLeft: tagsPx ? tagsPx + 'rem' : '0px',
              marginRight: tagsPx ? tagsPx + 'rem' : '0px',
            }}
          >
            {renderTags(cardTags)}
          </div>
        )}
        {/*card description*/}
        <p
          style={{
            fontSize: `${fnSize ? fnSize + 'rem' : '1rem'}`,
            marginTop: desPy ? desPy + 'rem' : '0px',
            marginBottom: desPy ? desPy + 'rem' : '0px',
            marginLeft: desPx ? desPx + 'rem' : '0px',
            marginRight: desPx ? desPx + 'rem' : '0px',
            //@ts-ignore
            textAlign: desAlign ? desAlign : 'left',
          }}
        >
          {desLength && description.length > desLength
            ? textTrimmer(description, desLength)
            : description}
          {!desLength && description}
        </p>
        {/*card button option*/}
        {button && (
          <div
            style={{
              display: 'flex',
              justifyContent: btnPos ? btnPos : 'flex-start',
              paddingBottom: '1rem',
            }}
          >
            <button
              style={{
                padding: `${btnPy}rem ${btnPx}rem`,
                backgroundColor: btnColor,
                borderRadius: '10px',
                color: btnText,
                width: btnLength ? `${btnLength}rem` : '100%',
                cursor: 'pointer',
                fontSize: `${btnFSize ? btnFSize + 'rem' : '1rem'}`,
                fontWeight: btnWeight ? btnWeight : 'normal',
                fontFamily: cardFont ? cardFont : 'Arial',
              }}
              onClick={() => console.log(location)}
            >
              {button}
            </button>
          </div>
        )}
        {/*card tags option*/}
        {tagsPos === 'bottom' && (
          <div
            style={{
              display: 'flex',
              gap: '0.4rem',
              marginTop: tagsPy ? tagsPy + 'rem' : '0px',
              marginBottom: tagsPy ? tagsPy + 'rem' : '0px',
              marginLeft: tagsPx ? tagsPx + 'rem' : '0px',
              marginRight: tagsPx ? tagsPx + 'rem' : '0px',
            }}
          >
            {renderTags(cardTags)}
          </div>
        )}
        {!tagsPos && cardTags && (
          <div
            style={{
              display: 'flex',
              gap: '0.4rem',
              marginTop: tagsPy ? tagsPy + 'rem' : '0px',
              marginBottom: tagsPy ? tagsPy + 'rem' : '0px',
              marginLeft: tagsPx ? tagsPx + 'rem' : '0px',
              marginRight: tagsPx ? tagsPx + 'rem' : '0px',
            }}
          >
            {renderTags(cardTags)}
          </div>
        )}
      </div>
    </div>
  );
};
