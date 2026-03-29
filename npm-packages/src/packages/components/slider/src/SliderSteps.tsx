import React, { memo } from "react";
import { ColorValue, StyleSheet, Text, View } from "react-native";

interface StepsProps {
  step?: number;
  snapPoints?: number[];
  hideSteps?: boolean;
  allMeasured?: boolean;
  minimumValue: number;
  maximumValue: number;
  containerSize: { width: number; height: number };
  thumbSize: { width: number; height: number };
  maximumTrackTintColor: ColorValue;
  textColor: ColorValue;
  fontSize: number;
  top: number;
  range?: boolean;
  lowValue: number;
  highValue: number;
  minimumTrackTintColor: ColorValue;
}

/**
 * A component that renders an image to be used as the thumb of a Slider.
 *
 * @param props - The component props.
 */
const SliderSteps = memo(
  ({
    hideSteps,
    allMeasured,
    step,
    snapPoints,
    minimumValue,
    maximumValue,
    containerSize,
    thumbSize,
    range,
    lowValue = 0,
    highValue = 0,
    minimumTrackTintColor,
    maximumTrackTintColor,
    textColor,
    fontSize,
    top,
  }: StepsProps): React.JSX.Element[] => {
    const hasSnapPoints = snapPoints && snapPoints.length > 0;
    if (hideSteps || !allMeasured || (!hasSnapPoints && (!step || step <= 0)))
      return [];

    const steps = [];
    const rangeVal = maximumValue - minimumValue;

    const stepCount = hasSnapPoints
      ? snapPoints.length - 1
      : step! > 0
        ? Math.floor(rangeVal / step!)
        : 0;

    if (!allMeasured || stepCount < 0) {
      return [];
    }

    const trackWidth = containerSize.width - thumbSize.width;
    const density = trackWidth / stepCount;

    /**
     * Optimization: If steps are too dense, skip rendering some to save resources.
     * We aim for a minimum of 3 pixels between ticks and ~40 pixels between labels.
     */
    const stepSkip = density < 3 ? Math.ceil(3 / density) : 1;
    const labelFrequency = density < 40 ? Math.ceil(40 / density) : 1;

    for (let i = 0; i <= stepCount; i += stepSkip) {
      const val = hasSnapPoints ? snapPoints[i] : minimumValue + i * step!;

      const ratio = (val - minimumValue) / rangeVal;
      const left = ratio * trackWidth + thumbSize.width / 2;

      const isSelected = range
        ? val >= lowValue && val <= highValue
        : val <= lowValue;

      const isSnapped = val === lowValue || (range && val === highValue);

      const tickColor = isSelected
        ? minimumTrackTintColor
        : maximumTrackTintColor;

      steps.push(
        <View
          key={i}
          style={[styles.stepIndicator, { left: left - 2 }]}
          pointerEvents="none"
        >
          <View
            style={[
              styles.stepTick,
              {
                backgroundColor: tickColor,
                opacity: isSelected ? 1 : 0.5,
                transform: [{ scale: isSnapped ? 2 : 1 }],
              },
            ]}
          />
          {i % (stepSkip * labelFrequency) === 0 && (
            <Text
              numberOfLines={1}
              style={[
                styles.stepLabel,
                {
                  color: textColor,
                  fontSize: fontSize,
                  top: top,
                },
              ]}
            >
              {val % 1 === 0 ? val : val.toFixed(step! < 1 ? 1 : 0)}
            </Text>
          )}
        </View>,
      );
    }

    return steps;
  },
);

const styles = StyleSheet.create({
  stepIndicator: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  stepTick: {
    width: 4,
    height: 4,
    borderRadius: 2,
    zIndex: 1,
  },
  stepLabel: {
    position: "absolute",
    textAlign: "center",
    width: 40,
  },
});

export default SliderSteps;
