import type { StorybookConfig } from '@storybook/react-native';

const main: StorybookConfig = {
  stories: [
    './stories/**/*.stories.mdx',
    './stories/**/*.stories.?(ts|tsx|js|jsx)'
  ],
  addons: [
    '@storybook/manager-api',
    '@storybook/react-native-theming',

    // On-Device Addons
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-actions',
    '@storybook/addon-ondevice-notes',
    //'@storybook/addon-ondevice-backgrounds',
    
    // Web & Core Addons
    '@storybook/addon-react-native-web',
    '@storybook/addon-docs',
    '@storybook/addon-themes',
    //'@storybook/manager-api',
  ]
};

export default main;
