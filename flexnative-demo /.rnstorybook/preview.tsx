import type { Preview } from '@storybook/react-native';
import { lightTheme, darkTheme } from './theme';
import { ComponentThemeProvider, componentThemes } from './ThemeContext';
import { View } from 'react-native';
import ComponentWrapper from './ComponentWrapper';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story, context) => {
      return (
        <ComponentWrapper>
          <Story />
        </ComponentWrapper>
      );
    },
  ],
};

export default preview;
