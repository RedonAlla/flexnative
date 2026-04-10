import ThemeContext, { ThemeContextProps } from "@flexnative/theme-context";
import React, { PureComponent } from "react";
import {
  AccessibilityActionEvent,
  Animated,
  Easing,
  GestureResponderEvent,
  I18nManager,
  LayoutAnimation,
  LayoutChangeEvent,
  PanResponder,
  PanResponderGestureState,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { BaseSliderProps, Rect, State } from "./props";

export const DEFAULT_ANIMATION_CONFIGS = {
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

export abstract class BaseSlider<
  P extends BaseSliderProps,
  S extends State,
> extends PureComponent<P, S> {
  static contextType = ThemeContext as React.Context<ThemeContextProps<{}>>;

  protected panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (e) =>
      this.handleStartShouldSetPanResponder(e),
    onMoveShouldSetPanResponder: () => this.handleMoveShouldSetPanResponder(),
    onPanResponderGrant: () => this.handlePanResponderGrant(),
    onPanResponderMove: (e, gs) => this.handlePanResponderMove(e, gs),
    onPanResponderRelease: (e, gs) => this.handlePanResponderEnd(e, gs),
    onPanResponderTerminationRequest: () => this.handlePanResponderRequestEnd(),
    onPanResponderTerminate: (e, gs) => this.handlePanResponderEnd(e, gs),
  });

  protected animatedValue = new Animated.Value(0);
  protected animatedValueHigh = new Animated.Value(0);

  protected previousLeft = 0;
  protected activeThumb: "low" | "high" = "low";
  protected containerSizeRef = { width: 0, height: 0 };
  protected trackSizeRef = { width: 0, height: 0 };
  protected thumbSizeRef = { width: 0, height: 0 };
  protected isDragging = false;

  componentDidMount() {
    this.animatedValue.addListener(({ value }) => {
      this.setState({ lowValue: value } as S);
    });
    this.animatedValueHigh.addListener(({ value }) => {
      this.setState({ highValue: value } as S);
    });
  }

  componentWillUnmount() {
    this.animatedValue.stopAnimation();
  }

  protected abstract thumbHitTest(e: GestureResponderEvent): boolean;
  protected abstract getValueFromGesture(
    gestureState: PanResponderGestureState,
  ): number;
  protected abstract fireChangeEvent(
    event: "onSlidingStart" | "onValueChange" | "onSlidingComplete",
  ): void;

  protected getRatio = (value: number): number => {
    const { minimumValue = 0, maximumValue = 1 } = this.props;
    return (value - minimumValue) / (maximumValue - minimumValue);
  };

  protected getEffectiveTrackLength = (): number => {
    return this.state.containerSize.width - this.state.thumbSize.width;
  };

  protected getThumbCenterOffset = (): number => {
    return this.state.thumbSize.width / 2;
  };

  protected getInterpolatedTranslateX = (
    animatedValue: Animated.Value,
  ): Animated.AnimatedInterpolation<number> => {
    const { minimumValue = 0, maximumValue = 1 } = this.props;
    const effectiveTrackLength = this.getEffectiveTrackLength();

    return animatedValue.interpolate({
      inputRange: [minimumValue, maximumValue],
      outputRange: I18nManager.isRTL
        ? [effectiveTrackLength, 0]
        : [0, effectiveTrackLength],
    });
  };

  protected getActiveTrackProps = (
    lowAnim: Animated.AnimatedInterpolation<number | string>,
    highAnim?: Animated.AnimatedInterpolation<number | string>,
  ) => {
    const { containerSize } = this.state;
    const offset = this.getThumbCenterOffset();
    const lowCenter = Animated.add(lowAnim as Animated.Value, offset);

    if (!highAnim) {
      // Single Slider Logic
      return {
        x: I18nManager.isRTL ? lowCenter : 0,
        width: I18nManager.isRTL
          ? Animated.subtract(containerSize.width, lowCenter)
          : lowCenter,
      };
    }

    // Range Slider Logic
    const highCenter = Animated.add(highAnim as Animated.Value, offset);
    return {
      x: I18nManager.isRTL ? highCenter : lowCenter,
      width: I18nManager.isRTL
        ? Animated.subtract(lowCenter, highCenter)
        : Animated.subtract(highCenter, lowCenter),
    };
  };

  protected getSliderGeometry = () => {
    const isRange = Array.isArray((this.props as any).value);
    const lowThumbTranslateX = this.getInterpolatedTranslateX(this.animatedValue);
    const highThumbTranslateX = isRange
      ? this.getInterpolatedTranslateX(this.animatedValueHigh)
      : undefined;

    const activeTrack = this.getActiveTrackProps(lowThumbTranslateX, highThumbTranslateX);

    return {
      lowThumbTranslateX,
      highThumbTranslateX,
      activeTrack,
    };
  };

  protected getResolvedStyles = () => {
    const { fontSize, colors } = (this.context as ThemeContextProps<{}>).state;
    const { trackStyle, thumbStyle } = this.props;
    const { trackDefaultStyle, thumbDefaultStyle } = this.getCommonStyles();

    const resolvedTrackStyle = StyleSheet.flatten([trackDefaultStyle, trackStyle]);
    const resolvedThumbStyle = StyleSheet.flatten([thumbDefaultStyle, thumbStyle]);

    return {
      fontSize,
      colors,
      thumbDefaultStyle,
      trackHeight: (resolvedTrackStyle as ViewStyle)?.height as number ?? 0,
      trackBorderRadius: (resolvedTrackStyle as ViewStyle)?.borderRadius as number ?? 0,
      thumbImageSize: (resolvedThumbStyle as ViewStyle).width as number ?? fontSize.xl,
      thumbBorderWidth: (resolvedThumbStyle as ViewStyle).borderWidth as number ?? 1,
    };
  };

  protected setCurrentValueAnimated = (
    value: number,
    thumb: "low" | "high" = "low",
  ): void => {
    const { animationType = "timing", animationConfig } = this.props;
    const animatedTarget =
      thumb === "low" ? this.animatedValue : this.animatedValueHigh;
    const config = {
      ...DEFAULT_ANIMATION_CONFIGS[
        animationType as keyof typeof DEFAULT_ANIMATION_CONFIGS
      ],
      ...animationConfig,
      toValue: value,
    };

    animatedTarget.stopAnimation();
    Animated[animationType as "timing" | "spring"](
      animatedTarget,
      config,
    ).start();
  };

  protected getTouchOverflowSize = (): { width: number; height: number } => {
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

  protected getTouchOverflowStyle = (): ViewStyle => {
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

  protected handleAccessibilityAction = (
    event: AccessibilityActionEvent,
    thumb: "low" | "high",
  ): void => {
    const { actionName } = event.nativeEvent;
    const { step = 0, minimumValue = 0, maximumValue = 1 } = this.props;
    
    // Default step is 10% of range if not specified
    const jump = step > 0 ? step : (maximumValue - minimumValue) / 10;
    const currentVal = thumb === "low" 
      ? (this.animatedValue as any).__getValue() 
      : (this.animatedValueHigh as any).__getValue();

    let newValue = currentVal;
    if (actionName === "increment") {
      newValue = currentVal + jump;
    } else if (actionName === "decrement") {
      newValue = currentVal - jump;
    }

    if (newValue !== currentVal) {
      // Use a dummy gesture state to leverage existing constraints (minDistance, etc)
      // or just manually clamp based on thumb type.
      const clamped = Math.max(minimumValue, Math.min(maximumValue, newValue));
      this.activeThumb = thumb;
      this.setCurrentValueAnimated(clamped, thumb);
      this.fireChangeEvent("onValueChange");
    }
  };

  protected getThumbTouchRect = (): Rect => {
    const { activeThumb } = this;
    const { containerSize, thumbSize } = this.state;
    const { thumbTouchSize = { width: 40, height: 40 } } = this.props;
    const touchOverflowSize = this.getTouchOverflowSize();

    const activeAnim =
      activeThumb === "low" ? this.animatedValue : this.animatedValueHigh;
    const currentValue = (activeAnim as any).__getValue();

    const ratio = this.getRatio(currentValue);
    const thumbLeft = I18nManager.isRTL
      ? (1 - ratio) * this.getEffectiveTrackLength()
      : ratio * this.getEffectiveTrackLength();

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

  protected handleStartShouldSetPanResponder = (
    e: GestureResponderEvent,
  ): boolean => {
    return this.thumbHitTest(e);
  };

  protected handleMoveShouldSetPanResponder = (): boolean => {
    return false;
  };

  protected handlePanResponderGrant = (): void => {
    this.isDragging = true;
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ isSliding: true } as S);

    const activeAnim =
      this.activeThumb === "low" ? this.animatedValue : this.animatedValueHigh;
    const currentValue = (activeAnim as any).__getValue();
    const ratio = this.getRatio(currentValue);
    const length = this.getEffectiveTrackLength();
    const physicalRatio = I18nManager.isRTL ? 1 - ratio : ratio;
    this.previousLeft = physicalRatio * length;

    this.fireChangeEvent("onSlidingStart");
  };

  protected abstract handlePanResponderMove(
    e: GestureResponderEvent,
    gestureState: PanResponderGestureState,
  ): void;

  protected handlePanResponderRequestEnd = (): boolean => {
    return false;
  };

  protected handlePanResponderEnd = (
    e: GestureResponderEvent,
    gestureState: PanResponderGestureState,
  ): void => {
    if (this.props.disabled) return;

    this.isDragging = false;
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ isSliding: false } as S);

    const newValue = this.getValueFromGesture(gestureState);
    const target =
      this.activeThumb === "low" ? this.animatedValue : this.animatedValueHigh;

    target.setValue(newValue);
    this.fireChangeEvent("onSlidingComplete");
  };

  protected handleMeasureContainer = (event: LayoutChangeEvent): void => {
    const { width, height } = event.nativeEvent.layout;
    if (
      this.containerSizeRef.width !== width ||
      this.containerSizeRef.height !== height
    ) {
      this.containerSizeRef = { width, height };
      this.checkAllMeasured();
    }
  };

  protected handleMeasureTrack = (event: LayoutChangeEvent): void => {
    const { width, height } = event.nativeEvent.layout;
    if (
      this.trackSizeRef.width !== width ||
      this.trackSizeRef.height !== height
    ) {
      this.trackSizeRef = { width, height };
      this.checkAllMeasured();
    }
  };

  protected handleMeasureThumb = (event: LayoutChangeEvent): void => {
    const { width, height } = event.nativeEvent.layout;
    if (
      this.thumbSizeRef.width !== width ||
      this.thumbSizeRef.height !== height
    ) {
      this.thumbSizeRef = { width, height };
      this.checkAllMeasured();
    }
  };

  protected checkAllMeasured = (): void => {
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
      } as S);
    }
  };

  protected getCommonStyles() {
    const { fontSize } = (this.context as ThemeContextProps<{}>).state;

    const trackDefaultStyle: ViewStyle = {
      height: fontSize.xxs,
      borderRadius: fontSize.xxs / 2,
    };

    const thumbDefaultStyle: ViewStyle = {
      width: fontSize.xl,
      height: fontSize.xl,
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
    };

    return { trackDefaultStyle, thumbDefaultStyle };
  }
}
