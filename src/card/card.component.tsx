import React from 'react';
import { css } from '@emotion/css';
// @ts-ignore
import { Bp } from '../breakpoints';

export interface CardProps {
  children?: any;
  cardRadius?: number;
  cardShadow?: boolean;
  cardHoverShadow?: boolean;
  cardColor?: string;
  cardTags?: Array<string>;
  cardFont?: string;
  width?: number;
  xsWidth?: number;
  smWidth?: number;
  mdWidth?: number;
  lgWidth?: number;
  xlWidth?: number;
  height?: number;
  image?: string;
  title?: string;
  titleHover?: boolean;
  titleLength?: number;
  titleAlign?: string;
  titleSize?: number;
  titleWeight?: number;
  titleMx?: number;
  titleMy?: number;
  titlePx?: number;
  titlePy?: number;
  description?: string;
  desAlign?: string;
  desLength?: number;
  desWeight?: number;
  desMx?: number;
  desMy?: number;
  desPy?: number;
  desPx?: number;
  button?: boolean;
  btnText?: string;
  btnBgColor?: string;
  btnTxtColor?: string;
  btnPx?: number;
  btnPy?: number;
  btnMx?: number;
  btnMy?: number;
  btnBorder?: string;
  btnBorderCol?: string;
  btnWidth?: number;
  btnFnSize?: number;
  btnWeight?: number;
  btnPos?: string;
  btnHover?: boolean;
  desSize?: number;
  tagWeight?: number;
  tagsPos?: string;
  tagsMx?: number;
  tagsMy?: number;
  tagsPx?: number;
  tagsPy?: number;
  tagsBgColor?: string;
  tagsTxtColor?: string;
  tagsHover?: boolean;
  imgHeight?: number;
  contentPx?: number;
  contentPy?: number;
  contentMx?: number;
  contentMy?: number;
}

const textAlignment = (direction: string) => {
  switch (direction) {
    case 'left':
      return 'center';
    case 'center':
      return 'center';
    case 'right':
      return 'right';
    default:
      return null;
  }
};

