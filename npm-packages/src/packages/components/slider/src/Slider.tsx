import ThemeContext, { ThemeContextProps } from "@flexnative/theme-context";
import * as Haptics from "expo-haptics";
import React, { PureComponent } from "react";
import {
  Animated,
  Easing,
  GestureResponderEvent,
  I18nManager,
  LayoutChangeEvent,
  PanResponder,
  PanResponderGestureState,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { Rect, SliderProps, State } from "./props";
import SliderSteps from "./SliderSteps";
import SliderThumbImage from "./SliderThumbImage";
import SliderTooltip from "./SliderTooltip";

const DEFAULT_ANIMATION_CONFIGS = {
  spring: {
    friction: 7,
    tension: 100,
    useNativeDriver: true,
  },
  timing: {
    duration: 150,
    easing: Easing.inOut(Easing.ease),
    delay: 0,
    useNativeDriver: true,
  },
} as const;

/**
 * A custom Slider component for selecting values from a range.
 *
 * This component is performance-optimized using `PureComponent` and `Animated` values, and it integrates with the FlexNative theme context.
 */
export default class Slider extends PureComponent<SliderProps, State> {
  static contextType = ThemeContext as React.Context<ThemeContextProps<{}>>;

  static defaultProps: Partial<SliderProps> = {
    value: 0,
    minimumValue: 0,
    maximumValue: 1,
    step: 0,
    minimumDistance: 0,
    thumbTouchSize: { width: 40, height: 40 },
    animationType: "timing",
    animateTransitions: false,
  };

  private panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (e) =>
      this.handleStartShouldSetPanResponder(e),
    onMoveShouldSetPanResponder: () => this.handleMoveShouldSetPanResponder(),
    onPanResponderGrant: () => this.handlePanResponderGrant(),
    onPanResponderMove: (e, gs) => this.handlePanResponderMove(e, gs),
    onPanResponderRelease: (e, gs) => this.handlePanResponderEnd(e, gs),
    onPanResponderTerminationRequest: () => this.handlePanResponderRequestEnd(),
    onPanResponderTerminate: (e, gs) => this.handlePanResponderEnd(e, gs),
  });

  private animatedValue = new Animated.Value(
    Array.isArray(this.props.value)
      ? this.props.value[0]
      : (this.props.value ?? 0),
  );

  private animatedValueHigh = new Animated.Value(
    Array.isArray(this.props.value)
      ? this.props.value[1]
      : (this.props.maximumValue ?? 1),
  );

  private previousLeft = 0;
  private activeThumb: "low" | "high" = "low";
  private containerSizeRef = { width: 0, height: 0 };
  private trackSizeRef = { width: 0, height: 0 };
  private thumbSizeRef = { width: 0, height: 0 };
  private isDragging = false;
  private labelOpacity = new Animated.Value(0);

  state: State = {
    containerSize: { width: 0, height: 0 },
    trackSize: { width: 0, height: 0 },
    thumbSize: { width: 0, height: 0 },
    allMeasured: false,
    lowValue: Array.isArray(this.props.value)
      ? this.props.value[0]
      : (this.props.value ?? 0),
    highValue: Array.isArray(this.props.value)
      ? this.props.value[1]
      : (this.props.maximumValue ?? 1),
    isSliding: false,
  };

  componentDidMount() {
    this.animatedValue.addListener(({ value }) => {
      this.setState({ lowValue: value });
    });
    this.animatedValueHigh.addListener(({ value }) => {
      this.setState({ highValue: value });
    });
  }

  componentDidUpdate(prevProps: SliderProps) {
    const { value, animateTransitions, range } = this.props;

    if (prevProps.value !== value && value !== undefined && !this.isDragging) {
      const lowValue = Array.isArray(value) ? value[0] : value;
      const highValue = Array.isArray(value)
        ? value[1]
        : range
          ? (this.animatedValueHigh as any).__getValue()
          : 0;

      if (animateTransitions) {
        this.setCurrentValueAnimated(lowValue, "low");
        if (range) this.setCurrentValueAnimated(highValue, "high");
      } else {
        this.animatedValue.setValue(lowValue);
        if (range) this.animatedValueHigh.setValue(highValue);
      }
    }
  }

  componentWillUnmount() {
    this.animatedValue.stopAnimation();
    this.animatedValue.removeAllListeners();
    this.animatedValueHigh.removeAllListeners();
  }

  // Memoized getters for better performance
  private getRatio = (value: number): number => {
    const { minimumValue = 0, maximumValue = 1 } = this.props;
    return (value - minimumValue) / (maximumValue - minimumValue);
  };

  private getThumbLeft = (value: number): number => {
    const { containerSize, thumbSize } = this.state;
    const nonRtlRatio = this.getRatio(value);
    const ratio = I18nManager.isRTL ? 1 - nonRtlRatio : nonRtlRatio;
    return ratio * (containerSize.width - thumbSize.width);
  };

  private getValueFromGesture = (
    gestureState: PanResponderGestureState,
  ): number => {
    const {
      step = 0,
      minimumValue = 0,
      maximumValue = 1,
      range,
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
      newValue = snapPoints.reduce((prev: number, curr: number) =>
        Math.abs(curr - newValue) < Math.abs(prev - newValue) ? curr : prev,
      );
    } else if (step > 0) {
      newValue =
        Math.round((newValue - minimumValue) / step) * step + minimumValue;
    }

    const min =
      this.activeThumb === "high" ? lowValue + minimumDistance : minimumValue;
    const max =
      this.activeThumb === "low" && range
        ? highValue - minimumDistance
        : maximumValue;

    return Math.max(min, Math.min(max, newValue));
  };

  private setCurrentValueAnimated = (
    value: number,
    thumb: "low" | "high" = "low",
  ): void => {
    const { animationType = "timing", animationConfig } = this.props;
    const animatedTarget =
      thumb === "low" ? this.animatedValue : this.animatedValueHigh;
    const config = {
      ...DEFAULT_ANIMATION_CONFIGS[animationType as keyof typeof DEFAULT_ANIMATION_CONFIGS],
      ...animationConfig,
      toValue: value,
    };

    animatedTarget.stopAnimation();
    (Animated[animationType as "timing" | "spring"] as any)(animatedTarget, config).start();
  };

  private fireChangeEvent = (
    event: "onSlidingStart" | "onValueChange" | "onSlidingComplete",
  ): void => {
    const { [event]: callback, range } = this.props;
    if (callback) {
      const low = (this.animatedValue as any).__getValue();
      const high = (this.animatedValueHigh as any).__getValue();

      if (range) {
        callback([low, high]);
      } else {
        callback(low);
      }
    }
  };

  // Optimized touch overflow calculations with caching
  private getTouchOverflowSize = (): { width: number; height: number } => {
    const { allMeasured, thumbSize, containerSize } = this.state;
    const { thumbTouchSize = { width: 40, height: 40 } } = this.props;

    if (!allMeasured) {
      return { width: 0, height: 0 };
    }

    return {
      width: Math.max(0, thumbTouchSize.width - thumbSize.width),
      height: Math.max(0, thumbTouchSize.height - containerSize.height),
    };
  };

  private getTouchOverflowStyle = (): ViewStyle => {
    const { width, height } = this.getTouchOverflowSize();

    const style: ViewStyle = {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    };

    if (width !== undefined && height !== undefined) {
      const verticalMargin = -height / 2;
      const horizontalMargin = -width / 2;

      style.marginTop = verticalMargin;
      style.marginBottom = verticalMargin;
      style.marginLeft = horizontalMargin;
      style.marginRight = horizontalMargin;
    }

    return style;
  };

  private getThumbTouchRect = (): Rect => {
    const { activeThumb } = this;
    const { containerSize, thumbSize } = this.state;
    const { thumbTouchSize = { width: 40, height: 40 } } = this.props;
    const touchOverflowSize = this.getTouchOverflowSize();

    const activeAnim =
      activeThumb === "low" ? this.animatedValue : this.animatedValueHigh;
    const currentValue = (activeAnim as any).__getValue();
    const thumbLeft = this.getThumbLeft(currentValue);

    return new Rect(
      touchOverflowSize.width / 2 +
        thumbLeft +
        (thumbSize.width - thumbTouchSize.width) / 2,
      touchOverflowSize.height / 2 +
        (containerSize.height - thumbTouchSize.height) / 2,
      thumbTouchSize.width,
      thumbTouchSize.height,
    );
  };

  private handleStartShouldSetPanResponder = (
    e: GestureResponderEvent,
  ): boolean => {
    return this.thumbHitTest(e);
  };

  private handleMoveShouldSetPanResponder = (): boolean => {
    return false;
  };

  private handlePanResponderGrant = (): void => {
    this.isDragging = true;
    this.setState({ isSliding: true });
    Animated.timing(this.labelOpacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();

    const activeAnim =
      this.activeThumb === "low" ? this.animatedValue : this.animatedValueHigh;
    this.previousLeft = this.getThumbLeft((activeAnim as any).__getValue());
    this.fireChangeEvent("onSlidingStart");
  };

  private handlePanResponderMove = (
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

    if (hasSnap && newValue !== (target as any).__getValue()) {
      Haptics.selectionAsync();
    }

    target.setValue(newValue);

    this.fireChangeEvent("onValueChange");
  };

  private handlePanResponderRequestEnd = (): boolean => {
    return false;
  };

  private handlePanResponderEnd = (
    e: GestureResponderEvent,
    gestureState: PanResponderGestureState,
  ): void => {
    if (this.props.disabled) return;

    this.isDragging = false;
    this.setState({ isSliding: false });
    Animated.timing(this.labelOpacity, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();

    const newValue = this.getValueFromGesture(gestureState);

    const target =
      this.activeThumb === "low" ? this.animatedValue : this.animatedValueHigh;

    const hasSnap =
      (this.props.step && this.props.step > 0) ||
      (this.props.snapPoints && this.props.snapPoints.length > 0);

    if (hasSnap && newValue !== (target as any).__getValue()) {
      Haptics.selectionAsync();
    }

    target.setValue(newValue);

    this.fireChangeEvent("onSlidingComplete");
  };

  private thumbHitTest = (e: GestureResponderEvent): boolean => {
    const { locationX, locationY } = e.nativeEvent;
    const { range } = this.props;

    if (range) {
      const currentLow = (this.animatedValue as any).__getValue();
      const currentHigh = (this.animatedValueHigh as any).__getValue();
      const originalThumb = this.activeThumb;

      this.activeThumb = "low";
      const lowHit = this.getThumbTouchRect().containsPoint(
        locationX,
        locationY,
      );

      this.activeThumb = "high";
      const highHit = this.getThumbTouchRect().containsPoint(
        locationX,
        locationY,
      );

      if (lowHit && highHit) {
        // If both handles are hit (overlapping), pick the one closest to the touch point
        const lowPos =
          this.getThumbLeft(currentLow) + this.state.thumbSize.width / 2;
        const highPos =
          this.getThumbLeft(currentHigh) + this.state.thumbSize.width / 2;
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
    }

    this.activeThumb = "low";
    return this.getThumbTouchRect().containsPoint(locationX, locationY);
  };

  private handleMeasureContainer = (event: LayoutChangeEvent): void => {
    const { width, height } = event.nativeEvent.layout;
    if (
      this.containerSizeRef.width !== width ||
      this.containerSizeRef.height !== height
    ) {
      this.containerSizeRef = { width, height };
      this.checkAllMeasured();
    }
  };

  private handleMeasureTrack = (event: LayoutChangeEvent): void => {
    const { width, height } = event.nativeEvent.layout;
    if (
      this.trackSizeRef.width !== width ||
      this.trackSizeRef.height !== height
    ) {
      this.trackSizeRef = { width, height };
      this.checkAllMeasured();
    }
  };

  private handleMeasureThumb = (event: LayoutChangeEvent): void => {
    const { width, height } = event.nativeEvent.layout;
    if (
      this.thumbSizeRef.width !== width ||
      this.thumbSizeRef.height !== height
    ) {
      this.thumbSizeRef = { width, height };
      this.checkAllMeasured();
    }
  };

  private checkAllMeasured = (): void => {
    if (
      this.containerSizeRef.width &&
      this.trackSizeRef.width &&
      this.thumbSizeRef.width
    ) {
      this.setState({
        containerSize: this.containerSizeRef,
        trackSize: this.trackSizeRef,
        thumbSize: this.thumbSizeRef,
        allMeasured: true,
      });
    }
  };

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
      range,
      disabled,
      accessibilityLabel,
      testID,
    } = this.props;

    const { allMeasured, containerSize, thumbSize, lowValue, highValue } =
      this.state;

    const thumbLeft = this.animatedValue.interpolate({
      inputRange: [minimumValue, maximumValue],
      outputRange: I18nManager.isRTL
        ? [0, -(containerSize.width - thumbSize.width)]
        : [0, containerSize.width - thumbSize.width],
    });

    const thumbLeftHigh = this.animatedValueHigh.interpolate({
      inputRange: [minimumValue, maximumValue],
      outputRange: I18nManager.isRTL
        ? [0, -(containerSize.width - thumbSize.width)]
        : [0, containerSize.width - thumbSize.width],
    });

    const minimumTrackWidth = this.animatedValue.interpolate({
      inputRange: [minimumValue, maximumValue],
      outputRange: [0, containerSize.width - thumbSize.width],
    });

    const maximumTrackWidth = this.animatedValueHigh.interpolate({
      inputRange: [minimumValue, maximumValue],
      outputRange: [0, containerSize.width - thumbSize.width],
    });

    const labelScale = this.labelOpacity.interpolate({
      inputRange: [0, 1],
      outputRange: [0.5, 1],
    });

    const visibilityStyle = !allMeasured ? { opacity: 0 } : {};

    const rangeTrackStyle = {
      position: "absolute" as const,
      left: Animated.add(
        range ? minimumTrackWidth : 0,
        range ? thumbSize.width / 2 : 0,
      ),
      width: range
        ? Animated.add(
            Animated.multiply(minimumTrackWidth, -1),
            maximumTrackWidth,
          )
        : Animated.add(minimumTrackWidth, thumbSize.width / 2),
      backgroundColor: minimumTrackTintColor,
      ...visibilityStyle,
    };

    const trackDefaultStyle: ViewStyle = {
      height: fontSize.xxs,
      borderRadius: fontSize.xxs / 2,
    };

    return (
      <View
        style={[
          styles.container,
          disabled ? { opacity: 0.5 } : undefined,
          style,
        ]}
        onLayout={this.handleMeasureContainer}
        accessible={!!accessibilityLabel}
        accessibilityLabel={accessibilityLabel}
        testID={testID}
      >
        <View
          style={[
            { backgroundColor: maximumTrackTintColor },
            trackDefaultStyle,
            trackStyle,
          ]}
          renderToHardwareTextureAndroid
          onLayout={this.handleMeasureTrack}
        />

        <Animated.View
          renderToHardwareTextureAndroid
          style={[trackDefaultStyle, trackStyle, rangeTrackStyle]}
        />

        <Animated.View
          onLayout={this.handleMeasureThumb}
          renderToHardwareTextureAndroid
          style={[
            {
              width: fontSize.xl,
              height: fontSize.xl,
              borderRadius: fontSize.xl / 2,
              backgroundColor: thumbTintColor,
              borderColor: colors.background,
            },
            styles.thumb,
            thumbStyle,
            {
              transform: [{ translateX: thumbLeft }],
              ...visibilityStyle,
            },
          ]}
        >
          <SliderTooltip
            value={lowValue}
            step={step}
            opacity={this.labelOpacity}
            scale={labelScale}
            fontSize={fontSize.xxs}
            top={-(fontSize.xl + 5)}
            textColor={colors.light}
            backgroundColor={tooltipBackgroundColor ?? colors.dark}
            borderColor={tooltipBorderColor}
            borderWidth={tooltipBorderWidth}
          />
          <SliderThumbImage source={thumbImage} size={fontSize.xl} />
        </Animated.View>

        {range && (
          <Animated.View
            renderToHardwareTextureAndroid
            style={[
              {
                width: fontSize.xl,
                height: fontSize.xl,
                borderRadius: fontSize.xl / 2,
                backgroundColor: thumbTintColor,
              },
              styles.thumb,
              thumbStyle,
              {
                transform: [{ translateX: thumbLeftHigh }],
                ...visibilityStyle,
              },
            ]}
          >
            <SliderTooltip
              value={highValue}
              step={step}
              opacity={this.labelOpacity}
              scale={labelScale}
              fontSize={fontSize.xxs}
              top={-(fontSize.xl + 5)}
              textColor={colors.light}
              backgroundColor={tooltipBackgroundColor ?? colors.dark}
              borderColor={tooltipBorderColor}
              borderWidth={tooltipBorderWidth}
            />
            <SliderThumbImage source={thumbImage} size={fontSize.xl} />
          </Animated.View>
        )}

        <View
          style={this.getTouchOverflowStyle()}
          {...this.panResponder.panHandlers}
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
          range={range}
          lowValue={lowValue}
          highValue={highValue}
          minimumTrackTintColor={minimumTrackTintColor}
          maximumTrackTintColor={colors.background}
          textColor={colors.text}
          fontSize={fontSize.xxs}
          top={fontSize.md}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  thumb: {
    borderWidth: 1,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
});
