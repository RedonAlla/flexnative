/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-05-31 00:42:57
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-11-24 22:42:40
 * @ Description: Prop for Tag component.
 */

import { BorderRadius, BorderWidth, Color, Sizes } from "@flexnative/theme-context";
import { TextProps, ColorValue, ViewProps } from "react-native";

/**
 * Represents the type of a Tag component.
 * 
 * - `default`: The standard Tag type.
 * - `text`: A Tag that displays text.
 * - `ghost`: A Tag with a ghost style.
 */
export type TagType = 'default' | 'text' | 'ghost';

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
  size?: Sizes;

  /**
   * Tag type.
   * 
   * @default 'default'
  */
  type?: TagType;

  /** Tag border radius.
  * @default 'medium'
  */
  radius: BorderRadius;

  /** Color by theme or a custom color according `react-native` ColorValue.
   * @default 'default'
  */
  color: Color;

  /** Props to pass to the inner `Text` component */
  textProps?: TextProps;
}