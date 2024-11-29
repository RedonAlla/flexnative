
import { SyntheticEvent } from "react";
import { ColorValue, NativeSyntheticEvent, PressableProps, StyleProp, TextStyle } from "react-native";

import { StateCallbackType } from "../input.props";
import { BorderRadius, BorderWidth, Color, Sizes } from "@flexnative/theme-context";

export type CheckType = 'outlined' | 'solid' | 'inverse' | 'ghost';

export interface CheckProps<T> extends PressableProps {
  /**
   * @template T representing checkbox selected value.
  */
  value?: T;

  /**
   * Input type.
   * 
   * To have appearance for ghost with custom color you should use hex colors.
   * @default 'inverse'
  */
  type: CheckType;

  /**
   * Check Box size.
   * @default 'normal'
  */
  size?: Sizes;

  /** Check Box border radius.
  * @default 'medium'
  */
  radius?: BorderRadius;

  /** Check Box borders width.
   * @default 'hairline'
  */
  borderWidth?: BorderWidth;

  /** Borders color according `react-native` ColorValue. */
  borderColor?: ColorValue;

  /** Border color for checked state according `react-native` ColorValue. */
  checkedBorderColor?: ColorValue;

  /**
   * Indicator if input it is disabled or not.
  */
  disabled?: boolean;

  /**
   * Indicator if outline borders should be shown or not on focus.
   * To have appearance for ghost with custom color you should use hex colors.
  */
  
  /** Color by theme or a custom color according `react-native` ColorValue.
   * @default 'default'
  */
  color?: Color;

  /** Background color for according `react-native` ColorValue. */
  backgroundColor?: ColorValue;

  /** Background color for active state according `react-native` ColorValue. */
  checkedBackgroundColor?: ColorValue;

  /**
   * Label to display on input.
  */
  label?: string | React.ReactElement;

  /**
   * Either text styles or a function that receives a boolean reflecting whether
   * the component is currently active and returns text styles.
   */
  labelStyle?:
    | StyleProp<TextStyle>
    | ((state: StateCallbackType) => StyleProp<TextStyle>)
    | undefined;

  /**
   * Custom element to display on checked status.
  */
  checkElement?: React.ReactElement;

  /**
   * Element to display on unchecked status.
  */
  unCheckElement?: React.ReactElement;

  /**
  * Callback that is invoked when the user presses the checkbox.
  * @param event A native event containing the checkbox change.
  */
  onChange?: (event: NativeSyntheticEvent<CheckboxEvent<T>> | SyntheticEvent<HTMLInputElement, CheckboxEvent<T>>) => void;
  
  /**
   *@template T.
  * Callback that is invoked when the user presses the checkbox.
  * @param T Value of checkbox.
  */
  onValueChange?: (value: T) => void;
}

export type CheckboxEvent<T> = {
  /**
   * On native platforms, a `NodeHandle` for the element on which the event has occurred.
   * On web, a DOM node on which the event has occurred.
   */
  target: any;
  /**
   * A value representing current checkbox value.
   */
  value: T;
};