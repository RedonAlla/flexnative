import type { Meta, StoryObj } from "@storybook/react-native-web-vite";

import FNIcon from "@flexnative/icons";
import CenterDecorator from "../../../decorators/CenterDecorator";
import ThemeDecorator from "../../../decorators/ThemeDecorator";

const meta = {
  title: "Components/Icons",
  component: FNIcon,
  decorators: [ThemeDecorator, CenterDecorator],
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The `Icon` component displays vector icons from the configured icon set. It supports theming for size, color, and border styling.",
      },
    },
    notes: `
      # Setup
      Wrap your application (or the component tree where you intend to use icons) with the \`IconProvider\`. 
      
      \`\`\`tsx
      export default function App() {
        return (
          <IconProvider icons={myIcons}>
            <View style={{ flex: 1 }}>
              {/* Your app content */}
            </View>
          </IconProvider>
        );
      }
      \`\`\`

      # Properties

      * name:
        Name of the icon. Matches the key in the provided icon set.
      * size:
        Size of the icon. Values from the theme's \`fontSize\` or a numeric value.
      *  color:
        Color of the icon. Values from the theme's \`colors\` or a string color value.
      * borderRadius:
        Border radius for the icon background. Values from the theme's \`borders.radius\` or a numeric value.
      * backgroundColor: 
        The background color of the icon container
    `,
  },
  argTypes: {
    name: {
      description:
        "Name of the icon. Matches the key in the provided icon set.",
    },
    size: {
      description:
        "Size of the icon. Values from the theme's `fontSize` or a numeric value.",
    },
    color: {
      description:
        "Color of the icon. Values from the theme's `colors` or a string color value.",
    },
    borderRadius: {
      description:
        "Border radius for the icon background. Values from the theme's `borders.radius` or a numeric value.",
    },
    backgroundColor: {
      description: "The background color of the icon container",
    },
  },
} satisfies Meta<typeof FNIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    name: "star",
    size: 120,
    color: "primary",
    borderRadius: 60,
    backgroundColor: "#0000000d",
  },
};
