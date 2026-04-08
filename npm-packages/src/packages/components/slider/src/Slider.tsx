import { ThemeContextProps } from "@flexnative/theme-context";
import * as Haptics from "expo-haptics";
import React from "react";
import {
  Animated,
  GestureResponderEvent,
  I18nManager,
  PanResponderGestureState,
  Platform,
  StyleSheet,
  View,
} from "react-native";
import Svg, { Rect } from "react-native-svg";
import { BaseSlider } from "./BaseSlider";
import { SliderProps, State } from "./props";
import SliderSteps from "./SliderSteps";
import SliderThumb from "./SliderThumbImage";

const isWeb = Platform.OS === 'web';
const AnimatedRect = Animated.createAnimatedComponent(Rect);

/**
 * A custom Slider component for selecting a single value.
 *
 * This component is performance-optimized using `PureComponent` and `Animated` values, and it integrates with the FlexNative theme context.
 */
export default class Slider extends BaseSlider<SliderProps, State> {
  static defaultProps: Partial<SliderProps> = {
    value: 0,
    minimumValue: 0,
    maximumValue: 1,
    step: 0,
    thumbTouchSize: { width: 40, height: 40 },
    animationType: "timing",
    animateTransitions: false,
  };

  constructor(props: SliderProps) {
    super(props);
    this.animatedValue.setValue(props.value ?? 0);
    this.state = {
      containerSize: { width: 0, height: 0 },
      trackSize: { width: 0, height: 0 },
      thumbSize: { width: 0, height: 0 },
      allMeasured: false,
      lowValue: props.value ?? 0,
      highValue: props.maximumValue ?? 1,
      isSliding: false,
    };
  }

  componentDidUpdate(prevProps: SliderProps) {
    const { value, animateTransitions } = this.props;

    if (prevProps.value !== value && value !== undefined && !this.isDragging) {
      if (animateTransitions) {
        this.setCurrentValueAnimated(value, "low");
      } else {
        this.animatedValue.setValue(value);
      }
    }
  }

  protected getValueFromGesture = (
    gestureState: PanResponderGestureState,
  ): number => {
    const {
      step = 0,
      minimumValue = 0,
      maximumValue = 1,
      snapPoints,
    } = this.props;

    const length = this.getEffectiveTrackLength();
    if (length <= 0) return minimumValue;

    const thumbLeft = this.previousLeft + gestureState.dx;
    const nonRtlRatio = thumbLeft / length;
    const ratio = I18nManager.isRTL ? 1 - nonRtlRatio : nonRtlRatio;

    let newValue = ratio * (maximumValue - minimumValue) + minimumValue;

    if (snapPoints && snapPoints.length > 0) {
      newValue = snapPoints.reduce((prev, curr) =>
        Math.abs(curr - newValue) < Math.abs(prev - newValue) ? curr : prev,
      );
    } else if (step > 0) {
      newValue =
        Math.round((newValue - minimumValue) / step) * step + minimumValue;
    }

    return Math.max(minimumValue, Math.min(maximumValue, newValue));
  };

  protected fireChangeEvent = (
    event: "onSlidingStart" | "onValueChange" | "onSlidingComplete",
  ): void => {
    const { [event]: callback } = this.props;
    if (callback) {
      callback((this.animatedValue as any).__getValue());
    }
  };

  protected handlePanResponderMove = (
    e: GestureResponderEvent,
    gestureState: PanResponderGestureState,
  ): void => {
    if (this.props.disabled) return;
    const newValue = this.getValueFromGesture(gestureState);
    const target = this.animatedValue;

    const hasSnap =
      (this.props.step && this.props.step > 0) ||
      (this.props.snapPoints && this.props.snapPoints.length > 0);

    if (!isWeb && hasSnap && newValue !== (target as any).__getValue()) {
      Haptics.selectionAsync();
    }
    
    target.setValue(newValue);
    this.fireChangeEvent("onValueChange");
  };

  protected thumbHitTest = (e: GestureResponderEvent): boolean => {
    const { locationX, locationY } = e.nativeEvent;
    this.activeThumb = "low";
    return this.getThumbTouchRect().containsPoint(locationX, locationY);
  };

