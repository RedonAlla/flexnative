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
import { RangeSliderProps, State } from "./props";
import SliderSteps from "./SliderSteps";
import SliderThumb from "./SliderThumbImage";

const AnimatedRect = Animated.createAnimatedComponent(Rect);
const isWeb = Platform.OS !== 'web';

/**
 * A custom RangeSlider component for selecting a range of values.
 */
export default class RangeSlider extends BaseSlider<RangeSliderProps, State> {
  static defaultProps: Partial<RangeSliderProps> = {
    value: [0, 1],
    minimumValue: 0,
    maximumValue: 1,
    step: 0,
    minimumDistance: 0,
    thumbTouchSize: { width: 40, height: 40 },
    animationType: "timing",
    animateTransitions: false,
  };

  constructor(props: RangeSliderProps) {
    super(props);
    this.animatedValue.setValue(props.value?.[0] ?? 0);
    this.animatedValueHigh.setValue(props.value?.[1] ?? 1);
    this.state = {
      containerSize: { width: 0, height: 0 },
      trackSize: { width: 0, height: 0 },
      thumbSize: { width: 0, height: 0 },
      allMeasured: false,
      lowValue: props.value?.[0] ?? 0,
      highValue: props.value?.[1] ?? 1,
      isSliding: false,
    };
  }

