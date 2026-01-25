import { create } from 'storybook/theming/create';

 
export const lightTheme = create({
  base: 'light',
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',
 
  brandTitle: 'My custom Storybook',
  brandUrl: 'https://example.com',
  brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
  brandTarget: '_self',
 
  //
  colorPrimary: '#e51e10ff',
  colorSecondary: '#6d585cff',
 
  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#585C6D',
  appBorderRadius: 4,
 
  // Text colors
  textColor: '#234a04ff',
  textInverseColor: '#ffffff',
 
  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
  barHoverColor: '#585C6D',
  barBg: '#ffffff',
 
  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#10162F',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,
});

export const darkTheme = create({
  base: 'dark',
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',
 
  brandTitle: 'My custom Storybook',
  brandUrl: 'https://example.com',
  brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
  brandTarget: '_self',
 
  colorPrimary: '#e51e10ff',
  colorSecondary: '#6d585cff',
 
  // UI
  appBg: '#1e1e1e',
  appContentBg: '#2a2a2a',
  appPreviewBg: '#2a2a2a',
  appBorderColor: '#585C6D',
  appBorderRadius: 4,
 
  // Text colors
  textColor: '#f0f0f0',
  textInverseColor: '#1e1e1e',
 
  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#f0f0f0',
  barHoverColor: '#585C6D',
  barBg: '#1e1e1e',
 
  // Form colors
  inputBg: '#2a2a2a',
  inputBorder: '#585C6D',
  inputTextColor: '#f0f0f0',
  inputBorderRadius: 2,
});