import React from 'react';

// @ts-ignore
import { Grid, Text, Profile, FlexCol, Flex, Purple } from '../index';

export interface ContributorsProps {}

export const Contributors: React.FC<ContributorsProps> = () => {
  const people = [
    {
      name: 'Nick Morgan',
      position: '@Poggle Founder & Developer',
      link: 'https://twitter.com/The_NickMorgan',
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
    <Grid gridCol={2} gridRow={1} spacing={2} customProps="margin-top:2rem;">
      {people.map((person, index) => {
        return (
          <Text variant="a" to={person.link} key={index}>
            <FlexCol align="center">
              <Profile image={person.profileUrl} width={10} height={10} />
              <Text variant="h4" My={0.5}>
                {person.name}
              </Text>
              <Text variant="h6" textColor={Purple['500']}>
                {person.position}
              </Text>
            </FlexCol>
          </Text>
        );
      })}
    </Grid>
  );
};
