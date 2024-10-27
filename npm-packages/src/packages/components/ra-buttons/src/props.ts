import { IconName } from "@flexnative/icons";
import { ColorValue, PressableProps, TextProps } from "react-native";


export type BorderRadius = 'none' | 'small' | 'medium' | 'large' | 'full' | number;
export type BorderWidth = 'none' | 'hairline' | 'thin' | 'base' | 'thick' | number;

export type Sizes = 'small' | 'default' | 'medium' | 'large';

export type ButtonType = 'default' | 'ghost' | 'inverse' | 'link' | 'text';
export type ButtonColor = 'default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'dark' | 'light' | ColorValue;

export interface BaseTextProps extends TextProps {
  color?: ColorValue;
  activeColor?: ColorValue;
}

export interface ITextProps extends BaseTextProps {
  value: string;
};

export type IconProps = {
  name: keyof IconName;
} & BaseTextProps;

export interface IButtonProps extends PressableProps {
  /** Children to display inside the button */
  children?: React.ReactNode;

  /** Button border radius.
  * @default 'medium'
  */
  radius: BorderRadius;

  /** Optional button borders width.
   * @default 'hairline'
  */
  borderWidth?: BorderWidth;

  /**
   * It true the button it is in disabled state and it shows a spinner while it is on loading state.
   * @default false
  */
  loading?: boolean;

  /**
   * {@link React.ReactElement} to render a custom element as loading indicator component.
  */
  renderLoading?: React.ReactElement;

  /**
   * Set the button as disabled.
   * @default false
  */
  disabled?: boolean;

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

  /** Color by theme or a custom color according `react-native` ColorValue.
   * @default 'default'
  */
  color: ButtonColor;

  /** Button color on active state, according `react-native` ColorValue. */
  activeColor?: ColorValue;

  /** Borders color color according `react-native` ColorValue. */
  borderColor?: ColorValue;

  /** Border color for active state according `react-native` ColorValue. */
  activeBorderColor?: ColorValue;

  /**
   * Text string for button or {@link ITextProps}, to render a custom element.
   * If children it is set the text property will be ignored.
   */
  text?: string | ITextProps;

  /** Optional icon to display on the left of the button
   * If children it is set the iconLeft property will be ignored.
  */
  iconLeft?: keyof IconName | IconProps | React.ReactElement;

  /** Optional icon to display on the right of the button 
   * If children it is set the iconRight property will be ignored.
  */
  iconRight?: keyof IconName | IconProps | React.ReactElement;
}