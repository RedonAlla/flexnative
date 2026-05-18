import type { Meta, StoryObj } from "@storybook/react";

import SkeletonLoader, { Circle, Rect } from "@flexnative/skeleton-loading";
import CenterDecorator from "../decorators/CenterDecorator";
import ThemeDecorator from "../decorators/ThemeDecorator";

const meta = {
  title: "Components/SkeletonLoading",
  component: SkeletonLoader,
  decorators: [ThemeDecorator, CenterDecorator],
  parameters: {
    docs: {
      description: {
        component:
          "The `@flexnative/skeleton-loading` package is a specialized UI component for React Native applications. Its primary purpose is to provide skeleton screens—placeholder versions of your user interface that appear while content is still loading.",
      },
    },
    notes: `
      **IContentLoaderProps** props extends [SvgProps](https://github.com/software-mansion/react-native-svg)
      so any [SvgProps](https://github.com/software-mansion/react-native-svg) properties are also applicable in **IContentLoaderProps**
      
      * animate (boolean)
          Determines whether the skeleton loading components should be animated.

      * backgroundColor ([ColorValue](https://reactnative.dev/docs/colors))
          The background color of the skeleton placeholder.

      * foregroundColor ([ColorValue](https://reactnative.dev/docs/colors))
          The foreground (highlight) color used for the animation effect.

      * speed (number)
          The animation speed factor.

      * interval (number)
          The interval between animation cycles.

      * uniqueKey (string)
          A unique identifier used for internal SVG elements (like Rect fill and clipPath) to avoid ID collisions.
    `,
  },
  argTypes: {
    width: {
      control: "number",
      description: "Width of the skeleton element.",
    },
    height: {
      control: "number",
      description: "Height of the skeleton element.",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SkeletonLoader>;

export default meta;

type Story = StoryObj<typeof SkeletonLoader>;

export const Default: Story = {
  render: (args) => (
    <SkeletonLoader>
      <Rect x="48" y="8" rx="3" ry="3" width="88" height="10" />
      <Rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
      <Rect x="0" y="56" rx="3" ry="3" width="100%" height="6" />
      <Rect x="0" y="72" rx="3" ry="3" width="100%" height="6" />
      <Rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
      <Circle cx="20" cy="20" r="20" />
    </SkeletonLoader>
  ),
};

export const Animation: Story = {
  args: {
    animate: true,
    interval: 2,
    speed: 0.5,
  },
  render: (args) => (
    <SkeletonLoader {...args}>
      <Rect x="48" y="8" rx="3" ry="3" width="88" height="10" />
      <Rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
      <Rect x="0" y="56" rx="3" ry="3" width="100%" height="6" />
      <Rect x="0" y="72" rx="3" ry="3" width="100%" height="6" />
      <Rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
      <Circle cx="20" cy="20" r="20" />
    </SkeletonLoader>
  ),
};

export const Colors: Story = {
  args: {
    backgroundColor: "#a8dadc",
    foregroundColor: "#457b9d",
  },
  render: (args) => (
    <SkeletonLoader {...args}>
      <Rect x="48" y="8" rx="3" ry="3" width="88" height="10" />
      <Rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
      <Rect x="0" y="56" rx="3" ry="3" width="100%" height="6" />
      <Rect x="0" y="72" rx="3" ry="3" width="100%" height="6" />
      <Rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
      <Circle cx="20" cy="20" r="20" />
    </SkeletonLoader>
  ),
};
