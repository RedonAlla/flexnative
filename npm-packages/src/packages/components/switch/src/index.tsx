import * as Haptics from "expo-haptics";
import React, { useEffect, useRef, useState } from "react";
import { Animated, ColorValue, Platform, Pressable } from "react-native";
import Svg, { Circle, Rect } from "react-native-svg";

import { useThemeState } from "@flexnative/theme-context";
import {
  ANIMATION_DURATION,
  DISABLED_OPACITY,
  SWITCH_HEIGHT,
  SWITCH_WIDTH,
  THUMB_PADDING,
} from "./constants";

const isWeb = Platform.OS === "web";
// Create animated versions of the SVG components
const AnimatedRect = Animated.createAnimatedComponent(Rect);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface Props {
  value?: boolean;
  onValueChange?: (value: boolean) => void;
  activeTrackColor?: ColorValue;
  inactiveTrackColor?: ColorValue;
  thumbColor?: ColorValue;
  width?: number;
  height?: number;
  duration?: number;
  disabled?: boolean;
}

const Switch: React.FC<Props> = (props: Props) => {
  const theme = useThemeState();

  const {
    value = false,
    onValueChange,
    activeTrackColor = theme.colors.primary,
    inactiveTrackColor = theme.colors.default,
    thumbColor = theme.colors.card,
    width = SWITCH_WIDTH,
    height = SWITCH_HEIGHT,
    duration = ANIMATION_DURATION,
    disabled = false,
  } = props;

  const [isOn, setIsOn] = useState(value);
  const animatedValue = useRef(new Animated.Value(value ? 1 : 0)).current;

  // Sync internal state if the value prop changes externally
  useEffect(() => {
    setIsOn(value);
  }, [value]);

  // Handle the animation
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isOn ? 1 : 0,
      duration: duration,
      useNativeDriver: false, // Must be false for color & SVG prop interpolation
    }).start();
  }, [isOn, animatedValue, duration]);

  const toggleSwitch = () => {
    if (disabled) {
      return;
    }

    if (!isWeb) Haptics.impactAsync();

    const newValue = !isOn;
    setIsOn(newValue);
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  // Interpolations
  const trackFillColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [inactiveTrackColor as string, activeTrackColor as string],
  });

  const thumbRadius = (height - THUMB_PADDING * 2) / 2;

  // Calculate X positions for the thumb (center point)
  const minX = THUMB_PADDING + thumbRadius;
  const maxX = width - THUMB_PADDING - thumbRadius;

  const thumbPositionX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [minX, maxX],
  });

  return (
    <Pressable
      onPress={toggleSwitch}
      disabled={disabled}
      accessibilityRole="switch"
      accessibilityState={{ checked: isOn, disabled }}
      hitSlop={6}
      style={{ opacity: disabled ? DISABLED_OPACITY : 1 }}
    >
      <Svg width={width} height={height} style={{ overflow: "hidden" }}>
        {/* Background Track */}
        <AnimatedRect
          x="0"
          y="0"
          width={width}
          height={height}
          rx={height / 2} // Creates fully rounded ends
          fill={trackFillColor}
        />

        {/* Draggable Thumb */}
        <AnimatedCircle
          cx={thumbPositionX}
          cy={height / 2}
          r={thumbRadius}
          fill={thumbColor}
          /* Optional: Add a subtle shadow to the thumb using standard stroke or SVG filters */
          stroke="rgba(0,0,0,0.1)"
          strokeWidth="1"
        />
      </Svg>
    </Pressable>
  );
};

export default Switch;
