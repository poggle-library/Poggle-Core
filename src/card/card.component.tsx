import React, { useEffect, useState } from 'react';
import { css } from '@emotion/css';
// @ts-ignore
import { BP } from '../breakpoints';

export interface CardProps {
  /**
   * Is this the principal call to action on the page?
   */
  cardRadius?: number;
  cardShadow?: boolean;
  cardColor?: string;
  cardTags?: Array<string>;
  cardFont?: string;
  width?: number;
  height?: number;
  image?: string;
  title?: string;
  titleLength?: number;
  titleAlign?: string;
  titleSize?: number;
  titleMx?: number;
  titleMy?: number;
  description: string;
  desAlign?: string;
  desLength?: number;
  desMx?: number;
  desMy?: number;
  button?: string;
  btnColor?: string;
  btnText: string;
  btnPx?: number;
  btnPy?: number;
  btnMx?: number;
  btnMy?: number;
  btnBorder?: string;
  btnBorderCol?: string;
  btnLength?: number;
  btnFnSize?: number;
  btnWeight?: number;
  btnPos?: string;
  fnSize?: number;
  tagWeight?: number;
  tagsPos?: string;
  tagsMx?: number;
  tagsMy?: number;
  tagsPx?: number;
  tagsPy?: number;
  tagsBgColor?: string;
  tagsTxtColor?: string;
  imgHeight?: number;
  contentPx?: number;
  contentPy?: number;
  contentMx?: number;
  contentMy?: number;
}

