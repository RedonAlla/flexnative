/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-27 14:25:26
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-03-17 23:07:19
 * @ Description: Button props to change the component behavior.
 */

import { IconName } from "@flexnative/icons";
import { BorderRadius, BorderWidth, Color, Sizes } from "@flexnative/theme-context";
import { ColorValue, PressableProps, StyleProp, TextStyle } from "react-native";


/**
 * Represents the different types of buttons available in the application.
 * 
 * - `default`: Standard button style.
 * - `ghost`: Button with a transparent background.
 * - `inverse`: Button with inverted colors.
 * - `link`: Button styled as a hyperlink.
 * - `text`: Button with no background or border, just text.
 */
export type ButtonType = 'default' | 'ghost' | 'inverse' | 'link' | 'text';

/**
 * Interface representing the properties for a base button component.
 */
export interface BaseButtonProps {
  /**
   * Button border radius.
   * @default 'medium'
   */
  radius: BorderRadius;

  /**
   * Optional button borders width.
   * @default 'hairline'
   */
  borderWidth?: BorderWidth;

  /**
   * If true, the button is in a disabled state and shows a spinner while in a loading state.
   * @default false
   */
  loading?: boolean;

  /**
   * Button type.
   * 
   * For type `ghost` and `text` to have pressed effect with custom colors please use property `activeColor`.
   * @default 'default'
   */
  type: ButtonType;

  /**
   * Button Sizes.
   * 
   * - `small`: A small size.
   * - `medium`: A medium size.
   * - `large`: A large size.
   * - `number`: A custom numeric size.
   * @default 'normal'
   */
  size: Sizes;

  /**
   * Color by theme or a custom color according to `react-native` ColorValue.
   * For custom Color with type `ghost` and `text` please use property `activeColor` to have the press effect.
   * @default 'default'
   */
  color: Color;

  /**
   * Button color on active state, according to `react-native` ColorValue.
   */
  activeColor?: ColorValue;

  /**
   * Borders color according to `react-native` ColorValue.
   */
  borderColor?: ColorValue;

  /**
   * Border color for active state according to `react-native` ColorValue.
   */
  activeBorderColor?: ColorValue;

  /**
   * Create responsive stacks of full-width, `buttons`.
   */
  block?: boolean;

  /**
   * Adds a shadow effect to the button, when the button it is pressed.
   * For more details read the {@link https://reactnative.dev/docs/view-style-props#boxshadow documentation}. 
   */
  pressedBoxShadow?: string;
}

/**
 * Interface representing the properties for a Button component.
 * 
 * @extends PressableProps
 */
export interface IButtonProps extends BaseButtonProps, PressableProps {
  /**
   * Children to display inside the button
  */
  children?: React.ReactNode;

  /**
   * Custom element to render as a loading indicator component.
   */
  renderLoading?: React.ReactElement;

  /**
   * Text string for button or custom element properties.
   * If children is set, the `text` property will be ignored.
   */
  text?: string;

  /**
   * Either text styles or a function that receives a boolean reflecting whether
   * the button is pressed and returns text styles.
   */
  textStyle?:
    | StyleProp<TextStyle>
    | ((pressed: boolean) => StyleProp<TextStyle>)
    | undefined;
  
  /**
   * If true, the icon it is displayed on right size of text.
   * @type {boolean}
   */
  iconRight?: boolean;

  /**
   * Optional icon to display in the button component.
   * If children is set, the `icon` property will be ignored.
   */
  icon?: keyof IconName | React.ReactElement;

  /**
   * Either text styles or a function that receives a boolean reflecting whether
   * the button is pressed and returns text styles.
   */
  iconStyle?:
    | StyleProp<TextStyle>
    | ((pressed: boolean) => StyleProp<TextStyle>)
    | undefined;
}