import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { BlogPost } from '../src';

const meta: Meta = {
  title: 'Welcome',
  component: BlogPost,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = () => (
  <BlogPost
    desPy={0.5}
    contentPx={1}
    titlePx={0.3}
    btnWeight={700}
    btnFSize={1.1}
    titleLength={45}
    // cardTags={['hi', 'mate', 'html and css', 'booba', 'chicken']}
    // tagsPos="middle"
    cardShadow
    btnLength={10}
    cardRadius={1}
    fnSize={1.2}
    desLength={100}
    btnPx={2}
    btnPy={0.5}
    btnText="white"
    btnColor="black"
    button="Read More"
    description={
      'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur aliquet quam id dui posuere blandit.'
    }
    title={
      'This is the title of your blog post. Eating pizza by the sea is fun'
    }
    image={
      'https://images.pexels.com/photos/5679150/pexels-photo-5679150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    }
  />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
