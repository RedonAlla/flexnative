import { ImageSourcePropType, StyleProp, ViewStyle } from "react-native";

/**
 * Represents a rectangular area.
 */
export class Rect {
  constructor(
    /** The x-coordinate of the top-left corner. */
    public x: number,
    /** The y-coordinate of the top-left corner. */
    public y: number,
    /** The width of the rectangle. */
    public width: number,
    /** The height of the rectangle. */
    public height: number,
  ) {}

  /**
   * Checks if a point is within the rectangle's bounds.
   * @param x The x-coordinate of the point.
   * @param y The y-coordinate of the point.
   * @returns True if the point is inside the rectangle.
   */
  containsPoint(x: number, y: number): boolean {
    return (
      x >= this.x &&
      y >= this.y &&
      x <= this.x + this.width &&
      y <= this.y + this.height
    );
  }
}

/**
 * Props for the Slider component.
 */
export interface SliderProps {
  /** Initial value of the slider. */
  value?: number | number[];
  /** Whether the slider is a range slider. */
  range?: boolean;
  hideSteps?: boolean;
  /** If true, the user won't be able to interact with the slider. */
  disabled?: boolean;
  /** Initial minimum value of the slider. Default value is 0. */
  minimumValue?: number;
  /** Initial maximum value of the slider. Default value is 1. */
  maximumValue?: number;
  /** Step value of the slider. The value should be between 0 and (maximumValue - minimumValue). Default value is 0. */
  step?: number;
  /** Specific values to snap to. If provided, the slider will only stop at these values. */
  snapPoints?: number[];
  /** Minimum distance between the two handles. Default value is 0. */
  minimumDistance?: number;
  /** The color used for the track to the left of the button. */
  minimumTrackTintColor?: string;
  /** The color used for the track to the right of the button. */
  maximumTrackTintColor?: string;
  /** The color used for the thumb. */
  thumbTintColor?: string;
  /** The size of the touch area that allows moving the thumb. The touch area has the thumb centered in it. */
  thumbTouchSize?: { width: number; height: number };
  /** Callback continuously called while the user is dragging the slider. */
  onValueChange?: (value: number | number[]) => void;
  /** Callback called when the user starts changing the value (e.g. when the slider is pressed). */
  onSlidingStart?: (value: number | number[]) => void;
  /** Callback called when the user finishes changing the value (e.g. when the slider is released). */
  onSlidingComplete?: (value: number | number[]) => void;
  /** The style applied to the slider container. */
  style?: StyleProp<ViewStyle>;
  /** The style applied to the track. */
  trackStyle?: StyleProp<ViewStyle>;
  /** The style applied to the thumb. */
  thumbStyle?: StyleProp<ViewStyle>;
  /** The background color of the tooltip. */
  tooltipBackgroundColor?: string;
  /** The border color of the tooltip. */
  tooltipBorderColor?: string;
  /** The border width of the tooltip. */
  tooltipBorderWidth?: number;
  /** Sets an image for the thumb. */
  thumbImage?: ImageSourcePropType;
  /** Set to true if you want to use the default 'spring' animation. */
  animateTransitions?: boolean;
  /** Used to configure the animation type. 'spring' or 'timing'. */
  animationType?: "spring" | "timing";
  /** Used to configure the animation parameters. */
  animationConfig?: object;
  /** Customizes the screen reader description. */
  accessibilityLabel?: string;
  /** Used to locate this view in end-to-end tests. */
  testID?: string;
}

/**
 * Internal state of the Slider component.
 */
export interface State {
  /** Size of the slider container. */
  containerSize: { width: number; height: number };
  /** Size of the track. */
  trackSize: { width: number; height: number };
  /** Size of the thumb. */
  thumbSize: { width: number; height: number };
  /** Whether all components have been measured. */
  allMeasured: boolean;
  /** Current numeric value of the low thumb for display. */
  lowValue: number;
  /** Current numeric value of the high thumb for display. */
  highValue: number;
  /** Whether the user is currently dragging a thumb. */
  isSliding: boolean;
}
