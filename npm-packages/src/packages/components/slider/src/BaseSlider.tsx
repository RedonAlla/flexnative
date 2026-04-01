import ThemeContext, { ThemeContextProps } from "@flexnative/theme-context";
import React, { PureComponent } from "react";
import {
  Animated,
  Easing,
  GestureResponderEvent,
  LayoutAnimation,
  LayoutChangeEvent,
  PanResponder,
  PanResponderGestureState,
  Platform,
  UIManager,
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

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

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

  protected getThumbTouchRect = (): Rect => {
    const { activeThumb } = this;
    const { containerSize, thumbSize } = this.state;
    const { thumbTouchSize = { width: 40, height: 40 } } = this.props;
    const touchOverflowSize = this.getTouchOverflowSize();

    const activeAnim =
      activeThumb === "low" ? this.animatedValue : this.animatedValueHigh;
    const currentValue = (activeAnim as any).__getValue();
    const nonRtlRatio = this.getRatio(currentValue);
    const thumbLeft = nonRtlRatio * (containerSize.width - thumbSize.width);

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
    const { containerSize, thumbSize } = this.state;
    const currentValue = (activeAnim as any).__getValue();
    const ratio = this.getRatio(currentValue);
    this.previousLeft = ratio * (containerSize.width - thumbSize.width);

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
