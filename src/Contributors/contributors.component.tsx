import React from 'react';
import { css } from '@emotion/css';

import { Profile } from '../index';

export interface ContributorsProps {}

export const Contributors: React.FC<ContributorsProps> = () => {
  const people = [
    {
      name: 'Nick Morgan',
      position: '@Poggle Founder & Developer',
      link: 'https://github.com/GhostCrawl3r',
      profileUrl:
        'https://res.cloudinary.com/poggle/image/upload/v1632605360/59952732_10213518319370267_5546427844436951040_n_1_hn4sqd.jpg',
    },
    {
      name: 'Maria Stubley',
      position: 'Graphics Wizard',
      link: 'https://twitter.com/Marziepoos',
      profileUrl:
        'https://res.cloudinary.com/poggle/image/upload/v1632606268/9_IEP6gI_400x400_o99mz7.jpg',
    },
  ];
  return (
    <div
      className={css`
        display: flex;
        flex-direction: row;
        gap: 50px;
      `}
    >
      {people.map((person, index) => {
        return (
          <div
            key={index}
            className={css`
              display: flex;
              flex-direction: column;
              margin: 20px 0;
              width: 100%;
              font-family: inherit;
            `}
          >
            <a
              href={person.link}
              className={css`
                text-decoration: none;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                object-fit: cover;
                padding: 10px;
                &:hover {
                  text-decoration: underline;
                  border-radius: 20px;
                  background-color: rgba(74, 26, 99, 0.22);
                }
              `}
            >
              <Profile image={person.profileUrl} />
              <h1
                className={css`
                  font-size: 28px;
                  color: #313131;
                  font-weight: bold;
                  margin: 0;
                  padding-top: 10px;
                `}
              >
                {person.name}
              </h1>
              <p
                className={css`
                  font-size: 18px;
                  color: #820dc5;
                  line-height: 20px;
                  font-weight: bold;
                  text-align: center;
                `}
              >
                {person.position}
              </p>
            </a>
          </div>
        );
      })}
    </div>
  );
};
