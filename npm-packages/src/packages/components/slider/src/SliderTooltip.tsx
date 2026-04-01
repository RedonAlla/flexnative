import React, { useEffect, useRef } from "react";
import {
  Animated,
  ColorValue,
  Easing,
  LayoutAnimation,
  StyleSheet,
} from "react-native";
import Svg, { Path, Text as SvgText } from "react-native-svg";

interface SliderTooltipProps {
  value: number;
  step?: number;
  visible: boolean;
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
  visible,
  fontSize,
  top,
  textColor,
  backgroundColor,
  borderColor,
  borderWidth,
}: SliderTooltipProps) => {
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: visible ? 1 : 0,
      duration: 250,
      delay: visible ? 0 : 600,
      easing: visible ? Easing.out(Easing.back(1.5)) : Easing.in(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [visible, scaleAnim]);

  useEffect(() => {
    /**
     * Smoothen layout changes when the value (and thus text size) changes.
     */
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, [value]);

  const formatValue = (val: number) => {
    return step > 0 && step < 1 ? val.toFixed(1) : Math.round(val).toString();
  };

  const label = formatValue(value);
  const width = Math.max(32, label.length * fontSize * 0.6 + 12);
  const height = fontSize + 8;
  const arrowSize = 5;
  const totalHeight = height + arrowSize;

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        styles.labelContainer,
        {
          top: top - arrowSize,
          marginLeft: -width / 2,
          opacity: scaleAnim,
          transform: [
            {
              translateY: scaleAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [totalHeight / 2, 0],
              }),
            },
            { scale: scaleAnim },
          ],
        },
      ]}
    >
      <Svg width={width} height={height + arrowSize}>
        <Path
          d={`M 4 0 H ${width - 4} Q ${width} 0 ${width} 4 V ${height - 4} Q ${width} ${height} ${width - 4} ${height} H ${width / 2 + arrowSize} L ${width / 2} ${height + arrowSize} L ${width / 2 - arrowSize} ${height} H 4 Q 0 ${height} 0 ${height - 4} V 4 Q 0 0 4 0 Z`}
          fill={backgroundColor as string}
          stroke={borderColor as string}
          strokeWidth={borderWidth}
        />
        <SvgText
          x={width / 2}
          y={height / 2 + fontSize / 3}
          fill={textColor as string}
          fontSize={fontSize}
          fontWeight="bold"
          textAnchor="middle"
        >
          {label}
        </SvgText>
      </Svg>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    position: "absolute",
    alignItems: "center",
    left: "50%",
  },
});

export default SliderTooltip;
