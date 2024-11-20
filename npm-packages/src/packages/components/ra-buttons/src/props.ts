/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-27 14:25:26
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-11-19 22:09:21
 * @ Description: Button props to change the component behavior.
 */

import { IconName } from "@flexnative/icons";
import { BorderRadius, BorderWidth, Color, Sizes } from "@flexnative/theme-context";
import { ColorValue, PressableProps, TextProps } from "react-native";


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
 * Interface representing the properties for a base text component.
 * Extends the properties from `TextProps`.
 * 
 * @interface BaseTextProps
 * @extends {TextProps}
 * 
 * @property {ColorValue} [color] - Optional color of the text.
 * @property {ColorValue} [activeColor] - Optional color of the text when active.
 */
export interface BaseTextProps extends TextProps {
  color?: ColorValue;
  activeColor?: ColorValue;
}

/**
 * Interface representing the properties for a text component.
 * 
 * @extends BaseTextProps
 * 
 * @property {string} value - The text value to be displayed.
 */
export interface ITextProps extends BaseTextProps {
  value: string;
};

/**
 * Represents the properties for an icon component.
 * 
 * @typedef {IconProps}
 * 
 * @property {keyof IconName} name - The name of the icon, which must be a key of the IconName type.
 * @property {BaseTextProps} BaseTextProps - Additional properties inherited from BaseTextProps.
 */
export type IconProps = {
  name: keyof IconName;
} & BaseTextProps;

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
   * To have appearance for 'text', 'link', 'ghost' with custom color you should use hex colors.
   * @default 'default'
   */
  type: ButtonType;

  /**
   * Button Sizes.
   * @default normal
   */
  size: Sizes;

  /**
   * Color by theme or a custom color according to `react-native` ColorValue.
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
}

/**
 * Interface representing the properties for a Button component.
 * 
 * @extends PressableProps
 */
export interface IButtonProps extends Omit<BaseButtonProps, 'disabled'>, PressableProps {
  /** Children to display inside the button */
  children?: React.ReactNode;

  /**
   * Custom element to render as a loading indicator component.
   */
  renderLoading?: React.ReactElement;

  /**
   * Text string for button or custom element properties.
   * If children is set, the text property will be ignored.
   */
  text?: string | ITextProps;

  /**
   * Optional icon to display on the left of the button.
   * If children is set, the iconLeft property will be ignored.
   */
  iconLeft?: keyof IconName | IconProps | React.ReactElement;

  /**
   * Optional icon to display on the right of the button.
   * If children is set, the iconRight property will be ignored.
   */
  iconRight?: keyof IconName | IconProps | React.ReactElement;
}