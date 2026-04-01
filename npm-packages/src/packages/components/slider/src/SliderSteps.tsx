import React, { memo } from "react";
import { ColorValue } from "react-native";
import { Circle, G, Text as SvgText } from "react-native-svg";

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
  }: StepsProps) => {
    const hasSnapPoints = snapPoints && snapPoints.length > 0;
    if (hideSteps || !allMeasured || (!hasSnapPoints && (!step || step <= 0)))
      return null;

    const steps = [];
    const rangeVal = maximumValue - minimumValue;

    const stepCount = hasSnapPoints
      ? snapPoints.length - 1
      : step! > 0
        ? Math.floor(rangeVal / step!)
        : 0;

    if (!allMeasured || stepCount < 0) {
      return null;
    }

    const trackWidth = containerSize.width - thumbSize.width;
    const density = trackWidth / stepCount;

    /**
     * Optimization: If steps are too dense, skip rendering some to save resources.
     * We aim for a minimum of 3 pixels between ticks and ~40 pixels between labels.
     */
    const stepSkip = Math.max(1, density < 3 ? Math.ceil(3 / density) : 1);

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

      const label = val % 1 === 0 ? val : val.toFixed(step! < 1 ? 1 : 0);

      steps.push(
        <>
          <Circle
            key={`tick-${i}`}
            cx={left}
            cy={thumbSize.height + 2}
            r={isSnapped ? 4 : 2}
            fill={tickColor as string}
          />
          <SvgText
            key={`label-${i}`}
            x={left}
            y={thumbSize.height * 2}
            fill={textColor as string}
            fontSize={fontSize}
            fontWeight="bold"
            textAnchor="middle"
          >
            {label}
          </SvgText>
        </>,
      );
    }

    return <G pointerEvents="none">{steps}</G>;
  },
);

export default SliderSteps;
