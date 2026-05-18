import type { Meta, StoryObj } from "@storybook/react-native-web-vite";

import { AnimatedIcon as FNBounceIcon } from "@flexnative/icons";
import CenterDecorator from "../../../decorators/CenterDecorator";
import ThemeDecorator from "../../../decorators/ThemeDecorator";

const meta = {
  title: "Components/Icons/AnimatedIcon",
  component: FNBounceIcon,
  decorators: [ThemeDecorator, CenterDecorator],
  parameters: {
    notes: `
      # Properties
      \`AnimatedIcon\` inherits all \`IconProps\` props.

      * duration (number): The duration of one animation cycle in milliseconds.
      * delay (number): Delay before the animation starts in milliseconds.
      * pulseColor (string): (HeartbeatIcon only) The color to interpolate to during the beat.
      * amplitude (number): (GlitchIcon only) The intensity of the glitch displacement.
      
      ## Available Animations
      * bounce: Scales the icon up and down continuously.
      * fade: Pulses the opacity of the icon.
      * glitch: Randomly shifts the icon position and opacity to simulate a glitch effect.
      * heartbeat: Mimics a cardiac rhythm (lub-dub) using scale.
      * pulse: Animates the backgroundColor opacity (breathing effect).
      * shake: Rotates the icon back and forth quickly.
      * spin: Rotates the icon 360 degrees infinitely.
      * wiggle: Rotates the icon back and forth gently.
    `,
    argTypes: {
      animation: {
        control: "select",
        options: [
          "bounce",
          "fade",
          "glitch",
          "heartbeat",
          "pulse",
          "shake",
          "spin",
          "wiggle",
        ],
      },
    },
  },
} satisfies Meta<typeof FNBounceIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HeartBeatIcon: Story = {
  args: {
    name: "star",
    size: 120,
    color: "primary",
    borderRadius: 60,
    backgroundColor: "#0000000d",
    animation: "heartbeat",
    duration: 900,
    delay: 600,
    pulseColor: "red",
  },
};

export const BounceIcon: Story = {
  args: {
    name: "star",
    size: 120,
    color: "primary",
    borderRadius: 60,
    backgroundColor: "#0000000d",
    animation: "bounce",
  },
};

export const FadeIcon: Story = {
  args: {
    name: "star",
    size: 120,
    color: "primary",
    borderRadius: 60,
    backgroundColor: "#0000000d",
    animation: "fade",
  },
};

export const GlitchIcon: Story = {
  args: {
    name: "star",
    size: 120,
    color: "primary",
    borderRadius: 60,
    backgroundColor: "#0000000d",
    animation: "glitch",
    amplitude: 900,
  },
};

export const PulseIcon: Story = {
  args: {
    name: "star",
    size: 120,
    color: "primary",
    borderRadius: 60,
    backgroundColor: "#0000000d",
    animation: "pulse",
  },
};

export const ShakeIcon: Story = {
  args: {
    name: "star",
    size: 120,
    color: "primary",
    borderRadius: 60,
    backgroundColor: "#0000000d",
    animation: "shake",
  },
};

export const Spinner: Story = {
  args: {
    name: "star",
    size: 120,
    color: "primary",
    borderRadius: 60,
    backgroundColor: "#0000000d",
    animation: "spin",
  },
};

export const WiggleIcon: Story = {
  args: {
    name: "star",
    size: 120,
    color: "primary",
    borderRadius: 60,
    backgroundColor: "#0000000d",
    animation: "wiggle",
  },
};