  componentDidUpdate(prevProps: RangeSliderProps) {
    const { value, animateTransitions } = this.props;

    if (prevProps.value !== value && value !== undefined && !this.isDragging) {
      if (animateTransitions) {
        this.setCurrentValueAnimated(value[0], "low");
        this.setCurrentValueAnimated(value[1], "high");
      } else {
        this.animatedValue.setValue(value[0]);
        this.animatedValueHigh.setValue(value[1]);
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
      minimumDistance = 0,
    } = this.props;

    const lowValue = (this.animatedValue as any).__getValue();
    const highValue = (this.animatedValueHigh as any).__getValue();

    const { containerSize, thumbSize } = this.state;
    const length = containerSize.width - thumbSize.width;
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

    const min =
      this.activeThumb === "high" ? lowValue + minimumDistance : minimumValue;
    const max =
      this.activeThumb === "low" ? highValue - minimumDistance : maximumValue;

    return Math.max(min, Math.min(max, newValue));
  };

  protected fireChangeEvent = (
    event: "onSlidingStart" | "onValueChange" | "onSlidingComplete",
  ): void => {
    const { [event]: callback } = this.props;
    if (callback) {
      const low = (this.animatedValue as any).__getValue();
      const high = (this.animatedValueHigh as any).__getValue();
      callback([low, high]);
    }
  };

  protected handlePanResponderMove = (
    e: GestureResponderEvent,
    gestureState: PanResponderGestureState,
  ): void => {
    if (this.props.disabled) return;

    const newValue = this.getValueFromGesture(gestureState);

    const target =
      this.activeThumb === "low" ? this.animatedValue : this.animatedValueHigh;

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
    const currentLow = (this.animatedValue as any).__getValue();
    const currentHigh = (this.animatedValueHigh as any).__getValue();
    const { containerSize, thumbSize } = this.state;
    const originalThumb = this.activeThumb;

    this.activeThumb = "low";
    const lowHit = this.getThumbTouchRect().containsPoint(locationX, locationY);

    this.activeThumb = "high";
    const highHit = this.getThumbTouchRect().containsPoint(
      locationX,
      locationY,
    );

    if (lowHit && highHit) {
      const getLeft = (val: number) =>
        this.getRatio(val) * (containerSize.width - thumbSize.width);
      const lowPos = getLeft(currentLow) + thumbSize.width / 2;
      const highPos = getLeft(currentHigh) + thumbSize.width / 2;
      this.activeThumb =
        Math.abs(locationX - lowPos) <= Math.abs(locationX - highPos)
          ? "low"
          : "high";
      return true;
    }

    if (lowHit) {
      this.activeThumb = "low";
      return true;
    }
    if (highHit) {
      this.activeThumb = "high";
      return true;
    }

    this.activeThumb = originalThumb;
    return false;
  };

  protected getInterpolatedValues() {
    const { minimumValue = 0, maximumValue = 1 } = this.props;
    const { containerSize, thumbSize } = this.state;
    const trackWidth = containerSize.width - thumbSize.width;

    return { trackWidth, minimumValue, maximumValue };
  }

  render() {
    const { fontSize, colors } = (this.context as ThemeContextProps<{}>).state;
    const {
      step,
      snapPoints,
      hideSteps,
      minimumValue = 0,
      maximumValue = 1,
      minimumTrackTintColor = colors.primary,
      maximumTrackTintColor = colors.border,
      thumbTintColor = colors.default,
      tooltipBackgroundColor,
      tooltipBorderColor,
      tooltipBorderWidth,
      style,
      trackStyle,
      thumbStyle,
      thumbImage,
      disabled,
      accessibilityLabel,
      testID,
    } = this.props;

    const { allMeasured, containerSize, thumbSize, lowValue, highValue } =
      this.state;
    const { trackWidth } = this.getInterpolatedValues();
    const { trackDefaultStyle, thumbDefaultStyle } = this.getCommonStyles();
    const resolvedTrackStyle = StyleSheet.flatten([
      trackDefaultStyle,
      trackStyle,
    ]);
    const resolvedThumbStyle = StyleSheet.flatten([
      thumbDefaultStyle,
      thumbStyle,
    ]);
    const trackHeight = (resolvedTrackStyle.height as number) ?? 0;
    const trackBorderRadius = (resolvedTrackStyle.borderRadius as number) ?? 0;
    const thumbImageSize = (resolvedThumbStyle.width as number) ?? fontSize.xl;
    const thumbBorderWidth = (resolvedThumbStyle.borderWidth as number) ?? 1;

    const thumbLeft = this.animatedValue.interpolate({
      inputRange: [minimumValue, maximumValue],
      outputRange: I18nManager.isRTL ? [0, -trackWidth] : [0, trackWidth],
    });

    const thumbLeftHigh = this.animatedValueHigh.interpolate({
      inputRange: [minimumValue, maximumValue],
      outputRange: I18nManager.isRTL ? [0, -trackWidth] : [0, trackWidth],
    });

    const minimumTrackWidth = this.animatedValue.interpolate({
      inputRange: [minimumValue, maximumValue],
      outputRange: [0, trackWidth],
    });

    const maximumTrackWidth = this.animatedValueHigh.interpolate({
      inputRange: [minimumValue, maximumValue],
      outputRange: [0, trackWidth],
    });

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
        accessible={!!accessibilityLabel}
        accessibilityLabel={accessibilityLabel}
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
            {/* Active Range Track */}
            <AnimatedRect
              x={Animated.add(minimumTrackWidth, thumbSize.width / 2)}
              y={(containerSize.height - trackHeight) / 2}
              width={Animated.add(
                Animated.multiply(minimumTrackWidth, -1),
                maximumTrackWidth,
              )}
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
              range={true}
              lowValue={lowValue}
              highValue={highValue}
              minimumTrackTintColor={minimumTrackTintColor}
              maximumTrackTintColor={maximumTrackTintColor}
              textColor={colors.text}
              fontSize={fontSize.xxs}
            />
          </Svg>
        </View>

        <Animated.View
          onLayout={this.handleMeasureThumb}
          renderToHardwareTextureAndroid
          style={[
            thumbDefaultStyle,
            thumbStyle,
            {
              backgroundColor: "transparent",
              borderColor: "transparent",
              borderWidth: 0,
              transform: [{ translateX: thumbLeft }],
              ...visibilityStyle,
            },
          ]}
        >
          <SliderThumb
            value={lowValue}
            step={step}
            showTooltip={this.state.isSliding}
            fontSize={fontSize.xxs}
            textColor={colors.light}
            toolTipBackground={tooltipBackgroundColor ?? colors.dark}
            source={thumbImage}
            size={thumbImageSize}
            color={thumbTintColor}
            borderColor={colors.background}
            borderWidth={thumbBorderWidth}
          />
        </Animated.View>

        <Animated.View
          renderToHardwareTextureAndroid
          style={[
            thumbDefaultStyle,
            thumbStyle,
            {
              backgroundColor: "transparent",
              borderColor: "transparent",
              borderWidth: 0,
              transform: [{ translateX: thumbLeftHigh }],
              ...visibilityStyle,
            },
          ]}
        >
          <SliderThumb
            value={highValue}
            step={step}
            showTooltip={this.state.isSliding}
            fontSize={fontSize.xxs}
            textColor={colors.light}
            toolTipBackground={tooltipBackgroundColor ?? colors.dark}
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
    width: "100%",
    justifyContent: "center",
  },
  trackWrapper: {
    ...StyleSheet.absoluteFillObject,
    height: "auto",
  },
});
