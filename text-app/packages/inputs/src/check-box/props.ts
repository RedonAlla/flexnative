/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-04-13 18:17:38
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-06-14 22:41:29
 * @ Description: The file defines the properties and types for a `CheckBox` component in a React Native application.
 *                It uses interfaces and type aliases to specify the structure and allowed values for the component's configuration.
 */


import { SyntheticEvent } from "react";
import { ColorValue, NativeSyntheticEvent, PressableProps, StyleProp, TextStyle } from "react-native";

import { BorderRadius, BorderWidth, Color, Sizes } from "@flexnative/theme-context";
import { StateCallbackType } from "../shared/input.props";

/**
 * Specifies the visual style of the checkbox.
 * 
 * Possible values are:
 *   - `default`: The default checkbox style, such as a standard checkbox.
 *   - `outlined`: A checkbox with an outline.
 *   - `solid`: A checkbox with a solid background.
 *   - `ghost`: A checkbox with no background, useful for custom styling.  For pressed effect with custom colors, use the `backgroundColor` property.
 */
export type CheckType = 'default' | 'outlined' | 'solid' | 'ghost';

export interface BaseCheckBoxProps {
  /**
   * Input type.
   * 
   * For type `ghost` to have nice effect with custom colors please use property `backgroundColor`.
   * @default 'default'
  */
  type?: CheckType;

  /**
   * Determines the size of the checkbox.
   * Uses predefined sizes from the theme context.
   * @default 'normal'
  */
  size?: Sizes;

  /**
   * CheckBox border radius.
   * Controls the border radius of the checkbox.
   * Uses predefined radius from the theme context.
  * @default 'medium'
  */
  radius?: BorderRadius;

  /** 
   * Sets the width of the checkbox's border.
   * Uses predefined widths from the theme context.
   * @default 'hairline'
  */
  borderWidth?: BorderWidth;

  /** 
   * Sets the color of the checkbox's border using a React Native `ColorValue`.
   */
  borderColor?: ColorValue;

  /** 
   * Sets the border color when the checkbox is in the checked state.
   */
  checkedBorderColor?: ColorValue;
  
  /** 
   * Sets the color of the checkbox.
   * Can be a theme color or a custom `ColorValue`.
   * @default 'primary'
  */
  color?: Color;

  /** 
   * Sets the background color of the checkbox.
   */
  backgroundColor?: ColorValue;

  /** 
   * Sets the background color when the checkbox is checked.
   */
  checkedBackgroundColor?: ColorValue;

  /**
   * Adds a box shadow effect when the checkbox is pressed.
   * Refer to the React Native documentation for `boxShadow` for more details.
   * For more details read the {@link https://reactnative.dev/docs/view-style-props#boxshadow documentation}. 
   */
  pressedBoxShadow?: string;
}

/**
 * Props that specifies the properties needed for styling CheckBox components.
 * @interface CheckProps<T>
 * @template T Represents the type of the checkbox's selected value.
 * @extends PressableProps Inherits properties from React Native's `PressableProps`.
 */
export interface CheckProps<T> extends BaseCheckBoxProps, PressableProps {
  /**
   * The current value of the checkbox.
   * @template T representing checkbox selected value.
  */
  value?: boolean | T;

  /**
   * The label to display next to the checkbox. Can be a string or a React element.
  */
  label?: string | React.ReactElement;

  /**
   * Styles for the label text.
   * Can be a `StyleProp<TextStyle>` or a function that returns `StyleProp<TextStyle>` based on the component's active state.
   */
  labelStyle?:
    | StyleProp<TextStyle>
    | ((state: StateCallbackType) => StyleProp<TextStyle>)
    | undefined;

  /**
   * A custom element to display when the checkbox is checked.
  */
  checkElement?: React.ReactElement;

  /**
   * An element to display when the checkbox is unchecked.
  */
  unCheckElement?: React.ReactElement;

  /**
  * Callback function invoked when the checkbox's value changes.
  * Receives a native or synthetic event containing the change.
  * @param event A native event containing the checkbox change.
  */
  onChange?: (event: NativeSyntheticEvent<CheckboxEvent<T>> | SyntheticEvent<HTMLInputElement, CheckboxEvent<T>>) => void;
  
  /**
   * Callback function invoked when the checkbox's value changes.
   * Receives the new value of the checkbox.
   * 
  * @template T.
  * @param T Value of checkbox.
  */
  onValueChange?: (value: T) => void;
}

/**
 * Type representing the event object passed to the `onChange` callback of the checkbox.
 * @interface CheckboxEvent<T>
 * @template T Represents the type of the checkbox's value.
 */
export type CheckboxEvent<T> = {
  /**
   * On native platforms, a `NodeHandle` for the element on which the event has occurred.
   * On web, a DOM node on which the event has occurred.
   */
  target: any;
  /**
   * The current value of the checkbox (type `T`).
   */
  value: T;
};