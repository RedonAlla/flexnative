import React from "react";
import { Animated, ColorValue, StyleSheet, Text, View } from "react-native";

interface SliderTooltipProps {
  value: number;
  step?: number;
  opacity: Animated.Value | Animated.AnimatedInterpolation<number | string>;
  scale: Animated.AnimatedInterpolation<number | string>;
  fontSize: number;
  top: number;
  textColor: ColorValue;
  backgroundColor: ColorValue;
  borderColor?: ColorValue;
  borderWidth?: number;
}

/**
 * A component that renders a tooltip for the Slider thumb.
 *
 * @param props - The component props.
 */
const SliderTooltip = ({
  value,
  step = 0,
  opacity,
  scale,
  fontSize,
  top,
  textColor,
  backgroundColor,
  borderColor,
  borderWidth,
}: SliderTooltipProps) => {
  const formatValue = (val: number) => {
    return step > 0 && step < 1 ? val.toFixed(1) : Math.round(val).toString();
  };

  return (
    <Animated.View
      style={[
        styles.labelContainer,
        {
          top,
          opacity,
          transform: [{ scale }],
          backgroundColor,
          borderColor,
          borderWidth,
        },
      ]}
    >
      <Text style={[styles.labelText, { color: textColor, fontSize }]}>
        {formatValue(value)}
      </Text>
      <View
        style={[
          styles.labelArrow,
          {
            borderTopColor: backgroundColor,
          },
        ]}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    position: "absolute",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    minWidth: 24,
    alignItems: "center",
  },
  labelText: {
    fontWeight: "bold",
  },
  labelArrow: {
    position: "absolute",
    bottom: -4,
    width: 0,
    height: 0,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderTopWidth: 5,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
  },
});

export default SliderTooltip;