export const Card: React.FC<CardProps> = ({
  children,
  cardRadius = '0',
  cardShadow = true,
  cardHoverShadow = false,
  cardColor = 'white',
  cardTags = [],
  cardFont = 'Roboto',
  width = 23,
  xsWidth = 20,
  smWidth = 22,
  mdWidth = 33,
  lgWidth = 60,
  xlWidth = 60,
  height = 'auto',
  image = '',
  title = undefined,
  titleHover = false,
  titleLength = undefined,
  titleAlign = 'left',
  titleSize = 2,
  titleWeight = 700,
  description = '',
  desAlign = 'left',
  desLength = 200,
  desSize = 1.2,
  desWeight = 400,
  button = false,
  btnHover = false,
  btnText = 'Read more',
  btnBgColor = 'black',
  btnTxtColor = 'white',
  btnPx = 2,
  btnPy = 0.7,
  btnMx = 0.5,
  btnMy = 0,
  btnBorder = 0,
  btnBorderCol,
  btnWidth = 10,
  btnFnSize = 1,
  btnWeight = 700,
  btnPos = 'left',
  tagWeight = 500,
  tagsPos = 'middle',
  tagsBgColor = 'white',
  tagsTxtColor = 'black',
  tagsHover = false,
  tagsMx = 0.5,
  tagsMy = 0,
  tagsPx,
  tagsPy,
  imgHeight,
  contentPx = 1,
  contentPy = 1,
  contentMx,
  contentMy,
  titleMx = 0.5,
  titleMy = 0,
  titlePx = 0,
  titlePy = 0,
  desMx = 0,
  desMy = 0,
  desPy = 0,
  desPx = 0,
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
                className={css`
                  display: flex;
                  align-items: center;
                `}
              >
                <h1
                  className={css`
                    padding: 0.2rem 1rem;
                    background-color: ${tagsBgColor ? tagsBgColor : 'white'};
                    width: 100%;
                    border-radius: 0.5rem;
                    color: ${tagsTxtColor ? tagsTxtColor : 'black'};
                    text-transform: capitalize;
                    font-size: 1rem;
                    font-weight: ${tagWeight ? tagWeight : '500'};
                    &:hover {
                      color: ${tagsHover && tagsBgColor
                        ? tagsBgColor
                        : tagsTxtColor};
                      background-color: ${tagsHover && tagsTxtColor
                        ? tagsTxtColor
                        : tagsBgColor};
                      border: 1px solid
                        ${tagsHover && tagsBgColor ? tagsBgColor : 'none'};
                    }
                  `}
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

  return (
    <div
      className={css`
        background-color: ${cardColor ? cardColor : 'white'};
        width: ${width ? width + 'rem' : '23rem'};
        height: ${height ? `${height}rem` : 'auto'};
        border-radius: ${cardRadius > 0 ? cardRadius + 'rem' : '0rem'};
        box-shadow: ${cardShadow
          ? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
          : ''};
        cursor: pointer;
        font-family: ${cardFont ? cardFont : 'inherit'};

        &:hover {
          box-shadow: ${cardHoverShadow
            ? '2px 0px 9px 5px rgba(0,0,0,0.35)'
            : ''};
        }

        @media (max-width: ${Bp.xl}) {
          width: ${width < 60 ? width + 'rem' : xlWidth + 'rem'};
        }

        @media (max-width: ${Bp.lg}) {
          width: ${width < 60 ? width + 'rem' : lgWidth + 'rem'};
        }

        @media (max-width: ${Bp.md}) {
          width: ${width < 43 ? width + 'rem' : mdWidth + 'rem'};
        }

        @media (max-width: ${Bp.sm}) {
          width: ${width < 28 ? width + 'rem' : smWidth + 'rem'};
        }

        @media (max-width: ${Bp.xs}) {
          width: ${width < 20 ? width + 'rem' : `${xsWidth}rem`};
        }
      `}
    >
      {image && (
        <img
          src={image}
          alt="blog-post"
          className={css`
            width: 100%;
            height: ${imgHeight ? imgHeight + 'rem' : '15rem'};
            object-fit: cover;
            border-radius: ${cardRadius
              ? `${cardRadius}rem ${cardRadius}rem 0 0`
              : '1rem 1rem 0 0'};
          `}
        />
      )}
      <div
        className={css`
          padding-left: ${contentPx ? contentPx + 'rem' : '0px'};
          padding-right: ${contentPx ? contentPx + 'rem' : '0px'};
          padding-top: ${contentPy ? contentPy + 'rem' : '0px'};
          padding-bottom: ${contentPy ? contentPy + 'rem' : '0px'};
          margin-top: ${contentMy ? contentMy + 'rem' : '0px'};
          margin-bottom: ${contentMy ? contentMy + 'rem' : '0px'};
          margin-left: ${contentMx ? contentMx + 'rem' : '0px'};
          margin-right: ${contentMx ? contentMx + 'rem' : '0px'};
          display: flex;
          flex-direction: column;
        `}
      >
        {/*card tags option*/}
        {tagsPos === 'top' && (
          <div
            className={css`
              display: flex;
              gap: 0.4rem;
              margin-top: ${tagsMy ? tagsMy + 'rem' : '0px'};
              margin-bottom: ${tagsMy ? tagsMy + 'rem' : '0px'};
              margin-left: ${tagsMx ? tagsMx + 'rem' : '0px'};
              margin-right: ${tagsMx ? tagsMx + 'rem' : '0px'};
              padding-top: ${tagsPy ? tagsPy + 'rem' : '0px'};
              padding-bottom: ${tagsPy ? tagsPy + 'rem' : '0px'};
              padding-left: ${tagsPx ? tagsPx + 'rem' : '0px'};
              padding-right: ${tagsPx ? tagsPx + 'rem' : '0px'};
            `}
          >
            {renderTags(cardTags)}
          </div>
        )}
        {children}
        {/*card title*/}
        <h1
          className={css`
            display: flex;
            padding-left: ${titlePx ? titlePx + 'rem' : '0px'};
            padding-right: ${titlePx ? titlePx + 'rem' : '0px'};
            padding-top: ${titlePy ? titlePy + 'rem' : '0px'};
            padding-bottom: ${titlePy ? titlePy + 'rem' : '0px'};
            margin-top: ${titleMy ? titleMy + 'rem' : '0px'};
            margin-bottom: ${titleMy ? titleMy + 'rem' : '0px'};
            margin-left: ${titleMx ? titleMx + 'rem' : '0px'};
            margin-right: ${titleMx ? titleMx + 'rem' : '0px'};
            text-align: ${titleAlign ? textAlignment(titleAlign) : 'left'};
            font-size: ${titleSize ? titleSize + 'rem' : '2rem'};
            text-transform: capitalize;
            font-weight: ${titleWeight ? titleWeight : '700'};

            &:hover {
              text-decoration: ${titleHover ? 'underline' : 'none'};
            }
          `}
        >
          {title && titleLength && title.length > titleLength
            ? textTrimmer(title, titleLength)
            : title}
        </h1>
        {/*card tags option*/}
        {tagsPos === 'middle' && (
          <div
            className={css`
              display: flex;
              gap: 0.4rem;
              margin-top: ${tagsMy ? tagsMy + 'rem' : '0px'};
              margin-bottom: ${tagsMy ? tagsMy + 'rem' : '0px'};
              margin-left: ${tagsMx ? tagsMx + 'rem' : '0px'};
              margin-right: ${tagsMx ? tagsMx + 'rem' : '0px'};
              padding-top: ${tagsPy ? tagsPy + 'rem' : '0px'};
              padding-bottom: ${tagsPy ? tagsPy + 'rem' : '0px'};
              padding-left: ${tagsPx ? tagsPx + 'rem' : '0px'};
              padding-right: ${tagsPx ? tagsPx + 'rem' : '0px'};
            `}
          >
            {renderTags(cardTags)}
          </div>
        )}
        {/*card description*/}
        <p
          className={css`
            font-size: ${desSize ? desSize + 'rem' : '1rem'};
            font-weight: ${desWeight ? desWeight : 400};
            padding-left: ${desPx ? desPx + 'rem' : '0px'};
            padding-right: ${desPx ? desPx + 'rem' : '0px'};
            padding-top: ${desPy ? desPy + 'rem' : '0px'};
            padding-bottom: ${desPy ? desPy + 'rem' : '0px'};
            margin-top: ${desMy ? desMy + 'rem' : '0px'};
            margin-bottom: ${desMy ? desMy + 'rem' : '10px'};
            margin-left: ${desMy ? desMy + 'rem' : '10px'};
            margin-right: ${desMx ? desMx + 'rem' : '0px'};
            text-align: ${desAlign ? desAlign : 'left'};
          `}
        >
          {desLength && description.length > desLength
            ? textTrimmer(description, desLength)
            : description}
          {!desLength && description}
        </p>
        {/*card button option*/}
        {button && (
          <div
            className={css`
              display: flex;
              justify-content: ${btnPos ? btnPos : 'flex-start'};
              padding-bottom: 1rem;
            `}
          >
            <button
              className={css`
                margin-top: ${btnMy ? btnMy + 'rem' : '0px'};
                margin-bottom: ${btnMy ? btnMy + 'rem' : '0px'};
                margin-left: ${btnMx ? btnMx + 'rem' : '0px'};
                margin-right: ${btnMx ? btnMx + 'rem' : '0px'};
                padding-top: ${btnPy ? btnPy + 'rem' : '0'};
                padding-bottom: ${btnPy ? btnPy + 'rem' : '0'};
                padding-left: ${btnPx ? btnPx + 'rem' : '0'};
                padding-right: ${btnPx ? btnPx + 'rem' : '0'};
                background-color: ${btnBgColor ? btnBgColor : 'black'};
                border-radius: 1rem;
                color: ${btnTxtColor ? btnTxtColor : 'white'};
                width: ${btnWidth ? btnWidth + 'rem' : '100%'};
                cursor: pointer;
                font-size: ${btnFnSize ? btnFnSize + 'rem' : '1rem'};
                font-weight: ${btnWeight ? btnWeight : '400'};
                border: ${btnBorder ? btnBorder + 'rem' : 'none'};
                border-color: ${btnBorderCol ? btnBorderCol : 'none'};

                &:hover {
                  color: ${btnHover && btnBgColor ? btnBgColor : btnTxtColor};
                  background-color: ${btnHover && btnTxtColor
                    ? btnTxtColor
                    : btnBgColor};
                  border: 1px solid
                    ${btnHover && btnBgColor ? btnBgColor : 'none'};
                }
              `}
            >
              {btnText}
            </button>
          </div>
        )}
        {/*card tags option*/}
        {tagsPos === 'bottom' && (
          <div
            className={css`
              display: flex;
              gap: 0.4rem;
              margin-top: ${tagsMy ? tagsMy + 'rem' : '0px'};
              margin-bottom: ${tagsMy ? tagsMy + 'rem' : '0px'};
              margin-left: ${tagsMx ? tagsMx + 'rem' : '0px'};
              margin-right: ${tagsMx ? tagsMx + 'rem' : '0px'};
              padding-top: ${tagsPy ? tagsPy + 'rem' : '0px'};
              padding-bottom: ${tagsPy ? tagsPy + 'rem' : '0px'};
              padding-left: ${tagsPx ? tagsPx + 'rem' : '0px'};
              padding-right: ${tagsPx ? tagsPx + 'rem' : '0px'};
            `}
          >
            {renderTags(cardTags)}
          </div>
        )}
      </div>
    </div>
  );
};
