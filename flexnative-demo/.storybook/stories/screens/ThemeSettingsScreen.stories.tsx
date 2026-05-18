import type { Meta, StoryObj } from "@storybook/react-native-web-vite";

import { ThemeSettingsScreen } from "@flexnative/screens";
import ThemeDecorator from "../../decorators/ThemeDecorator";

const meta = {
  title: "Screen/ThemeSettings",
  component: ThemeSettingsScreen,
  decorators: [ThemeDecorator],
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The `Screen` component serves as a foundational layout container for application screens, ensuring consistent padding, background, and alignment across the app.",
      },
    },
    notes: `
      # Setup
      The \`Screen\` component is used to wrap the content of individual screens.
      
      \`\`\`tsx
      import Screen from "@flexnative/screens";

      export default function HomeScreen() {
        return (
          <Screen>
            <Text>Welcome to the home screen!</Text>
          </Screen>
        );
      }
      \`\`\`
    `,
  },
} satisfies Meta<typeof ThemeSettingsScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PrimaryColors: Story = {
  args: {
    colors: {
      red: "#FF0000",
      orange: "#FF5533",
      yellow: "#FFFF00",
      green: "#2EFF2E",
      blue: "#0000FF",
      purple: "#800080",
    },
  },
};