  render() {
    const {
      fontSize,
      colors,
      trackHeight,
      trackBorderRadius,
      thumbImageSize,
      thumbBorderWidth,
      thumbDefaultStyle,
    } = this.getResolvedStyles();

    const {
      step,
      snapPoints,
      hideSteps,
      minimumValue = 0,
      maximumValue = 1,
      minimumTrackTintColor = colors.primary,
      maximumTrackTintColor = colors.background,
      thumbTintColor = colors.default,
      tooltipBackgroundColor,
      tooltipBorderColor,
      tooltipBorderWidth,
      style,
      thumbStyle,
      thumbImage,
      disabled,
      accessibilityLabel,
      accessibilityLabelLow = "Value",
      testID,
    } = this.props;

    const { allMeasured, containerSize, thumbSize, lowValue } = this.state;
    const { lowThumbTranslateX, activeTrack } = this.getSliderGeometry();

    const visibilityStyle = !allMeasured ? { opacity: 0 } : {};
    const labelHeight = hideSteps ? 0 : fontSize.md + fontSize.xxs;

    return (
      <View
        style={[
          styles.container,
          { height: (thumbSize.height || fontSize.xl) + labelHeight },
          disabled ? { opacity: 0.5 } : undefined,
          style,
        ]}
        onLayout={this.handleMeasureContainer}
        testID={testID}
      >
        <View onLayout={this.handleMeasureTrack} style={styles.trackWrapper}>
          <Svg
            width={containerSize.width}
            height={(thumbSize.height || fontSize.xl) + labelHeight}
            style={visibilityStyle}
          >
            {/* Background Track */}
            <Rect
              x={0}
              y={(containerSize.height - trackHeight) / 2}
              width={containerSize.width}
              height={trackHeight}
              rx={trackBorderRadius}
              fill={maximumTrackTintColor as string}
            />
            {/* Active Track */}
            <AnimatedRect
              x={activeTrack.x}
              y={(containerSize.height - trackHeight) / 2}
              width={activeTrack.width}
              height={trackHeight}
              rx={trackBorderRadius}
              fill={minimumTrackTintColor as string}
            />
            <SliderSteps
              hideSteps={hideSteps}
              allMeasured={allMeasured}
              step={step}
              snapPoints={snapPoints}
              minimumValue={minimumValue}
              maximumValue={maximumValue}
              containerSize={containerSize}
              thumbSize={thumbSize}
              range={false}
              lowValue={lowValue}
              highValue={lowValue}
              minimumTrackTintColor={minimumTrackTintColor}
              maximumTrackTintColor={colors.card}
              textColor={colors.text}
              fontSize={fontSize.xxs}
            />
          </Svg>
        </View>

        <Animated.View
          onLayout={this.handleMeasureThumb}
          renderToHardwareTextureAndroid
          accessible={true}
          accessibilityRole="adjustable"
          accessibilityLabel={accessibilityLabel ?? accessibilityLabelLow}
          accessibilityValue={{
            min: minimumValue,
            max: maximumValue,
            now: lowValue,
            text: `${lowValue}`,
          }}
          onAccessibilityAction={(e) => this.handleAccessibilityAction(e, "low")}
          style={[
            thumbDefaultStyle,
            thumbStyle,
            {
              backgroundColor: "transparent",
              borderColor: "transparent",
              borderWidth: 0,
              transform: [{ translateX: lowThumbTranslateX }]
            },
          ]}
        >
          <SliderThumb
            value={lowValue}
            step={step}
            showTooltip={this.state.isSliding}
            fontSize={fontSize.xxs}
            textColor={colors.light}
            toolTipBackground={tooltipBorderColor ?? colors.dark}
            source={thumbImage}
            size={thumbImageSize}
            color={thumbTintColor}
            borderColor={colors.background}
            borderWidth={thumbBorderWidth}
          />
        </Animated.View>

        <View
          style={this.getTouchOverflowStyle()}
          {...this.panResponder.panHandlers}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  trackWrapper: {
    ...StyleSheet.absoluteFillObject,
    height: "auto",
  },
});
