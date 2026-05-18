import { Slider } from "@flexnative/slider";
import type { Meta, StoryObj } from "@storybook/react-native";
import { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";

import ThemeDecorator from "../../../decorators/ThemeDecorator";

const THUMB_IMAGES = {
  Default: require("../../../../assets/images/icon.png"),
  Favicon: require("../../../../assets/images/favicon.png"),
};

const meta = {
  title: "Components/Slider/Slider",
  component: Slider,
  decorators: [ThemeDecorator],
  argTypes: {
    value: {
      control: { type: "number" },
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
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithLabel: Story = {
  render: (args) => {
    const [currentValue, setCurrentValue] = useState(args.value);

    useEffect(() => {
      setCurrentValue(args.value);
    }, [args.value]);

    return (
      <View style={{ width: "100%", alignItems: "stretch" }}>
        <Text style={{ fontSize: 18, marginBottom: 10, fontWeight: "600" }}>
          Value: {currentValue}
        </Text>
        <Slider
          {...args}
          value={currentValue}
          onValueChange={(val) => setCurrentValue(val as number)}
        />
      </View>
    );
  },
  args: {
    value: 50,
    minimumValue: 0,
    maximumValue: 100,
  },
};

export const Default: Story = {
  args: {
    value: 50,
    minimumValue: 0,
    maximumValue: 100,
  },
};

export const CustomColors: Story = {
  args: {
    value: 30,
    minimumValue: 0,
    maximumValue: 100,
    thumbTintColor: "#9B59B6",
    minimumTrackTintColor: "#F5A623",
    maximumTrackTintColor: "#E0E0E0",
  },
};

export const SnapPoints: Story = {
  args: {
    value: 50,
    minimumValue: 0,
    maximumValue: 100,
    snapPoints: [0, 25, 50, 75, 100],
  },
};

export const WithCustomThumb: Story = {
  args: {
    value: 50,
    minimumValue: 0,
    maximumValue: 100,
    thumbImage: THUMB_IMAGES.Favicon,
  },
};

export const Disabled: Story = {
  args: {
    value: 50,
    minimumValue: 0,
    maximumValue: 100,
    disabled: true,
  },
};

export const WithStep: Story = {
  render: (args) => {
    const [currentValue, setCurrentValue] = useState(args.value);

    useEffect(() => {
      setCurrentValue(args.value);
    }, [args.value]);

    return (
      <View style={{ width: "100%", alignItems: "stretch" }}>
        <Text style={{ fontSize: 18, marginBottom: 10, fontWeight: "600" }}>
          Value: {currentValue}
        </Text>
        <Slider
          {...args}
          value={currentValue}
          onValueChange={(val) => setCurrentValue(val as number)}
        />
      </View>
    );
  },
  args: {
    value: 25,
    minimumValue: 0,
    maximumValue: 100,
    step: 5,
    minimumTrackTintColor: "#2ECC71",
    thumbTintColor: "#2ECC71",
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

    return (
      <View style={{ width: "100%", alignItems: "stretch" }}>
        <Text style={{ fontSize: 18, marginBottom: 10, fontWeight: "600" }}>
          Value: {currentValue}
        </Text>
        <Text style={{ fontSize: 14, marginBottom: 10, color: "#666" }}>
          Status: {slidingStatus}
        </Text>
        <Slider
          {...args}
          value={currentValue}
          onValueChange={(val) => setCurrentValue(val as number)}
          onSlidingStart={handleSlidingStart}
          onSlidingComplete={handleSlidingComplete}
        />
      </View>
    );
  },
  args: {
    value: 50,
    minimumValue: 0,
    maximumValue: 100,
    minimumTrackTintColor: "#3498DB",
    thumbTintColor: "#3498DB",
  },
};

export const WithSpringAnimation: Story = {
  args: {
    value: 50,
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

export const WithHideSteps: Story = {
  args: {
    value: 50,
    minimumValue: 0,
    maximumValue: 100,
    step: 10,
    hideSteps: true,
    minimumTrackTintColor: "#FF6B6B",
    thumbTintColor: "#FF6B6B",
  },
};

export const WithCustomStyles: Story = {
  render: (args) => {
    const [currentValue, setCurrentValue] = useState(args.value);

    useEffect(() => {
      setCurrentValue(args.value);
    }, [args.value]);

    return (
      <View style={{ width: "100%", alignItems: "stretch" }}>
        <Slider
          {...args}
          value={currentValue}
          onValueChange={(val) => setCurrentValue(val as number)}
        />
      </View>
    );
  },
  args: {
    value: 30,
    minimumValue: 0,
    maximumValue: 100,
    trackStyle: { height: 12, borderRadius: 6 },
    thumbStyle: { width: 30, height: 30, borderRadius: 15 },
    minimumTrackTintColor: "#F5A623",
    thumbTintColor: "#F5A623",
  },
};
