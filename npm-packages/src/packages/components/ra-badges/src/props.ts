/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-06-01 00:00:43
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-11-11 22:27:54
 * @ Description: Badge component.
 */

import { BorderRadius, BorderWidth, Color, Sizes } from "@flexnative/theme-context";
import { TextProps, ColorValue } from "react-native";

/**
 * Represents the position of an element with optional top, bottom, left, and right properties.
 * Each property is a number that specifies the distance from the respective edge.
 * 
 * @property {number} [top] - The distance from the top edge.
 * @property {number} [bottom] - The distance from the bottom edge.
 * @property {number} [left] - The distance from the left edge.
 * @property {number} [right] - The distance from the right edge.
 */
export type Position = {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number
}

/**
 * Represents the type of a badge.
 * 
 * - `default`: The standard badge type.
 * - `text`: A badge that displays text.
 * - `ghost`: A badge with a ghost style.
 */
export type BadgeType = 'default' | 'text' | 'ghost';

/**
 * Represents the possible positions for a badge component.
 * 
 * The badge can be positioned at one of the four corners:
 * - 'top-left' => { top: -10, left: -10 }
 * - 'top-right' => { top: -10, right: -10 }
 * - 'bottom-left' => { bottom: -10, left: -10 }
 * - 'bottom-right' => { bottom: -10, right: -10 }
 * 
 * Additionally, it can take any value of the `Position` type.
 */
export type BadgePosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

/**
 * Interface representing the properties for a Badged component.
 * 
 * @extends TextProps
 * 
 * @property {string} [text] - Text to display on the badge.
 * 
 * @property {ColorValue} [textColor] - Text color value.
 * 
 * @property {ColorValue} [backgroundColor] - Badge background color.
 * 
 * @property {React.ReactNode} children - ReactNode to render where to render the badge.
 * 
 * @property {BorderWidth} [borderWidth] - Optional border width. Defaults to none.
 * 
 * @property {BadgePosition} [position] - Badge position. Defaults to 'top-right'.
 * 
 * @property {ColorValue} [borderColor] - Border color according to `react-native` ColorValue.
 * 
 * @property {Sizes} [size] - Badge size variable. Defaults to 'default'.
 * 
 * @property {BadgeType} [type] - Badge type. Defaults to 'default'.
 * 
 * @property {BorderRadius} radius - Badge border radius. Defaults to 'full'.
 * 
 * @property {Color} color - Color by theme or a custom color according to `react-native` ColorValue. Defaults to 'default'.
 */
export default interface BadgedProps extends TextProps {
  /**
   * Text to display on badged. 
   */
  text?: string;

  /**
   * Text color value.
   */
  textColor?: ColorValue;

  /**
   * Badge background color.
   */
  backgroundColor?: ColorValue;

  /**
   * ReactNode to render where to render the badge.
   */
  children: React.ReactNode;

  /** Optional borders width.
   * @default none
  */
  borderWidth?: BorderWidth;

  /** Badge position.
   * @default 'top-right'
  */
  position?: BadgePosition | Position;

  /** Borders color color according `react-native` ColorValue. */
  borderColor?: ColorValue;

  /** Badged Size variable
  * @default 'default'
  */
  size?: Sizes;

  /**
   * @default 'default'
  */
  type?: BadgeType;

  /** Badged border radius.
  * @default 'full'
  */
  radius: BorderRadius;

  /** Color by theme or a custom color according `react-native` ColorValue.
   * @default 'default'
  */
  color: Color;
}