export const Card: React.FC<CardProps> = ({
  cardRadius = '0',
  cardShadow = true,
  cardColor = 'white',
  cardTags = [],
  cardFont = 'Roboto',
  width = 1,
  height = 'auto',
  image = '',
  title = undefined,
  titleLength = undefined,
  titleAlign = '',
  titleSize = 35,
  description = '',
  desAlign = 'left',
  desLength = 200,
  button = '',
  btnColor = 'black',
  btnText = 'White',
  btnPx = 2,
  btnPy = 0.7,
  btnMx = 0.5,
  btnMy = 1,
  btnBorder = 10,
  btnBorderCol,
  btnLength = 10,
  btnFnSize = 1,
  btnWeight = 700,
  btnPos = 'left',
  fnSize = 1.2,
  tagWeight = 400,
  tagsPos = 'middle',
  imgHeight,
  contentPx = 1,
  contentPy = 1,
  contentMx,
  contentMy,
  titleMx = 0.5,
  titleMy = 0,
  tagsMx = 0.5,
  tagsMy = 0.5,
  tagsPx,
  tagsPy,
  tagsBgColor = 'lightgray',
  tagsTxtColor = 'black',
  desMx = 0,
  desMy = 0,
}) => {
  const [adjustedRems, setAdjustedRems] = useState<number>(0);

  const calculatePercentage = (sWidth: number) => {
    const SW = width / sWidth;
    const newSW = SW * 100;
    setAdjustedRems(sWidth / newSW);
  };

  useEffect(() => {
    calculatePercentage(window.innerWidth);
  }, [window.innerWidth]);

  const textTrimmer = (text: string, charLength: number) => {
    return text.slice(0, charLength).concat('...');
  };

  if (cardTags === undefined) {
    cardTags = [''];
  }

  console.log(window.innerWidth - adjustedRems);

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
                    backgroundColor: tagsBgColor ? tagsBgColor : 'lightgray',
                    width: '100%',
                    borderRadius: '0.5rem',
                    color: tagsTxtColor ? tagsTxtColor : 'black',
                    textTransform: 'capitalize',
                    fontSize: '1rem',
                    fontWeight: tagWeight ? tagWeight : 'normal',
                    fontFamily: cardFont ? cardFont : 'Roboto',
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
      className={css`
        background-color: ${cardColor ? cardColor : 'white'};
        width: ${width
          ? (window.innerWidth - adjustedRems) / 10 + 'rem'
          : '6rem'};
        height: ${height ? `${height}rem` : 'auto'};
        border-radius: ${cardRadius ? `${cardRadius}rem` : '1rem'};
        box-shadow: ${cardShadow
          ? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
          : ''};
        cursor: pointer;
      `}
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
          marginTop: contentMy ? contentMy + 'rem' : '0px',
          marginBottom: contentMy ? contentMy + 'rem' : '0px',
          marginLeft: contentMx ? contentMx + 'rem' : '0px',
          marginRight: contentMx ? contentMx + 'rem' : '0px',
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
              marginTop: tagsMy ? tagsMy + 'rem' : '0px',
              marginBottom: tagsMy ? tagsMy + 'rem' : '0px',
              marginLeft: tagsMx ? tagsMx + 'rem' : '0px',
              marginRight: tagsMx ? tagsMx + 'rem' : '0px',
              paddingTop: tagsPy ? tagsPy + 'rem' : '0px',
              paddingBottom: tagsPy ? tagsPy + 'rem' : '0px',
              paddingLeft: tagsPx ? tagsPx + 'rem' : '0px',
              paddingRight: tagsPx ? tagsPx + 'rem' : '0px',
            }}
          >
            {renderTags(cardTags)}
          </div>
        )}
        {/*card title*/}
        <h1
          style={{
            display: 'flex',
            marginTop: titleMy ? titleMy + 'rem' : '0px',
            marginBottom: titleMy ? titleMy + 'rem' : '0px',
            marginLeft: titleMx ? titleMx + 'rem' : '0px',
            marginRight: titleMx ? titleMx + 'rem' : '0px',
            fontFamily: cardFont ? cardFont : 'Arial',
            //@ts-ignore
            textAlign: titleAlign ? titleAlign : 'left',
            fontSize: titleSize ? titleSize : '2rem',
          }}
        >
          {title && titleLength && title.length > titleLength
            ? textTrimmer(title, titleLength)
            : title}
        </h1>
        {/*card tags option*/}
        {tagsPos === 'middle' && (
          <div
            style={{
              display: 'flex',
              gap: '0.4rem',
              marginTop: tagsMy ? tagsMy + 'rem' : '0px',
              marginBottom: tagsMy ? tagsMy + 'rem' : '0px',
              marginLeft: tagsMx ? tagsMx + 'rem' : '0px',
              marginRight: tagsMx ? tagsMx + 'rem' : '0px',
              paddingTop: tagsPy ? tagsPy + 'rem' : '0px',
              paddingBottom: tagsPy ? tagsPy + 'rem' : '0px',
              paddingLeft: tagsPx ? tagsPx + 'rem' : '0px',
              paddingRight: tagsPx ? tagsPx + 'rem' : '0px',
            }}
          >
            {renderTags(cardTags)}
          </div>
        )}
        {/*card description*/}
        <p
          style={{
            fontSize: `${fnSize ? fnSize + 'rem' : '1rem'}`,
            marginTop: desMy ? desMy + 'rem' : '0px',
            marginBottom: desMy ? desMy + 'rem' : '10px',
            marginLeft: desMx ? desMx + 'rem' : '10px',
            marginRight: desMx ? desMx + 'rem' : '0px',
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
                marginTop: btnMy ? btnMy + 'rem' : '0px',
                marginBottom: btnMy ? btnMy + 'rem' : '0px',
                marginLeft: btnMx ? btnMx + 'rem' : '0px',
                marginRight: btnMx ? btnMx + 'rem' : '0px',
                paddingTop: btnPy ? btnPy + 'rem' : '0',
                paddingBottom: btnPy ? btnPy + 'rem' : '0',
                paddingLeft: btnPx ? btnPx + 'rem' : '0',
                paddingRight: btnPx ? btnPx + 'rem' : '0',
                backgroundColor: btnColor,
                borderRadius: '10px',
                color: btnText,
                width: btnLength ? `${btnLength}rem` : '100%',
                cursor: 'pointer',
                fontSize: `${btnFnSize ? btnFnSize + 'rem' : '1rem'}`,
                fontWeight: btnWeight ? btnWeight : 'normal',
                fontFamily: cardFont ? cardFont : 'Arial',
                border: btnBorder ? btnBorder : 'none',
                borderColor: btnBorderCol ? btnBorderCol : 'none',
              }}
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
              marginTop: tagsMy ? tagsMy + 'rem' : '0px',
              marginBottom: tagsMy ? tagsMy + 'rem' : '0px',
              marginLeft: tagsMx ? tagsMx + 'rem' : '0px',
              marginRight: tagsMx ? tagsMx + 'rem' : '0px',
              paddingTop: tagsPy ? tagsPy + 'rem' : '0px',
              paddingBottom: tagsPy ? tagsPy + 'rem' : '0px',
              paddingLeft: tagsPx ? tagsPx + 'rem' : '0px',
              paddingRight: tagsPx ? tagsPx + 'rem' : '0px',
            }}
          >
            {renderTags(cardTags)}
          </div>
        )}
        {!tagsPos && cardTags.length > 1 && (
          <div
            style={{
              display: 'flex',
              gap: '0.4rem',
              marginTop: tagsMy ? tagsMy + 'rem' : '0px',
              marginBottom: tagsMy ? tagsMy + 'rem' : '0px',
              marginLeft: tagsMx ? tagsMx + 'rem' : '0px',
              marginRight: tagsMx ? tagsMx + 'rem' : '0px',
            }}
          >
            {renderTags(cardTags)}
          </div>
        )}
      </div>
    </div>
  );
};
