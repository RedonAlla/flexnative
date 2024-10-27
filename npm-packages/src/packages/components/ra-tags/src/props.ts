/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-05-31 00:42:57
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-17 23:29:13
 * @ Description: Prop for Tag component.
 */

import { TextProps, ColorValue, ViewProps } from "react-native";

export type TagRadius = 'none' | 'small' | 'medium' | 'large' | 'full' | number;
export type TagColor = 'default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'dark' | 'light' | ColorValue;
export type TagType = 'default' | 'text' | 'ghost';
export type TagSize = 'small' | 'default' | 'medium' | 'large';
export type BorderWidth = 'none' | 'hairline' | 'thin' | 'base' | 'thick' | number;

export default interface TagProps extends ViewProps {
  /**
   * Text to display on tag.
   */
  text?: string;

  /**
   * Text Color.
   * 
   * @default theme.color.default
   */
  textColor?: ColorValue;

  /**
   * Background Color.
   * 
   * @default theme.color.default
   */
  backgroundColor?: ColorValue;

  /**
   * ReactNode to render custom react element.
   */
  children?: React.ReactNode;

  /** Optional borders width.
   * @default none
  */
  borderWidth?: BorderWidth;

  /** Borders color color according `react-native` ColorValue. */
  borderColor?: ColorValue;

   /** If provided, will render a Delete icon button, which will call this callback
   * on press
   */
   onDelete?: (event: React.BaseSyntheticEvent) => void;

  /** Tag Size variable.
  * @default default
  */
  size?: TagSize;

  /**
   * Tag type.
   * 
   * @default 'default'
  */
  type?: TagType;

  /** Tag border radius.
  * @default 'medium'
  */
  radius: TagRadius;

  /** Color by theme or a custom color according `react-native` ColorValue.
   * @default 'default'
  */
  color: TagColor;

  /** Props to pass to the inner `Text` component */
  textProps?: TextProps;
}