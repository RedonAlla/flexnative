import type { Meta, StoryObj } from "@storybook/react-native-web-vite";

import { PulseIcon as AnimatedIconComponent } from "@flexnative/icons";
import CenterDecorator from "../../../decorators/CenterDecorator";
import ThemeDecorator from "../../../decorators/ThemeDecorator";

const meta = {
  title: "Components/Icons/AnimatedComponents",
  component: AnimatedIconComponent,
  decorators: [ThemeDecorator, CenterDecorator],
  parameters: {
    notes: `
      # Properties
      \`PulseIcon\` inherits all \`AnimatedIcon\` props.
    `,
  },
} satisfies Meta<typeof AnimatedIconComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PulseIcon: Story = {
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
