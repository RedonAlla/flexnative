import { getStorybookUI, configure } from '@storybook/react-native';

// Import stories
import './stories/ExampleComponent.stories';

// Configure Storybook
configure(() => {
  // You can add more stories here if needed
}, module);

// Set up the UI for Storybook
const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

// Export the UI
export default StorybookUIRoot;