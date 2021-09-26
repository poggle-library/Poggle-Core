// .storybook/YourTheme.js

import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: 'white',
  colorSecondary: '#4a1a63',

  // UI
  appBg: '#1a0124',
  appContentBg: 'white',
  appBorderColor: 'white',
  appBorderRadius: 4,

  // Typography
  fontBase: 'Roboto',
  fontCode: 'monospace',
  fontSize: '20px',

  // Text colors
  textColor: 'white',
  textInverseColor: 'white',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: 'white',
  barBg: '#4a1a63',

  // Form colors
  inputBg: 'white',
  inputBorder: 'white',
  inputTextColor: 'white',
  inputBorderRadius: 4,

  //Branding
  brandTitle: 'Poggle React Component Library',
  brandUrl: 'https://www.npmjs.com/package/@poggle/core',
  brandImage:
    'https://res.cloudinary.com/poggle/image/upload/v1632517328/white_poggle_logo_gna3wy.png',
});
