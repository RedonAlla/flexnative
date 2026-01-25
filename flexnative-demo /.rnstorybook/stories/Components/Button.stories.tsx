import type { Meta, StoryObj } from '@storybook/react-native';
import { fn } from 'storybook/test';
import Button from '../Button';
// import Button from '@flexnative/buttons';


const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    notes: `
# Button

This is a button component.
You use it like this:

\`\`\`tsx    
<Button 
  text="Press me!" 
  onPress={() => console.log('pressed')} 
/>
\`\`\`
`,
  },
  // Use `fn` to spy on the onPress arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  //args: { onPress: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // color: 'primary',
    // size: 'medium',
    // radius: 20,
    // type: 'text',
    // text: 'Button'
    label: 'Button',
    primary: true,
  },
};

// export const Secondary: Story = {
//   args: {
//     color: 'secondary',
//     size: 'medium',
//     radius: 20,
//     type: 'text',
//     text: 'Button',
//   },
// };

// export const Large: Story = {
//   args: {
//     color: 'primary',
//     size: 'large',
//     radius: 20,
//     type: 'text',
//     text: 'Button',
//   },
// };

// export const Medium: Story = {
//   args: {
//     color: 'primary',
//     size: 'medium',
//     radius: 20,
//     type: 'text',
//     text: 'Button',
//   },
// }

// export const Small: Story = {
//   args: {
//     color: 'primary',
//     size: 'small',
//     radius: 20,
//     type: 'text',
//     text: 'Button',
//   },
// };
