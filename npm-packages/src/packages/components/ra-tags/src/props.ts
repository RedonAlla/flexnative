/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-05-31 00:42:57
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-04-13 17:18:50
 * @ Description: Defines the properties and types for the Tag component, including styling, content, and behavior.
 */

import { TextProps, ColorValue, ViewProps } from "react-native";
import { BorderRadius, BorderWidth, Color, Sizes } from "@flexnative/theme-context";

/**
 * Represents the type of a Tag component.
 * 
 * **Tag Types:**
 * 
 * - `solid`: The standard Tag type with a filled background.
 * - `text`: A Tag that primarily displays text, often with minimal styling.
 * - `ghost`: A Tag with a transparent background and a border, giving it a "ghost" appearance.
 */
export type TagType = 'solid' | 'text' | 'ghost';

/**
 * Base properties for the Tag component, defining its core styling and behavior.
 */
export interface BaseTagProps {
  /**
   * The color of the text within the Tag. Defaults to the theme's default text color.
   * 
   * @default theme.state.color.default
   */
  textColor?: ColorValue;

  /**
   * The background color of the Tag. Defaults to the theme's default background color.
   * 
   * @default theme.state.color.default
   */
  backgroundColor?: ColorValue;

  /** 
   * The width of the Tag's border. Defaults to no border (none).
   * @default none
  */
  borderWidth?: BorderWidth;

  /** Borders color color according `react-native` ColorValue. */
  borderColor?: ColorValue;

  /**
   * The size of the Tag, influencing its padding and font size. Defaults to 'medium'.
   * 
   * @default medium
  */
  size?: Sizes;

  /**
   * The visual style of the Tag. Defaults to `solid`.
   * 
   * @default 'solid'
  */
  type?: TagType;

  /** The border radius of the Tag's corners. Defaults to 'medium'.
  * @default 'medium'
  */
  radius?: BorderRadius;

  /**
   * Color by theme or a custom color according `react-native` ColorValue.
   * @default 'default'
  */
  color?: Color;
}


/**
 * Properties for the Tag component, extending `BaseTagProps` with content and interaction options.
 * 
 * @extends BaseTagProps
 * @extends ViewProps
 */
export default interface TagProps extends BaseTagProps, ViewProps {
  /**
   * Text to display on tag.
   */
  text?: string;

  /** 
   * Additional props to pass to the inner `Text` component.
  */
  textProps?: TextProps;

  /**
   * Custom React elements to render within the Tag, allowing for flexible content.
   */
  children?: React.ReactNode;

   /**
    * A callback function that is called when the delete icon button is pressed.
    * If provided, a delete icon will be rendered.
   */
   onDelete?: (event: React.BaseSyntheticEvent) => void;
};