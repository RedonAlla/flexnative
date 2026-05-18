import type { Meta, StoryObj } from "@storybook/react-native-web-vite";

import { FadeIcon as FNFadeIcon } from "@flexnative/icons";
import CenterDecorator from "../../../decorators/CenterDecorator";
import ThemeDecorator from "../../../decorators/ThemeDecorator";

const meta = {
  title: "Components/Icons/AnimatedComponents",
  component: FNFadeIcon,
  decorators: [ThemeDecorator, CenterDecorator],
  parameters: {
    notes: `
      # Properties
      \`FadeIcon\` inherits all \`AnimatedIcon\` props.
    `,
  },
} satisfies Meta<typeof FNFadeIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FadeIcon: Story = {
  args: {
    name: "star",
    size: 120,
    color: "primary",
    borderRadius: 60,
    backgroundColor: "#0000000d",
    duration: 900,
    delay: 600,
  },
};
