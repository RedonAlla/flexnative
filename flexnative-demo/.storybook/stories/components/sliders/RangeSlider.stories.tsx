import { RangeSlider } from "@flexnative/slider";
import type { Meta, StoryObj } from "@storybook/react-native";
import { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";

import ThemeDecorator from "../../../decorators/ThemeDecorator";

const THUMB_IMAGES = {
  Default: require("../../../../assets/images/icon.png"),
  Favicon: require("../../../../assets/images/favicon.png"),
};

const meta = {
  title: "Components/Slider/RangeSlider",
  component: RangeSlider,
  decorators: [ThemeDecorator],
  argTypes: {
    value: {
      control: { type: "object" },
    },
    minimumValue: {
      control: { type: "number" },
    },
    maximumValue: {
      control: { type: "number" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    thumbImage: {
      options: Object.keys(THUMB_IMAGES),
      mapping: THUMB_IMAGES,
      control: { type: "select" },
      description: "Custom image for the slider thumb",
    },
  },
} satisfies Meta<typeof RangeSlider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithLabel: Story = {
  render: (args) => {
    const [currentValue, setCurrentValue] = useState(args.value);

    useEffect(() => {
      setCurrentValue(args.value);
    }, [args.value]);

    const values = Array.isArray(currentValue) ? currentValue : [0, 0];

    return (
      <View style={{ width: "100%", alignItems: "stretch" }}>
        <Text style={{ fontSize: 18, marginBottom: 10, fontWeight: "600" }}>
          Range: {values[0]} - {values[1]}
        </Text>
        <RangeSlider
          {...args}
          value={values}
          onValueChange={(val) => setCurrentValue(val as number[])}
        />
      </View>
    );
  },
  args: {
    value: [20, 80],
    minimumValue: 0,
    maximumValue: 100,
  },
};

export const Default: Story = {
  args: {
    value: [20, 80],
    minimumValue: 0,
    maximumValue: 100,
  },
};

export const Disabled: Story = {
  args: {
    value: [25, 75],
    minimumValue: 0,
    maximumValue: 100,
    disabled: true,
  },
};

export const WithCustomThumb: Story = {
  args: {
    value: [20, 30],
    minimumValue: 0,
    maximumValue: 100,
    thumbImage: THUMB_IMAGES.Favicon,
  },
};

export const WithStep: Story = {
  render: (args) => {
    const [currentValue, setCurrentValue] = useState(args.value);

    useEffect(() => {
      setCurrentValue(args.value);
    }, [args.value]);

    const values = Array.isArray(currentValue) ? currentValue : [0, 0];

    return (
      <View style={{ width: "100%", alignItems: "stretch" }}>
        <Text style={{ fontSize: 18, marginBottom: 10, fontWeight: "600" }}>
          Range: {values[0]} - {values[1]}
        </Text>
        <RangeSlider
          {...args}
          value={values}
          onValueChange={(val) => setCurrentValue(val as number[])}
        />
      </View>
    );
  },
  args: {
    value: [20, 80],
    minimumValue: 0,
    maximumValue: 100,
    step: 10,
  },
};

export const CustomColors: Story = {
  args: {
    value: [30, 70],
    minimumValue: 0,
    maximumValue: 100,
    minimumTrackTintColor: "#9B59B6",
    maximumTrackTintColor: "#E0E0E0",
    thumbTintColor: "#F5A623",
  },
};

export const WithSlidingCallbacks: Story = {
  render: (args) => {
    const [currentValue, setCurrentValue] = useState(args.value);
    const [slidingStatus, setSlidingStatus] = useState("idle");

    useEffect(() => {
      setCurrentValue(args.value);
    }, [args.value]);

    const handleSlidingStart = useCallback(() => {
      setSlidingStatus("sliding started");
    }, []);

    const handleSlidingComplete = useCallback(() => {
      setSlidingStatus("sliding complete");
    }, []);

    const values = Array.isArray(currentValue) ? currentValue : [0, 0];

    return (
      <View style={{ width: "100%", alignItems: "stretch" }}>
        <Text style={{ fontSize: 18, marginBottom: 10, fontWeight: "600" }}>
          Range: {values[0]} - {values[1]}
        </Text>
        <Text style={{ fontSize: 14, marginBottom: 10, color: "#666" }}>
          Status: {slidingStatus}
        </Text>
        <RangeSlider
          {...args}
          value={values}
          onValueChange={(val) => setCurrentValue(val as number[])}
          onSlidingStart={handleSlidingStart}
          onSlidingComplete={handleSlidingComplete}
        />
      </View>
    );
  },
  args: {
    value: [20, 80],
    minimumValue: 0,
    maximumValue: 100,
    minimumTrackTintColor: "#3498DB",
  },
};

export const WithSpringAnimation: Story = {
  args: {
    value: [20, 80],
    minimumValue: 0,
    maximumValue: 100,
    animateTransitions: true,
    animationType: "spring",
    animationConfig: {
      stiffness: 150,
      damping: 5,
      mass: 1,
      useNativeDriver: true,
    },
    minimumTrackTintColor: "#5856D6",
    thumbTintColor: "#5856D6",
  },
};
