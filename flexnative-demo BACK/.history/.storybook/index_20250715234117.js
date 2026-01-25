import { getStorybookUI, configure } from '@storybook/react-native';

// Import stories
configure(() => {
  require('../stories/ExampleComponent.stories');
}, module);

const StorybookUIRoot = getStorybookUI({});

export default StorybookUIRoot;