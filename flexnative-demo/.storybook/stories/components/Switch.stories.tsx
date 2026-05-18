import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { expect, userEvent, within } from "storybook/test";

import Switch from "@flexnative/switch";
import CenterDecorator from "../../decorators/CenterDecorator";
import ThemeDecorator from "../../decorators/ThemeDecorator";

const meta = {
  title: "Components/Switch",
  component: Switch,
  decorators: [ThemeDecorator, CenterDecorator],
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The `Switch` component is a toggleable input used for binary choices. It supports custom sizing, colors, and integrates with the application's theme context.",
      },
    },
    notes: `
      # Setup
      The \`Switch\` component is used to wrap a boolean state.
      
      \`\`\`tsx
      import Switch from "@flexnative/switch";

      export default function MyComponent() {
        const [isEnabled, setIsEnabled] = useState(false);

        return (
          <Switch
            value={isEnabled}
            onValueChange={setIsEnabled}
          />
        );
      }
      \`\`\`

      # Properties

      * value:
        The current state of the switch (true for on, false for off).
      * onValueChange:
        Callback invoked when the user toggles the switch.
      * disabled:
        If true, the switch cannot be interacted with.
      * activeTrackColor:
        Background color when the switch is ON.
      * inactiveTrackColor:
        Background color when the switch is OFF.
      * thumbColor:
        Color of the sliding thumb.
      * width:
        Total width of the switch component.
      * height:
        Total height of the switch component.
      * duration:
        Duration of the toggle animation in milliseconds. 
    `,
  },
  argTypes: {
    value: {
      description: "The current value of the switch.",
      control: "boolean",
    },
    disabled: {
      description: "If true, prevents user interaction.",
      control: "boolean",
    },
    onValueChange: {
      description: "Callback triggered when the switch value changes.",
      action: "onValueChange",
    },
    activeTrackColor: {
      description: "Background color when the switch is ON.",
      control: "color",
    },
    inactiveTrackColor: {
      description: "Background color when the switch is OFF.",
      control: "color",
    },
    thumbColor: {
      description: "Color of the sliding thumb.",
      control: "color",
    },
    width: {
      description: "Total width of the switch component.",
      control: "number",
    },
    height: {
      description: "Total height of the switch component.",
      control: "number",
    },
    duration: {
      description: "Duration of the toggle animation in milliseconds.",
      control: "number",
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: false,
  },
};

export const Active: Story = {
  args: {
    value: true,
    activeTrackColor: "#F5B027",
  },
};

export const Disabled: Story = {
  args: {
    value: true,
    disabled: true,
  },
};

export const CustomColors: Story = {
  args: {
    value: true,
    activeTrackColor: "#2ecc71",
    inactiveTrackColor: "#e74c3c",
    thumbColor: "#f1c40f",
  },
};

export const Large: Story = {
  args: {
    width: 80,
    height: 40,
  },
};

export const Small: Story = {
  args: {
    width: 40,
    height: 20,
  },
};

export const SlowAnimation: Story = {
  args: {
    duration: 1000,
  },
};

export const Toggle: Story = {
  args: {
    value: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const switchControl = canvas.getByRole("checkbox");
    await userEvent.click(switchControl);
    await expect(switchControl).toBeChecked();
  },
};
